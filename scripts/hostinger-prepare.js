#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Preparing static export for Hostinger hosting...');

const outDir = path.join(__dirname, '..', 'out');
const assetsDir = path.join(outDir, 'assets');
const nextDir = path.join(outDir, '_next');

// Create assets directory if it doesn't exist
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Function to recursively copy directory
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Function to update file references
function updateFileReferences(filePath, fromPath, toPath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all references to _next with assets (multiple patterns)
  content = content.replace(/\/_next\//g, '/assets/');
  content = content.replace(/"_next\//g, '"assets/');
  content = content.replace(/'_next\//g, "'assets/");
  content = content.replace(/`_next\//g, '`assets/');
  content = content.replace(/url\(\/_next\//g, 'url(/assets/');
  content = content.replace(/url\("_next\//g, 'url("assets/');
  content = content.replace(/url\('_next\//g, "url('assets/");
  // Handle relative paths without leading slash
  content = content.replace(/"_next\//g, '"assets/');
  content = content.replace(/'_next\//g, "'assets/");
  // Handle encoded URLs
  content = content.replace(/%2F_next%2F/g, '%2Fassets%2F');
  content = content.replace(/\\_next\\/g, '\\assets\\');
  
  fs.writeFileSync(filePath, content);
}

// Function to recursively update all HTML and JS files
function updateAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && entry.name !== '_next' && entry.name !== 'assets') {
      updateAllFiles(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.css'))) {
      updateFileReferences(fullPath);
    }
  }
}

try {
  // Step 1: Copy _next directory to assets
  if (fs.existsSync(nextDir)) {
    console.log('📁 Moving _next directory to assets...');
    copyDir(nextDir, assetsDir);
    
    // Step 2: Update all file references
    console.log('🔗 Updating file references...');
    updateAllFiles(outDir);
    
    // Step 3: Remove _next directory
    console.log('🗑️  Removing _next directory...');
    fs.rmSync(nextDir, { recursive: true, force: true });
    
    console.log('✅ Successfully prepared export for Hostinger!');
    console.log('📋 Assets moved from _next/ to assets/');
    console.log('🔗 All references updated in HTML, JS, and CSS files');
  } else {
    console.log('⚠️  No _next directory found');
  }
} catch (error) {
  console.error('❌ Error preparing export:', error);
  process.exit(1);
}
