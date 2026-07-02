import { createFileRoute } from "@tanstack/react-router";
import { CTABand } from "../components/site/CTABand";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Engineering Process — Concept to Production | Axiom Electronics" },
      { name: "description", content: "Our 11-stage engineering process: from requirement discovery through certification and manufacturing ramp. Fixed milestones. Transparent deliverables." },
      { property: "og:title", content: "Our Engineering Process" },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

const steps = [
  ["01","Requirement discovery","Structured workshop with your product, engineering and compliance stakeholders. We frame use-cases, cost targets, regulatory environment and success metrics.","Signed requirements doc · risk register · rough order-of-magnitude estimate"],
  ["02","Feasibility & architecture","Reference designs surveyed, key components pre-selected, second-source strategy defined. Milestone plan with fixed-scope pricing for each phase.","System architecture doc · component shortlist · fixed-scope proposal"],
  ["03","Schematic & circuit design","Peer-reviewed schematics. Power budget, EMC pre-analysis, thermal calculations, BOM cost engineering.","Reviewed schematic (PDF + native) · BOM v1 · design review minutes"],
  ["04","PCB layout","Signal integrity, thermal, EMC and DFM-driven layout with controlled-impedance stackups. 3D fit-up with enclosure.","Gerbers · IPC-2581 · 3D STEP · fab & assembly drawings"],
  ["05","Firmware & software","Bare-metal, FreeRTOS, Zephyr or Embedded Linux — with bootloader, OTA, secure boot and diagnostics. CI/CD from day one.","Source repo · build pipeline · release notes · unit test reports"],
  ["06","Prototype build","Fast-turn 5–10 unit prototype run with mechanical fit-up. Bring-up scripts and validation setup delivered with the boards.","5–10 assembled units · bring-up guide · initial validation report"],
  ["07","Validation & testing","Bench validation against requirements. Environmental testing (temperature, vibration, ESD). EMC pre-compliance.","Full validation report · issue log · path-to-close for open items"],
  ["08","Certification support","We design to certify — FCC, CE, UKCA, BIS, IEC 60601, IEC 62368, ISO 13849, ISO 26262 aligned. We co-ordinate with accredited test houses.","Test-house selection · pre-compliance rework · signed certificates"],
  ["09","NPI & manufacturing","Pilot build with our vetted EMS partners. Test-jig design, first-article inspection, factory training and hand-off.","Pilot build (10–500 units) · test jig · FAI report · production runbook"],
  ["10","Production ramp","Yield engineering, SPC, RMA analysis. Long-term component obsolescence monitoring and cost-down programs.","Production dashboard · yield report · monthly obsolescence bulletin"],
  ["11","Field & lifecycle support","Firmware OTA management, obsolescence redesigns, cost-down cycles, sustaining engineering — on retainer or per-project.","Retainer SLA · release cadence · roadmap reviews"],
];

function Process() {
  return (
    <>
      <section className="bg-navy-deep text-white border-b border-white/10">
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <div className="eyebrow text-white/60">Engineering process</div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Eleven stages.<br />Zero surprises<span className="text-accent-amber">.</span>
            </h1>
          </div>
          <p className="text-white/75 text-lg leading-relaxed">
            Every project runs on the same milestone-based framework. You always know what happens next,
            what deliverables you receive, and what decisions you'll be asked to make — before the invoice arrives.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <ol className="relative border-l-2 border-hairline ml-4 md:ml-6 space-y-10">
            {steps.map(([n, t, d, del]) => (
              <li key={n} className="pl-8 md:pl-12 relative">
                <span className="absolute -left-[13px] top-1 grid place-items-center h-6 w-6 bg-navy-deep text-white font-mono text-[10px] font-semibold" style={{ borderRadius: 2 }}>
                  {n}
                </span>
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-navy-deep">{t}</h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                  <div className="bg-surface border border-hairline p-5" style={{ borderRadius: 2 }}>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-navy mb-2">Deliverables</div>
                    <p className="text-sm text-charcoal/85 leading-relaxed">{del}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTABand />
    </>
  );
}
