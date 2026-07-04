import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABand } from "../components/site/CTABand";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Projects, Measurable Outcomes | Axiom Electronics" },
      {
        name: "description",
        content:
          "Engineering case studies from Axiom Electronics — IoT gateways, medical wearables, solar energy sensors and EV battery management systems. Real problems. Measurable outcomes.",
      },
      { property: "og:title", content: "Engineering Case Studies | Axiom Electronics" },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

const cases = [
  {
    industry: "Industrial Automation",
    title: "Retrofit IoT gateway for a European CNC OEM",
    challenge:
      "A European CNC machine manufacturer had a legacy fleet of 8,000 machines with no remote monitoring capability. Their original gateway supplier had discontinued the product, leaving no support path and no upgrade route.",
    approach:
      "We designed a drop-in replacement IoT gateway with Modbus RTU, OPC-UA and MQTT — pin-compatible with the original cable harness. STM32MP1 running Yocto Linux, LTE Cat-M connectivity, and a secure OTA update pipeline.",
    outcome: "22% lower BOM cost vs. previous gateway · 4-week field-swap program executed across 12 countries · 99.6% uptime across 12 months of live deployment.",
    tech: ["STM32MP1", "Yocto Linux", "OPC-UA", "AWS IoT Core", "LTE Cat-M1", "Modbus RTU"],
    service: "PCB Design · Embedded Firmware · IoT Solutions",
  },
  {
    industry: "Medical Electronics",
    title: "Wearable ECG monitor for a US clinical trial",
    challenge:
      "A US digital-health startup needed an IEC 60601-1 compliant 3-lead ECG wearable for a 500-patient clinical trial. Timeline was fixed by the IRB protocol; no rework budget existed.",
    approach:
      "Full turnkey PCB and firmware design: ADS1292R analog front-end, nRF5340 with BLE 5.2, tamper-evident enclosure, and mobile app SDK hooks. IEC 62304 software development process applied from day one.",
    outcome: "Trial enrolment started on schedule · Zero device-related adverse events reported · Design is FDA 510(k) pathway ready.",
    tech: ["nRF5340", "ADS1292R", "BLE 5.2", "IEC 62304", "IEC 60601-1", "Altium Designer"],
    service: "PCB Design · Embedded Firmware · Product Engineering",
  },
  {
    industry: "Energy & Solar",
    title: "Solar farm monitoring sensor network for a South Asian utility",
    challenge:
      "A 50 MW solar utility in South Asia had no per-string monitoring — faults were only detected at inverter level, causing week-long revenue losses before diagnosis. No existing off-the-shelf sensor survived the 55 °C+ ambient.",
    approach:
      "Custom solar panel monitoring PCB (AX-SolarSense reference design, adapted): per-string I-V curve tracing, LoRaWAN 1.0.4 backhaul, MPPT shadow detection, and an IP67 UV-stabilised enclosure. Cloud dashboard via ThingsBoard.",
    outcome: "Fault detection time reduced from 7 days to under 15 minutes · 3.2% improvement in annual energy yield · 6-month payback on sensor capex.",
    tech: ["LoRaWAN", "STM32L4", "ThingsBoard", "IEC 62053", "MPPT algorithm", "IP67"],
    service: "PCB Design · IoT Solutions · Sensor Design",
  },
  {
    industry: "Automotive & EV",
    title: "Battery management system for a 2-wheeler EV OEM",
    challenge:
      "An Indian EV OEM needed a cost-optimised 72 V BMS for their flagship 2-wheeler — with active cell balancing, CAN telematics, and BIS certification — in an 11-week window before their production launch.",
    approach:
      "Custom BMS PCB with TI BQ76952 front-end, 20-cell active balancing, ISO 26262 ASIL-B aligned firmware in C on STM32G4, integrated CAN-FD and BLE telematics, and a production test jig for 100% end-of-line validation.",
    outcome: "18% improvement in cell cycle life · BIS 17017 certified in exactly 11 weeks · Scaled to 40,000 units in year one with zero field recalls.",
    tech: ["STM32G4", "BQ76952", "CAN-FD", "ISO 26262", "BIS 17017", "BLE 5.x"],
    service: "PCB Design · Embedded Firmware · Product Engineering",
  },
];

function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep text-white border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow text-white/60">Case studies</div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Real projects.<br />Measurable outcomes<span className="text-accent-amber">.</span>
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-2xl">
              A selection of representative work across IoT, medical, energy and automotive sectors.
              Full case files — with client permission — are available under NDA on request.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study List */}
      <section className="section bg-white">
        <div className="container-x grid gap-8">
          {cases.map((c) => (
            <article key={c.title} className="card-surface p-6 md:p-10">
              {/* Header */}
              <div className="grid md:grid-cols-[1fr_auto] gap-4 items-start pb-6 mb-6 border-b border-hairline">
                <div>
                  <div className="eyebrow">{c.industry}</div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-navy-deep leading-tight">{c.title}</h2>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-steel bg-surface border border-hairline px-3 py-2 whitespace-nowrap" style={{ borderRadius: 2 }}>
                  {c.service}
                </div>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-2">Challenge</div>
                  <p className="text-charcoal/85 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-2">Approach</div>
                  <p className="text-charcoal/85 leading-relaxed">{c.approach}</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-accent-amber mb-2">Outcome</div>
                  <p className="text-navy-deep font-medium leading-relaxed">{c.outcome}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-steel mb-2">Technologies used</div>
                  <ul className="flex flex-wrap gap-1.5">
                    {c.tech.map((t) => (
                      <li key={t} className="text-xs px-2.5 py-1 bg-surface border border-hairline text-charcoal/80" style={{ borderRadius: 2 }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-navy-deep hover:text-navy">
                  Request full case file <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NDA note */}
      <section className="section-tight bg-surface border-y border-hairline">
        <div className="container-x text-center max-w-2xl mx-auto">
          <div className="eyebrow">Confidentiality</div>
          <h2 className="mt-3 text-2xl font-semibold text-navy-deep">
            Working under NDA is our default.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Most client engagements are under mutual NDA. The case studies above are shared with client
            permission — with identifying details anonymised. Full documentation, schematics and performance
            data are available under NDA to qualified prospects.
          </p>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">
            Request a case file under NDA <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTABand
        title="Have a similar challenge? Let's talk."
        subtitle="Every case study above started with a 90-minute technical consultation. Bring your brief — no commitment required."
      />
    </>
  );
}
