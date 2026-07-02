import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, CircuitBoard, Cpu, Wrench, Radio, FlaskConical, Factory, Layers, PlugZap } from "lucide-react";
import { CTABand } from "../components/site/CTABand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PCB Design, Embedded, IoT & Product Engineering | Axiom Electronics" },
      { name: "description", content: "Full-stack electronics engineering services: PCB design & layout, embedded firmware, hardware, IoT, prototyping, manufacturing support and turnkey product engineering." },
      { property: "og:title", content: "Electronics Product Engineering Services" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: CircuitBoard,
    name: "PCB Design & Layout",
    desc: "Multi-layer, HDI and rigid-flex PCB design with signal integrity, thermal and EMC discipline built in.",
    applications: ["Industrial gateways", "Medical wearables", "EV controllers", "RF & wireless products"],
    benefits: ["Right-first-time fabrication", "Optimised BOM cost", "Pre-compliance EMC ready"],
    deliverables: ["Reviewed schematic (PDF + native)", "DFM-ready Gerbers + IPC-2581", "3D STEP export", "BOM + CPL + assembly drawings"],
  },
  {
    icon: Cpu,
    name: "Embedded Firmware",
    desc: "Bare-metal, RTOS and Embedded Linux firmware in C, C++ and Rust — with production-grade OTA, secure boot and diagnostics.",
    applications: ["Battery management", "Motor & drive control", "Sensor fusion", "Industrial gateways"],
    benefits: ["Deterministic real-time performance", "Secure OTA update pipeline", "Full unit-test coverage"],
    deliverables: ["Version-controlled source", "Bootloader + OTA infrastructure", "Automated build & test", "Firmware release notes"],
  },
  {
    icon: Wrench,
    name: "Hardware Design",
    desc: "Analog, mixed-signal, power and safety-critical hardware — from spec through validated schematic.",
    applications: ["Power converters", "Precision analog", "Motor drives", "Isolation & safety circuits"],
    benefits: ["Efficiency-optimised designs", "Compliance-ready topology", "Second-source ready BOM"],
    deliverables: ["Design calculations", "SPICE simulation reports", "Reviewed schematics", "Power budget & thermal analysis"],
  },
  {
    icon: Radio,
    name: "IoT Solutions",
    desc: "End-to-end connected products — from radio to cloud — with device management, OTA and edge intelligence.",
    applications: ["Smart metering", "Asset tracking", "Predictive maintenance", "Smart building"],
    benefits: ["5-year battery life on LPWA nodes", "Sub-1s cloud round-trip", "Fleet-scale device management"],
    deliverables: ["Certified radio design", "Cloud integration code", "Device provisioning tooling", "Fleet dashboard reference"],
  },
  {
    icon: FlaskConical,
    name: "Prototyping",
    desc: "Fast-turn prototype PCBs, 3D-printed enclosures and functional prototypes for design validation.",
    applications: ["Proof of concept", "Investor demos", "Field pilots", "Design validation"],
    benefits: ["~14 day prototype cycle", "Multiple iteration budget", "Real-world validation data"],
    deliverables: ["5–10 assembled units", "Test report", "Enclosure fit-up", "Bring-up documentation"],
  },
  {
    icon: Factory,
    name: "Manufacturing Support",
    desc: "DFM, DFT, BOM cost engineering and NPI hand-off to vetted EMS partners in India, Vietnam and Mexico.",
    applications: ["Pilot builds 10–500 units", "Volume production 1k–100k+", "EMS transfer", "Sustaining engineering"],
    benefits: ["Improved manufacturing yield", "Optimised unit cost", "Reduced RMA rate"],
    deliverables: ["DFM report", "Test-jig design", "First-article inspection", "Production hand-off pack"],
  },
  {
    icon: Layers,
    name: "Product Engineering (Turnkey)",
    desc: "End-to-end responsibility — mechanical, electronics, firmware, cloud and compliance — through to shipping product.",
    applications: ["New product NPI", "Concept-to-market", "Existing product refresh", "White-label OEM"],
    benefits: ["Single accountable partner", "Fixed-milestone pricing", "Faster time to certified product"],
    deliverables: ["Design history file", "Certification pack", "Production BOM & drawings", "Sustaining engineering handover"],
  },
  {
    icon: PlugZap,
    name: "Electronics Consulting",
    desc: "Architecture reviews, cost reduction studies, obsolescence redesigns and technical due-diligence for investors.",
    applications: ["Product architecture review", "Cost-down programs", "M&A tech due-diligence", "Vendor audits"],
    benefits: ["Independent expert view", "Actionable recommendations", "Quantified cost & risk assessment"],
    deliverables: ["Written technical review", "Executive summary deck", "Risk register", "Roadmap recommendations"],
  },
];

function Services() {
  return (
    <>
      <section className="bg-navy-deep text-white border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow text-white/60">Services</div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Every discipline you need to<br />ship electronics<span className="text-accent-amber">.</span>
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-2xl">
              One accountable team across schematic, layout, firmware, mechanical, cloud and manufacturing.
              No hand-offs. No lost context. No finger-pointing when something needs a fix.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-8">
          {services.map(({ icon: Icon, name, desc, applications, benefits, deliverables }) => (
            <article key={name} className="card-surface p-6 md:p-8 grid lg:grid-cols-[auto_1fr_1fr_1fr_auto] gap-8">
              <div>
                <Icon className="h-10 w-10 text-navy-deep" strokeWidth={1.25} />
              </div>
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-semibold text-navy-deep">{name}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-2">Applications</div>
                  <ul className="flex flex-wrap gap-1.5">
                    {applications.map((a) => <li key={a} className="text-xs px-2 py-1 bg-surface border border-hairline" style={{ borderRadius: 2 }}>{a}</li>)}
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-navy mb-3">Benefits</div>
                <ul className="space-y-2">
                  {benefits.map((b) => <li key={b} className="flex gap-2 text-sm text-charcoal/85"><CheckCircle2 className="h-4 w-4 mt-0.5 text-navy-deep shrink-0" />{b}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-navy mb-3">Deliverables</div>
                <ul className="space-y-2 text-sm text-charcoal/85">
                  {deliverables.map((d) => <li key={d} className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-navy shrink-0" />{d}</li>)}
                </ul>
              </div>
              <div className="lg:flex flex-col justify-end">
                <Link to="/contact" className="btn-primary whitespace-nowrap">Discuss project <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand title="Not sure which service you need?" subtitle="Book a 90-minute technical consultation with a senior engineer — often the fastest way to de-risk your next step." />
    </>
  );
}
