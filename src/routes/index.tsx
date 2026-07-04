import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, CircuitBoard, Cpu, Radio, Wrench, FlaskConical, Factory,
  ShieldCheck, Gauge, Globe2, Layers, Zap, CheckCircle2, ChevronDown, Award, Users, Timer, Boxes,
  Car, HeartPulse, Sprout, Home as HomeIcon, Bot, Building2, Rocket, PlugZap,
} from "lucide-react";
import { useState } from "react";
import heroPcb from "../assets/hero-pcb.jpg";
import lab from "../assets/lab-oscilloscope.jpg";
import iot from "../assets/iot-device.jpg";
import mfg from "../assets/manufacturing.jpg";
import { InquiryForm } from "../components/site/InquiryForm";
import { CTABand } from "../components/site/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axiom Electronics — Electronics Product Engineering, PCB Design & IoT" },
      { name: "description", content: "From concept to production. PCB design, embedded firmware, hardware and IoT for global OEMs. Request a consultation with a senior engineer." },
      { property: "og:title", content: "Axiom Electronics — Electronics Product Engineering" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <IoTFocus />
      <Industries />
      <Products />
      <Process />
      <Capabilities />
      <TechStack />
      <Manufacturing />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <Certifications />
      <GlobalReach />
      <FAQ />
      <FinalCTA />
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-hairline">
      <div className="absolute inset-0 hairline-grid opacity-60 pointer-events-none" />
      <div className="container-x relative grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center py-12 md:py-20 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-navy border border-hairline px-3 py-1.5 bg-white" style={{ borderRadius: 2 }}>
            <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
            Electronics Product Engineering · Est. 2009
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-deep leading-[1.05]">
            From concept to production —<br />
            <span className="text-navy">complete electronics engineering</span>
            <span className="text-accent-amber">.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We're the hardware, firmware and PCB team behind connected products shipping in
            <strong className="text-navy-deep font-semibold"> 20+ countries</strong> — for OEMs in industrial automation,
            EVs, medical, energy and IoT.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Request Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-hairline pt-6">
            {[
              ["15+", "Years engineering"],
              ["450+", "Products shipped"],
              ["20+", "Countries served"],
            ].map(([n, l]) => (
              <div key={l as string}>
                <dt className="text-2xl md:text-3xl font-semibold text-navy-deep">{n}</dt>
                <dd className="text-xs font-mono uppercase tracking-widest text-steel mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden border border-hairline" style={{ borderRadius: 2 }}>
            <img
              src={heroPcb}
              alt="Multi-layer printed circuit board with SMD components and gold pads"
              width={1920}
              height={1280}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/60 via-transparent to-transparent" />
            <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
              <div className="text-white">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/70">Live project</div>
                <div className="text-sm font-medium">8-layer RF board · industrial gateway</div>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-mono" style={{ borderRadius: 2 }}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> IPC-A-610 Class 3
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col gap-1 bg-white border border-hairline px-5 py-4 shadow-xl" style={{ borderRadius: 2 }}>
            <div className="text-[10px] font-mono uppercase tracking-widest text-steel">Prototype cycle</div>
            <div className="text-2xl font-semibold text-navy-deep">~14 days</div>
            <div className="text-xs text-muted-foreground">Design → assembled prototype</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  const items = [
    ["ISO 9001:2015", Award],
    ["IPC-A-610 Class 3", ShieldCheck],
    ["ISO 13485 aware", HeartPulse],
    ["IATF 16949 aware", Car],
    ["FCC / CE / BIS", Globe2],
    ["ITAR-conscious", ShieldCheck],
  ] as const;
  return (
    <section className="border-b border-hairline bg-surface">
      <div className="container-x py-8 grid md:grid-cols-[auto_1fr] items-center gap-6">
        <div className="eyebrow whitespace-nowrap">Compliance & standards</div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {items.map(([label, Icon]) => (
            <li key={label} className="flex items-center gap-2 text-sm text-charcoal/80">
              <Icon className="h-4 w-4 text-navy" /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const serviceList = [
  { icon: CircuitBoard, name: "PCB Design & Layout", desc: "Schematic capture through DFM-ready Gerbers — 2 to 24 layers, HDI, rigid-flex, controlled impedance." },
  { icon: Cpu, name: "Embedded Firmware", desc: "Bare-metal, RTOS and Linux firmware in C/C++/Rust with production-grade OTA, bootloaders and diagnostics." },
  { icon: Wrench, name: "Hardware Design", desc: "Power, analog, mixed-signal, motor control and safety-critical hardware from spec to validated design." },
  { icon: Radio, name: "IoT Solutions", desc: "Connected devices with BLE, Wi-Fi, LoRa, NB-IoT, cellular — plus cloud integration and device management." },
  { icon: FlaskConical, name: "Prototyping", desc: "Fast-turn prototype PCBs, 3D-printed enclosures and functional prototypes for design validation." },
  { icon: Factory, name: "Manufacturing Support", desc: "DFM, DFT, BOM optimisation and NPI hand-off to our vetted EMS partners in India and Asia." },
  { icon: Layers, name: "Product Engineering (Turnkey)", desc: "Full ownership from concept to shipping product — mechanical, electronics, firmware and compliance." },
  { icon: PlugZap, name: "Electronics Consulting", desc: "Architecture reviews, cost reduction, obsolescence redesign, tech due-diligence for investors." },
];
function Services() {
  return (
    <section id="services" className="section bg-white border-b border-hairline">
      <div className="container-x">
        <SectionHead
          eyebrow="Services"
          title="Nine engineering disciplines. One accountable team."
          intro="You get a single senior engineer as your point of contact and a team that has already shipped in your domain — not junior developers learning on your project."
        />
        <div className="mt-8 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {serviceList.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="card-surface p-4 md:p-6 flex flex-col">
              <Icon className="h-6 w-6 text-navy-deep" strokeWidth={1.5} />
              <h3 className="mt-3 md:mt-5 text-[13px] md:text-base font-semibold text-navy-deep leading-tight">{name}</h3>
              <p className="mt-1.5 md:mt-2 text-[12px] md:text-sm text-muted-foreground leading-relaxed flex-1 hidden md:block">{desc}</p>
              <Link to="/services" className="mt-3 md:mt-5 inline-flex items-center gap-1 text-[10px] md:text-xs font-mono uppercase tracking-widest text-navy hover:text-navy-deep">
                Learn more <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- IOT FOCUS (inspired by hashstudioz IoT breakdown) ---------- */
const iotServices = [
  { icon: Radio, name: "IoT Consulting", items: ["Feasibility & PoC", "Architecture design", "Technology selection", "Security consulting"] },
  { icon: Factory, name: "Industrial IoT (IIoT)", items: ["Real-time asset monitoring", "SCADA / MES / ERP", "Predictive maintenance", "Edge analytics"] },
  { icon: CircuitBoard, name: "IoT Product Development", items: ["Atmel · Microchip · ESP32", "Nordic · STM32 · Raspberry Pi", "BLE · Wi-Fi · LoRa · NB-IoT", "4G / LTE-M / Cat-M1"] },
  { icon: Gauge, name: "IoT Dashboards", items: ["Real-time data visualisation", "Custom KPIs & alerts", "Multi-tenant portals", "Analytics integration"] },
  { icon: Wrench, name: "PCB & Circuit Design", items: ["Schematic capture", "Signal & power integrity", "Thermal analysis", "DFM-ready Gerbers"] },
  { icon: Cpu, name: "Firmware & Protocols", items: ["MQTT · OPC-UA · Modbus", "Bootloaders + secure OTA", "Device drivers · BSPs", "Power management"] },
  { icon: PlugZap, name: "Cloud & IoT Platforms", items: ["AWS IoT · Azure IoT · GCP", "ThingsBoard · Balena", "Device management at scale", "Data pipelines"] },
  { icon: Boxes, name: "Enterprise Mobility", items: ["React Native · Flutter", "iOS · Android · Cross-platform", "Field-worker apps", "Offline-first sync"] },
];
function IoTFocus() {
  return (
    <section className="section bg-navy-deep text-white border-b border-white/10">
      <div className="container-x">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 items-end">
          <div>
            <div className="eyebrow text-accent-amber">IoT development focus</div>
            <h2 className="mt-3 text-2xl md:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.1]">
              End-to-end IoT — from silicon to cloud dashboard.
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
            Purpose-built IoT engineering for enterprises and startups: connected hardware, secure firmware,
            edge intelligence, cloud integration and real-time analytics — under one accountable team.
          </p>
        </div>
        <div className="mt-8 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {iotServices.map(({ icon: Icon, name, items }) => (
            <div key={name} className="bg-navy-deep p-4 md:p-6 hover:bg-white/5 transition-colors">
              <Icon className="h-5 w-5 md:h-6 md:w-6 text-accent-amber" strokeWidth={1.5} />
              <h3 className="mt-3 md:mt-4 text-sm md:text-base font-semibold leading-tight">{name}</h3>
              <ul className="mt-2 md:mt-3 space-y-1 md:space-y-1.5 text-[11px] md:text-xs text-white/70 leading-snug">
                {items.map((i) => (<li key={i} className="flex gap-1.5"><span className="mt-1 h-1 w-1 rounded-full bg-accent-amber shrink-0" />{i}</li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-3">
          <Link to="/services" className="btn-primary bg-accent-amber !text-navy-deep border-accent-amber hover:bg-accent-amber/90">
            Explore IoT capabilities <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-ghost-light">Discuss your IoT project <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-end">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-navy-deep leading-[1.1]">{title}</h2>
      </div>
      {intro && <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{intro}</p>}
    </div>
  );
}

/* ---------- INDUSTRIES ---------- */
const industries = [
  { icon: Factory, name: "Industrial Automation", note: "PLCs, gateways, HMI controllers" },
  { icon: Car, name: "Automotive & EV", note: "BMS, chargers, telematics" },
  { icon: HeartPulse, name: "Medical Electronics", note: "Wearables, diagnostics, monitors" },
  { icon: Boxes, name: "Consumer Electronics", note: "White-label OEM products" },
  { icon: Sprout, name: "Agriculture / AgriTech", note: "Field sensors, irrigation, LoRa mesh" },
  { icon: Zap, name: "Energy & Utilities", note: "Smart meters, solar MPPT, grid nodes" },
  { icon: HomeIcon, name: "Smart Home", note: "Matter, Zigbee, Wi-Fi devices" },
  { icon: Bot, name: "Robotics", note: "Motor control, sensor fusion" },
  { icon: Radio, name: "Telecommunications", note: "RF, gateways, mesh networks" },
  { icon: FlaskConical, name: "Research & Labs", note: "Custom instrumentation" },
  { icon: Building2, name: "OEM Manufacturing", note: "Design & manufacturing partner" },
  { icon: Rocket, name: "Emerging Startups", note: "Concept to production runway" },
];
function Industries() {
  return (
    <section id="industries" className="section bg-surface border-b border-hairline">
      <div className="container-x">
        <SectionHead
          eyebrow="Industries served"
          title="Domain engineers, not generalists."
          intro="Every project is staffed with engineers who have already shipped in your regulatory and application environment — no learning curve billed to your budget."
        />
        <div className="mt-8 md:mt-14 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-px bg-hairline border border-hairline" style={{ borderRadius: 2 }}>
          {industries.map(({ icon: Icon, name, note }) => (
            <div key={name} className="bg-white p-4 md:p-6 hover:bg-navy-deep hover:text-white transition-colors group">
              <Icon className="h-5 w-5 md:h-6 md:w-6 text-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
              <div className="mt-3 md:mt-4 font-semibold text-navy-deep group-hover:text-white text-[13px] md:text-[15px] leading-tight">{name}</div>
              <div className="mt-1 text-[11px] md:text-xs text-muted-foreground group-hover:text-white/70 leading-snug">{note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
function Products() {
  const products = [
    { name: "AX-Gateway 400", cat: "Industrial IoT Gateway", specs: ["Quad-core ARM · 1 GB RAM", "LTE Cat-M + Wi-Fi + BLE", "-40 to +85 °C", "DIN-rail, IP40 enclosure"] },
    { name: "AX-Sense LoRa", cat: "Wireless Sensor Node", specs: ["LoRaWAN 1.0.4 · 10 km LoS", "5-year battery life", "Modbus RTU input", "IP67 field enclosure"] },
    { name: "AX-Drive µBLDC", cat: "Compact Motor Controller", specs: ["24 V / 20 A · FOC control", "CAN + RS485", "Regenerative braking", "SafeTorqueOff option"] },
  ];
  return (
    <section id="products" className="section bg-white border-b border-hairline">
      <div className="container-x">
        <SectionHead
          eyebrow="Reference platforms"
          title="Pre-engineered building blocks to compress your timeline."
          intro="License-ready hardware and firmware modules our clients white-label to reach market 30–50% faster than a from-scratch build."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div key={p.name} className="card-surface overflow-hidden flex flex-col">
              <div className="aspect-[4/3] bg-surface border-b border-hairline overflow-hidden">
                <img
                  src={i === 0 ? iot : i === 1 ? heroPcb : lab}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="eyebrow text-steel">{p.cat}</div>
                <h3 className="mt-2 text-xl font-semibold text-navy-deep">{p.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-charcoal/80 flex-1">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-navy shrink-0" /> {s}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-navy-deep hover:text-navy">
                  Request datasheet <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    ["01","Requirement discovery","Structured discovery workshop, use-case scoping, cost & compliance framing."],
    ["02","Feasibility & architecture","Reference designs, component pre-selection, risk register, milestone plan."],
    ["03","Schematic & circuit design","Peer-reviewed schematics, power budget, EMC pre-analysis, BOM optimisation."],
    ["04","PCB layout","Signal integrity, thermal, EMC and DFM-driven layout with impedance-controlled stackups."],
    ["05","Firmware & software","Bare-metal, FreeRTOS, Zephyr or Linux — with OTA, secure boot and diagnostics."],
    ["06","Prototype build","Fast-turn 5–10 unit prototype run with mechanical fit-up and enclosure integration."],
    ["07","Validation & testing","Bench validation, environmental, EMC pre-compliance, functional test scripts."],
    ["08","Certification support","FCC, CE, BIS, RoHS, IEC 62368, IEC 60601, ISO 13849 — with test-house co-ordination."],
    ["09","NPI & manufacturing","Pilot build, test-jig design, factory hand-off, first-article inspection."],
    ["10","Production ramp","Yield engineering, SPC, RMA analysis, long-term component monitoring."],
    ["11","Field & lifecycle support","Firmware updates, obsolescence redesign, cost-down cycles, sustaining engineering."],
  ];
  return (
    <section id="process" className="section bg-navy-deep text-white">
      <div className="container-x">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-end">
          <div>
            <div className="eyebrow text-white/60">Engineering process</div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.1]">
              A transparent, milestone-based process — from napkin sketch to shipping product.
            </h2>
          </div>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Every project runs on the same 11-stage framework. You know exactly what happens next, what
            deliverables you receive, and what decisions you'll be asked to make.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {steps.map(([n, t, d]) => (
            <div key={n} className="bg-navy-deep p-6 hover:bg-white/5 transition-colors">
              <div className="font-mono text-xs text-accent-amber tracking-widest">{n}</div>
              <div className="mt-3 text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CAPABILITIES ---------- */
function Capabilities() {
  const groups = [
    { title: "PCB", items: ["2–24 layer boards", "HDI & any-layer", "Rigid-flex", "Controlled impedance", "50 Ω / 100 Ω differential", "Blind & buried vias"] },
    { title: "Embedded", items: ["ARM Cortex M0/M4/M7/A", "RISC-V", "FreeRTOS / Zephyr", "Embedded Linux / Yocto", "Bootloaders + OTA", "Secure boot & TPM"] },
    { title: "Wireless / RF", items: ["BLE 5.x + Mesh", "Wi-Fi 4/5/6", "LoRaWAN", "NB-IoT / LTE-M / 4G", "Sub-GHz + 2.4 GHz", "Antenna matching + tuning"] },
    { title: "Analog & Power", items: ["Buck / boost / SEPIC", "Battery management", "Precision analog", "Motor drives up to 5 kW", "Isolation up to 5 kV", "Solar MPPT"] },
    { title: "Testing", items: ["EMC pre-compliance", "Environmental (temp/vibe)", "HALT / HASS", "Automated bench validation", "Production test jigs", "In-circuit + boundary scan"] },
    { title: "Manufacturing", items: ["DFM / DFA / DFT", "BOM cost engineering", "Pilot build 10–500 units", "EMS partner selection", "First-article inspection", "Sustaining engineering"] },
  ];
  return (
    <section id="capabilities" className="section bg-surface border-b border-hairline">
      <div className="container-x">
        <SectionHead
          eyebrow="Capabilities"
          title="A full engineering stack under one roof."
          intro="No hand-offs between vendors, no lost context. One team owns your product from schematic to serial number."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g) => (
            <div key={g.title} className="card-surface p-6">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-hairline">
                <div className="font-semibold text-navy-deep">{g.title}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-steel">{g.items.length} items</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/80">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-navy mt-1.5 h-1 w-1 rounded-full bg-navy shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TECH STACK ---------- */
function TechStack() {
  const stack = [
    ["EDA", ["Altium Designer","KiCad","Cadence Allegro","Autodesk Fusion Electronics","Ansys HFSS / SIwave"]],
    ["MCU / SoC", ["STM32","NXP i.MX / LPC","Nordic nRF52/53","ESP32-S3/C6","Silicon Labs EFR32","Renesas RA","TI Sitara","RISC-V"]],
    ["OS / RTOS", ["FreeRTOS","Zephyr","Azure RTOS","Embedded Linux (Yocto, Buildroot)","Android Automotive"]],
    ["Cloud & IoT", ["AWS IoT Core","Azure IoT Hub","Google Cloud IoT","ThingsBoard","Balena","Custom MQTT stacks"]],
    ["Protocols", ["Modbus RTU/TCP","CAN / CAN-FD","EtherCAT","OPC UA","BACnet","MQTT / CoAP","Matter"]],
    ["Test & Sim", ["LTspice / PSpice","Ansys Q3D","Rohde & Schwarz","Keysight","Tektronix MSO","Chroma / EA loads"]],
  ] as const;
  return (
    <section className="section bg-white border-b border-hairline">
      <div className="container-x">
        <SectionHead eyebrow="Technology stack" title="Best-in-class tooling, aligned to your existing workflow." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {stack.map(([title, items]) => (
            <div key={title as string}>
              <div className="text-xs font-mono uppercase tracking-widest text-navy border-b border-hairline pb-2">{title}</div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => (
                  <li key={i} className="text-xs px-2.5 py-1 border border-hairline bg-surface text-charcoal/80" style={{ borderRadius: 2 }}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MANUFACTURING ---------- */
function Manufacturing() {
  return (
    <section className="section bg-white border-b border-hairline">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={mfg} alt="SMT pick-and-place manufacturing line" width={1200} height={912} loading="lazy" className="w-full border border-hairline" style={{ borderRadius: 2 }} />
          <div className="absolute -bottom-5 -right-5 hidden md:block bg-navy-deep text-white px-5 py-4 shadow-xl" style={{ borderRadius: 2 }}>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Pilot to production</div>
            <div className="text-2xl font-semibold">10 → 100k units</div>
          </div>
        </div>
        <div>
          <div className="eyebrow">Manufacturing & testing</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight leading-[1.15]">
            Vetted EMS partners. Real quality control. Your design, protected.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We run pilot builds in-house and hand-off to production partners we've qualified over a decade —
            with SPC, first-article inspection and in-line functional testing. Your design files and firmware
            stay with you.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "IPC-A-610 Class 2 and Class 3 assembly",
              "AOI, X-ray for BGA and QFN inspection",
              "Custom test-jig design and yield analytics",
              "Country of origin: India, Vietnam or Mexico",
            ].map((s) => (
              <li key={s} className="flex gap-2.5"><CheckCircle2 className="h-5 w-5 text-navy-deep mt-0.5 shrink-0" /> <span className="text-charcoal/85">{s}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
function WhyChooseUs() {
  const items = [
    [Users, "Engineering-first, not sales-first", "Your first call is with a senior engineer who's shipped in your domain — not an account manager reading from a script."],
    [Timer, "Rapid prototype turnaround", "Assembled prototype in ~14 days on typical projects. We keep component stock, layout templates and CM slots reserved."],
    [ShieldCheck, "Your IP stays yours", "Mutual NDA before technical discussion. Design files, firmware source and manufacturing files transfer to you on completion."],
    [Gauge, "Transparent, milestone billing", "Fixed-scope milestones with clear deliverables. No opaque time-and-materials burn without your approval."],
    [Layers, "Prototype to production, one team", "The same engineers who designed your product own the manufacturing hand-off. No context lost between vendors."],
    [Globe2, "Global-standards ready", "FCC, CE, UKCA, BIS, IEC 60601, IEC 61508, IEC 62368, ISO 13849 — we design to certify, not to rework."],
  ] as const;
  return (
    <section className="section bg-surface border-b border-hairline">
      <div className="container-x">
        <SectionHead
          eyebrow="Why clients choose Axiom"
          title="The reasons OEMs pick us over the big consultancies — and keep coming back."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(([Icon, t, d]) => (
            <div key={t} className="card-surface p-6">
              <Icon className="h-6 w-6 text-navy-deep" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold text-navy-deep">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CASE STUDIES ---------- */
function CaseStudies() {
  const cs = [
    {
      industry: "Industrial Automation",
      title: "Retrofit IoT gateway for a European CNC OEM",
      problem: "Legacy fleet of 8,000 CNC machines had no remote monitoring; existing gateway vendor discontinued the product.",
      solution: "Redesigned drop-in replacement gateway with Modbus, OPC UA and MQTT — pin-compatible with the legacy harness.",
      outcome: "22% lower BOM · 4-week field-swap program · 99.6% uptime across 12 months of deployment.",
      tech: ["STM32MP1","Yocto Linux","OPC UA","AWS IoT","LTE Cat-M"],
    },
    {
      industry: "Medical Electronics",
      title: "Wearable ECG monitor for a US clinical trial",
      problem: "Startup needed IEC 60601-1 compliant 3-lead ECG in a wearable form factor for a 500-patient trial.",
      solution: "Full turnkey: analog front-end on ADS1292R, BLE 5, tamper-evident enclosure, mobile app hooks and IEC 62304 firmware process.",
      outcome: "Trial enrolment on schedule · zero device-related adverse events · FDA 510(k) pathway ready.",
      tech: ["nRF5340","ADS1292R","BLE 5.2","IEC 62304","IEC 60601-1"],
    },
    {
      industry: "Electric Vehicles",
      title: "Battery management system for a 2-wheeler EV",
      problem: "Indian EV OEM needed a cost-optimised 72V BMS with cell balancing, CAN telematics and BIS certification.",
      solution: "Custom BMS with 20-cell active balancing, ISO 26262 ASIL-B aligned firmware, integrated CAN + BLE telematics.",
      outcome: "18% cell life improvement · BIS 17017 certified in 11 weeks · scaled to 40,000 units in year one.",
      tech: ["STM32G4","BQ76952","CAN-FD","ISO 26262","BIS 17017"],
    },
  ];
  return (
    <section id="case-studies" className="section bg-white border-b border-hairline">
      <div className="container-x">
        <SectionHead
          eyebrow="Case studies"
          title="Real projects. Measurable outcomes."
          intro="A selection of recent, representative work. Full case files (with client permission) available on request under NDA."
        />
        <div className="mt-14 grid gap-4">
          {cs.map((c) => (
            <article key={c.title} className="card-surface p-6 md:p-8 grid lg:grid-cols-[1fr_1.5fr_1fr] gap-8">
              <div>
                <div className="eyebrow">{c.industry}</div>
                <h3 className="mt-3 text-xl font-semibold text-navy-deep">{c.title}</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-1">Problem</div>
                  <p className="text-charcoal/85 leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-1">Approach</div>
                  <p className="text-charcoal/85 leading-relaxed">{c.solution}</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-accent-amber mb-1">Outcome</div>
                  <p className="text-navy-deep font-medium leading-relaxed">{c.outcome}</p>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-2">Technologies</div>
                <ul className="flex flex-wrap gap-1.5">
                  {c.tech.map((t) => <li key={t} className="text-xs px-2 py-1 bg-surface border border-hairline" style={{ borderRadius: 2 }}>{t}</li>)}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-navy-deep hover:text-navy">
                  Request full case file <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const t = [
    { q: "Axiom's team engaged with our regulatory constraints from day one. We hit IEC 60601-1 with zero rework — that's not something we've seen from previous vendors.", r: "VP of Engineering", c: "Medical device OEM · Netherlands" },
    { q: "They rescued a stalled BMS program and had a working prototype in seven weeks. The transparency on cost trade-offs was the differentiator.", r: "CTO", c: "EV two-wheeler startup · India" },
    { q: "Their manufacturing hand-off worked exactly as promised. First-article passed, second batch shipped, and the design files are ours.", r: "Head of Operations", c: "Industrial gateway OEM · Germany" },
  ];
  return (
    <section className="section bg-surface border-b border-hairline">
      <div className="container-x">
        <SectionHead eyebrow="Client voices" title="What engineering leaders say after working with us." />
        <p className="mt-3 text-xs text-muted-foreground italic">Attributed to role and region — full names & logos disclosed post-NDA at client request.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {t.map((x, i) => (
            <figure key={i} className="card-surface p-8 flex flex-col">
              <div className="text-4xl font-serif text-navy leading-none">"</div>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-charcoal/90 flex-1">{x.q}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-hairline">
                <div className="font-semibold text-navy-deep text-sm">{x.r}</div>
                <div className="text-xs text-muted-foreground">{x.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */
function Certifications() {
  const items = [
    ["ISO 9001:2015", "Quality management"],
    ["ISO 13485 aware", "Medical devices"],
    ["IATF 16949 aware", "Automotive"],
    ["IPC-A-610 Class 3", "High-reliability assembly"],
    ["IEC 62304", "Medical device software"],
    ["IEC 61508", "Functional safety"],
    ["ISO 26262 aligned", "Automotive functional safety"],
    ["RoHS · REACH", "Materials compliance"],
  ];
  return (
    <section className="section bg-white border-b border-hairline">
      <div className="container-x">
        <SectionHead eyebrow="Certifications & standards" title="We design to certify — not to rework." />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline" style={{ borderRadius: 2 }}>
          {items.map(([n, d]) => (
            <div key={n} className="bg-white p-6">
              <div className="font-semibold text-navy-deep text-sm">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GLOBAL REACH ---------- */
function GlobalReach() {
  const regions = [
    ["North America", "US, Canada, Mexico"],
    ["Europe", "DE, NL, UK, FR, IT, ES, Nordics"],
    ["Middle East", "UAE, KSA, Israel"],
    ["Asia Pacific", "IN, SG, JP, AU, KR"],
    ["Africa", "ZA, KE, NG"],
    ["LATAM", "BR, CO, CL"],
  ];
  return (
    <section className="section bg-navy-deep text-white border-b border-white/10">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
        <div>
          <div className="eyebrow text-white/60">Global reach</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
            Engineered in India. Deployed in <span className="text-accent-amber">20+ countries.</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-lg">
            We operate on your timezone. Weekly sprint reviews in your working hours. Documentation, meetings
            and specs in English — with regional compliance built in.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {regions.map(([r, l]) => (
            <div key={r} className="bg-navy-deep p-5">
              <div className="font-semibold">{r}</div>
              <div className="text-xs text-white/60 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    ["What's a typical project timeline?", "Prototypes take 6–14 weeks depending on complexity. Full turnkey products (design → certified, production-ready) typically land in 6–9 months. We commit to fixed milestones in the proposal."],
    ["Do you sign NDAs before technical discussion?", "Yes — a mutual NDA is standard before any specification-level conversation. We can sign yours or use our template. All design files remain your IP."],
    ["Is there a minimum project size?", "Consultation and design reviews start at 40 hours. Full development projects typically start at USD 25k. There's no minimum order quantity for manufacturing — pilot builds start at 10 units."],
    ["How does the prototype process work?", "After specification lock, we run design → review → prototype build → validation. Fast-turn prototypes ship in ~14 days; you receive assembled boards, mechanical fit-up and a validation report."],
    ["Can you handle certification and testing?", "Yes. We design to FCC, CE, UKCA, BIS, IEC 60601, IEC 62368, ISO 13849 and other regional standards, and co-ordinate with accredited test houses for formal certification."],
    ["Do you support international shipping and manufacturing?", "We manufacture in India, Vietnam and Mexico depending on tariffs and volumes. We handle EXW, FCA, DAP shipping to any country. HTS classification and CoO documentation included."],
    ["What ongoing support is available post-launch?", "Sustaining engineering, firmware OTA management, obsolescence redesigns and cost-down cycles are offered on retainer or per-project basis."],
    ["How is pricing structured?", "Milestone-based fixed price for design phases. Manufacturing is quoted per-unit with volume tiers. No opaque hourly billing without your explicit approval."],
    ["Can we start with just a consultation?", "Yes. A 90-minute technical consultation with a senior engineer is a common starting point — often the fastest way to de-risk your next steps."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="section bg-white border-b border-hairline">
      <div className="container-x grid lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <div className="eyebrow">FAQs</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight leading-[1.15]">
            Answers before you ask.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Questions we get every week from engineering leaders evaluating a new development partner.
            Something not covered? <Link to="/contact" className="text-navy-deep underline underline-offset-4">Ask us directly.</Link>
          </p>
        </div>
        <div className="border-t border-hairline">
          {faqs.map(([q, a], i) => (
            <div key={q} className="border-b border-hairline">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-navy-deep">{q}</span>
                <ChevronDown className={`h-5 w-5 text-navy shrink-0 mt-0.5 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="pb-5 pr-10 text-sm text-muted-foreground leading-relaxed">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA + FORM ---------- */
function FinalCTA() {
  return (
    <>
      <CTABand />
      <section id="inquiry" className="section bg-surface">
        <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <div>
            <div className="eyebrow">Start the conversation</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight leading-[1.1]">
              Tell us what you're building.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Share as much or as little as you like. A senior engineer reviews every inquiry and responds within
              one business day with clarifying questions and next steps.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Senior engineer response — not a sales rep",
                "Mutual NDA available before technical discussion",
                "No obligation, no automated drip campaigns",
                "Fixed-scope proposal within 5 business days",
              ].map((s) => (
                <li key={s} className="flex gap-2.5"><CheckCircle2 className="h-5 w-5 text-navy-deep mt-0.5 shrink-0" /> <span className="text-charcoal/85">{s}</span></li>
              ))}
            </ul>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
