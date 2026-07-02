import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Car, HeartPulse, Boxes, Sprout, Zap, Home as HomeIcon, Bot, Radio, FlaskConical, Building2, Rocket } from "lucide-react";
import { CTABand } from "../components/site/CTABand";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Automotive, Medical, Industrial IoT & More | Axiom Electronics" },
      { name: "description", content: "Electronics product engineering for industrial automation, EV, medical devices, IoT, energy, agriculture, robotics and telecom. Domain engineers, not generalists." },
      { property: "og:title", content: "Industries We Engineer For" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const items = [
  { icon: Factory, name: "Industrial Automation", copy: "PLC gateways, HMI controllers, edge compute, protocol converters. Modbus / OPC UA / EtherCAT native.", stds: ["IEC 61131", "IEC 61508", "UL 508A"] },
  { icon: Car, name: "Automotive & EV", copy: "Battery management, on-board chargers, motor drives, telematics. ISO 26262-aligned firmware.", stds: ["ISO 26262", "IATF 16949", "AEC-Q100"] },
  { icon: HeartPulse, name: "Medical Electronics", copy: "Wearables, patient monitors, diagnostic instruments. IEC 60601-1 and IEC 62304 discipline.", stds: ["IEC 60601-1", "IEC 62304", "ISO 13485"] },
  { icon: Boxes, name: "Consumer Electronics", copy: "White-label OEM products from concept to certified, DFM-ready design.", stds: ["FCC", "CE / UKCA", "RoHS"] },
  { icon: Sprout, name: "Agriculture / AgriTech", copy: "Field-hardened sensors, irrigation controllers, LoRa mesh networks. Solar-powered, 5-year battery life.", stds: ["IP67", "LoRaWAN", "IEC 61000"] },
  { icon: Zap, name: "Energy & Utilities", copy: "Smart meters, solar MPPT, grid nodes, EV charging. Isolation and safety-critical.", stds: ["IEC 62053", "IEC 61851", "UL 1741"] },
  { icon: HomeIcon, name: "Smart Home", copy: "Matter, Zigbee, Thread, Wi-Fi 6 devices. Cloud provisioning and OTA at fleet scale.", stds: ["Matter 1.x", "Thread 1.3", "FCC / CE"] },
  { icon: Bot, name: "Robotics", copy: "Motor control up to 5 kW, sensor fusion, real-time control. ROS 2 integration.", stds: ["ISO 13849", "ISO 10218", "IEC 61800-5-2"] },
  { icon: Radio, name: "Telecommunications", copy: "RF front-ends, gateways, mesh networks, small cells. Antenna design + tuning in-house.", stds: ["3GPP", "ETSI EN 300", "FCC Part 15"] },
  { icon: FlaskConical, name: "Research & Labs", copy: "Custom instrumentation, low-noise analog front-ends, precision timing systems.", stds: ["IEC 61010", "IEEE 1588", "GLP-ready"] },
  { icon: Building2, name: "OEM Manufacturing", copy: "Long-term design and manufacturing partner for established brands. Sustaining engineering at scale.", stds: ["ISO 9001", "IPC-A-610", "ISO 14001"] },
  { icon: Rocket, name: "Emerging Startups", copy: "Concept-to-production runway with investor-grade documentation and IP hygiene.", stds: ["Investor DD ready", "Full IP transfer", "NDA-first"] },
];

function Industries() {
  return (
    <>
      <section className="bg-navy-deep text-white border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow text-white/60">Industries</div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Domain engineers.<br />Not generalists<span className="text-accent-amber">.</span>
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-2xl">
              We staff every project with engineers who have already shipped in your regulatory environment.
              No learning curve billed to your budget. No compliance surprises at the finish line.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, name, copy, stds }) => (
            <article key={name} className="card-surface p-6 flex flex-col">
              <Icon className="h-7 w-7 text-navy-deep" strokeWidth={1.5} />
              <h2 className="mt-5 text-xl font-semibold text-navy-deep">{name}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{copy}</p>
              <div className="mt-5 pt-4 border-t border-hairline">
                <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-2">Standards</div>
                <ul className="flex flex-wrap gap-1.5">
                  {stds.map((s) => <li key={s} className="text-xs px-2 py-1 bg-surface border border-hairline" style={{ borderRadius: 2 }}>{s}</li>)}
                </ul>
              </div>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-navy-deep">
                Discuss your project <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
