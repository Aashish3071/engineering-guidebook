import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import heroPcb from "../assets/hero-pcb.jpg";
import lab from "../assets/lab-oscilloscope.jpg";
import iot from "../assets/iot-device.jpg";
import { InquiryForm } from "../components/site/InquiryForm";
import { CTABand } from "../components/site/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axiom Electronics — PCB Design, IoT Hardware & Embedded Engineering" },
      { name: "description", content: "Custom PCB design, IoT hardware development, sensor design and embedded firmware engineering. From schematic to certified product." },
      { property: "og:title", content: "Axiom Electronics — PCB Design & IoT Engineering" },
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
      <WhatWeDo />
      <Industries />
      <SelectedWork />
      <HowWeWork />
      <ContactSection />
    </>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-hairline">
      <div className="absolute inset-0 hairline-grid opacity-40 pointer-events-none" />
      <div className="container-x relative grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-14 md:py-24 lg:py-32">
        {/* Left — text */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-navy-deep leading-[1.08]">
            We design circuit boards<br className="hidden sm:block" />
            and write firmware<span className="text-accent-amber">.</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal/75 max-w-lg leading-relaxed">
            PCB design, embedded systems, IoT hardware and sensor engineering
            for companies building connected products. Based in India, working
            with teams across Europe, the US and Southeast Asia.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Talk to an engineer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/case-studies" className="btn-outline">
              View Case Studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative">
          <div className="overflow-hidden border border-hairline" style={{ borderRadius: 3 }}>
            <img
              src={heroPcb}
              alt="Multi-layer PCB with SMD components under inspection"
              width={960} height={640}
              className="w-full h-[380px] md:h-[480px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── WHAT WE DO (services) ─────────────────── */

function WhatWeDo() {
  return (
    <section className="section bg-surface border-b border-hairline">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight leading-tight">
          Engineering capabilities
        </h2>
        <p className="mt-4 text-charcoal/70 max-w-2xl leading-relaxed">
          We're an electronics engineering consultancy. We don't manufacture anything — we design
          the schematics, lay out the PCBs, write the firmware and help you get through
          certification. Then we hand you the files.
        </p>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white p-8 md:p-10 border border-hairline flex flex-col h-full" style={{ borderRadius: 3 }}>
            <h3 className="text-2xl font-semibold text-navy-deep">PCB Design & Layout</h3>
            <p className="mt-4 text-charcoal/70 leading-relaxed flex-grow">
              From 2-layer prototypes to 24-layer HDI boards with controlled impedance
              and rigid-flex. We handle high-speed digital, RF, and power electronics.
            </p>
            <Link to="/services/pcb-design" className="mt-8 inline-flex items-center gap-1.5 text-accent-amber font-medium group">
              Read technical deep-dive <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-navy-deep text-white p-8 md:p-10 flex flex-col h-full" style={{ borderRadius: 3 }}>
            <h3 className="text-2xl font-semibold">IoT & Sensors</h3>
            <p className="mt-4 text-white/70 leading-relaxed flex-grow">
              Connected devices with BLE, Wi-Fi, LoRa, and NB-IoT. Custom analog front-ends for 
              environmental, industrial, and solar monitoring.
            </p>
            <Link to="/services/iot-hardware" className="mt-8 inline-flex items-center gap-1.5 text-accent-amber font-medium group">
              Read technical deep-dive <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 md:p-10 border border-hairline flex flex-col h-full" style={{ borderRadius: 3 }}>
            <h3 className="text-2xl font-semibold text-navy-deep">Embedded Firmware</h3>
            <p className="mt-4 text-charcoal/70 leading-relaxed flex-grow">
              Bare-metal, RTOS (FreeRTOS, Zephyr), and Embedded Linux. We build deterministic 
              systems with secure boot and robust OTA update pipelines.
            </p>
            <Link to="/services/embedded-firmware" className="mt-8 inline-flex items-center gap-1.5 text-accent-amber font-medium group">
              Read technical deep-dive <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── IOT & SENSORS (Merged into Deep Dives) ─────────────────── */
// Removed to avoid redundancy. Content is now in /services/iot-hardware.

/* ─────────────────── INDUSTRIES — simple text, not icon grid ─────────────────── */

function Industries() {
  const industries = [
    { name: "Industrial Automation", desc: "PLCs, motor drives, and CNC retrofits." },
    { name: "Automotive & EV", desc: "BMS, motor controllers, and telematics." },
    { name: "Medical Electronics", desc: "ISO 13485 compliant monitoring devices." },
    { name: "Solar & Energy", desc: "MPPT trackers, inverters, and metering." },
    { name: "Agriculture", desc: "Soil sensors, drone telemetry, and irrigation." },
    { name: "Smart Home", desc: "HVAC controllers and security panels." },
    { name: "Robotics", desc: "AGVs, servo controllers, and kinematics." },
    { name: "Telecom", desc: "Base station monitoring and RRU controllers." },
    { name: "Consumer Electronics", desc: "High-volume wearables and audio gear." },
  ];

  return (
    <section className="section bg-white border-b border-hairline">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight">
            Industries we work in
          </h2>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            Most of our work falls into industrial automation, automotive/EV, solar energy and
            medical devices. The common thread is that these are regulated products where
            getting the hardware right matters.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-l border-hairline">
          {industries.map((ind) => (
            <div key={ind.name} className="p-6 md:p-8 border-b border-r border-hairline hover:bg-surface transition-colors group">
              <h3 className="text-lg font-semibold text-navy-deep">{ind.name}</h3>
              <p className="mt-2 text-sm text-charcoal/65">{ind.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Link to="/industries" className="inline-flex items-center gap-1.5 text-sm text-navy-deep font-medium group">
            More on industries <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SELECTED WORK ─────────────────── */

function SelectedWork() {
  return (
    <section className="section bg-surface border-b border-hairline">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight">
          Selected work
        </h2>
        <p className="mt-3 text-charcoal/60 text-sm">
          Client details anonymised. Full case files available under NDA.
        </p>

        <div className="mt-10 space-y-6">
          {/* Case 1 */}
          <article className="bg-white border border-hairline p-6 md:p-8 grid md:grid-cols-[1fr_2fr] gap-6" style={{ borderRadius: 3 }}>
            <div>
              <div className="text-xs text-steel font-medium uppercase tracking-wider">Industrial · Europe</div>
              <h3 className="mt-2 text-xl font-semibold text-navy-deep leading-snug">
                IoT gateway replacement for a CNC machine fleet
              </h3>
            </div>
            <div>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                Their previous gateway supplier discontinued the product. We designed a drop-in replacement —
                STM32MP1, Modbus RTU + OPC-UA, LTE connectivity — that was pin-compatible with the existing
                cable harness. Rolled out across 8,000 machines in 12 countries.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["STM32MP1", "Yocto Linux", "OPC-UA", "LTE Cat-M"].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border border-hairline text-charcoal/70" style={{ borderRadius: 2 }}>{t}</span>
                ))}
              </div>
            </div>
          </article>

          {/* Case 2 */}
          <article className="bg-white border border-hairline p-6 md:p-8 grid md:grid-cols-[1fr_2fr] gap-6" style={{ borderRadius: 3 }}>
            <div>
              <div className="text-xs text-steel font-medium uppercase tracking-wider">Energy · South Asia</div>
              <h3 className="mt-2 text-xl font-semibold text-navy-deep leading-snug">
                Per-string solar monitoring for a 50 MW farm
              </h3>
            </div>
            <div>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                No existing off-the-shelf sensor survived the 55 °C ambient. We designed a custom solar monitoring
                PCB with per-string I-V curve tracing, LoRaWAN backhaul and an IP67 enclosure.
                Fault detection went from 7 days to 15 minutes.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["LoRaWAN", "STM32L4", "ThingsBoard", "IP67"].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border border-hairline text-charcoal/70" style={{ borderRadius: 2 }}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <Link to="/case-studies" className="mt-8 inline-flex items-center gap-1.5 text-sm text-navy-deep font-medium">
          More case studies <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────── HOW WE WORK ─────────────────── */

function HowWeWork() {
  return (
    <section className="section-tight bg-white border-b border-hairline">
      <div className="container-x grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight leading-tight">
            How it typically works
          </h2>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            Most projects start with a call. You tell us what you're building, we ask questions
            about your constraints — timeline, cost target, certification needs, volume — and
            then we scope a fixed-price proposal. No surprises.
          </p>
        </div>
        <div className="space-y-6">
          {[
            ["1. Consultation", "A 60–90 minute call with the engineer who'd own your project. Free, no commitment. Bring whatever you have — a napkin sketch, a failed prototype, a spec doc."],
            ["2. Proposal", "Fixed-scope, fixed-price milestones. You know exactly what you're getting and what it costs before anything starts."],
            ["3. Design & build", "Schematic → peer review → layout → DFM check → prototype fabrication → bring-up → validation. You see progress at every step."],
            ["4. Handover", "All design files transfer to you. Gerbers, BOM, firmware source, test procedures. Your IP, no restrictions."],
          ].map(([title, desc]) => (
            <div key={title}>
              <h3 className="text-base font-semibold text-navy-deep">{title}</h3>
              <p className="mt-1 text-sm text-charcoal/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CONTACT SECTION ─────────────────── */

function ContactSection() {
  return (
    <>
      <CTABand
        title="Have a project in mind?"
        subtitle="Tell us what you're building. An engineer will get back to you within a day."
      />
      <section id="inquiry" className="section bg-surface">
        <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight leading-tight">
              Get in touch
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              Fill this out and an engineer will respond — not a sales rep, not a chatbot.
              If you want to sign an NDA first, just mention it and we'll send one over.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-charcoal/75">
              <li className="flex gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-navy-deep mt-0.5 shrink-0" />
                Engineer response within 1 business day
              </li>
              <li className="flex gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-navy-deep mt-0.5 shrink-0" />
                NDA available before any technical discussion
              </li>
              <li className="flex gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-navy-deep mt-0.5 shrink-0" />
                All design files become your IP on completion
              </li>
            </ul>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
