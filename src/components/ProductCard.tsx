import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={products} />
    </div>
  );
}
const products = [
  {
    id: "ic123",
    name: "'Delta Electronics DC Brushless Blower Fan",
    code: "BFB0712H",
    price: "Approximately ₹500-₹1,500",
    image: "/delta electronics.jpg",
    alt: "Integrated Circuit",
  },
  {
    id: "tr456",
    name: "Siemens Indicator Light Module",
    code: "3SB14 04-2HZ26",
    price:
      "Price not readily available, may be a discontinued or specialized part.",
    image: "/siemens indicator.jpg",
    alt: "Transistor",
  },
  {
    id: "cp789",
    name: "Fire Alarm Sounder",
    code: "RE-24SS",
    price: "Approximately ₹400-₹600",
    image: "/fire alarm.jpg",
    alt: "Capacitor",
  },
  {
    id: "rs012",
    name: "RS PRO Lithium-Ion Rechargeable Battery Pack",
    code: "RS Stock No. 260-2990",
    price:
      "P.O.A. (Price on Application), you must contact the supplier for a quote",
    image: "/rspro.jpg",
    alt: "Resistor",
  },
  {
    id: "dd345",
    name: "3-Phase Motor Control Module / Solid State Relay",
    code: "HFS21",
    price: "Approximately ₹1,500 - ₹3,000",
    image: "/3phasemotor.jpg",
    alt: "3-Phase Motor",
  },
  {
    id: "in678",
    name: "Delta Electronics DC Brushless Blower Fan",
    code: "BFB1012UH8",
    price: "Approximately ₹2,000 - ₹4,500",
    image: "/dcbrush.jpg",
    alt: "DC brush",
  },
];
