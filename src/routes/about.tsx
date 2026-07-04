import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import lab from "../assets/lab-oscilloscope.jpg";
import { CTABand } from "../components/site/CTABand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Axiom Electronics · Product Engineering Company" },
      { name: "description", content: "Axiom Electronics is an electronics product engineering company serving global OEMs. Engineering-first, IP-safe, milestone-billed." },
      { property: "og:title", content: "About Axiom Electronics" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-navy-deep text-white border-b border-white/10">
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <div className="eyebrow text-white/60">About</div>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              A quiet engineering<br />partner for serious OEMs<span className="text-accent-amber">.</span>
            </h1>
          </div>
          <p className="text-white/75 text-lg leading-relaxed">
            Since 2009, Axiom has shipped over 450 electronic products across 20+ countries — as the
            hardware, firmware and PCB team behind brands you already trust.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={lab} alt="Engineer at the Axiom lab bench" width={1600} height={1200} loading="lazy" className="w-full border border-hairline" style={{ borderRadius: 2 }} />
          <div>
            <div className="eyebrow">Our thesis</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight leading-[1.15]">
              Electronics engineering is a craft — and it deserves to be treated like one.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Too many product engineering firms optimise for hourly billing and headcount growth. We do the
              opposite: senior engineers on every project, fixed-scope milestones, transparent trade-offs and
              a small enough team that every client knows the person building their product.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Founded 2009 by three ex-industry engineers",
                "60+ engineers across Bengaluru and Delhi",
                "Retention rate: 4.6 years average per engineer",
                "Client repeat-engagement rate: 78% across 15 years",
              ].map((s) => (
                <li key={s} className="flex gap-2.5 text-charcoal/85"><CheckCircle2 className="h-5 w-5 text-navy-deep mt-0.5 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-surface border-t border-hairline">
        <div className="container-x">
          <div className="eyebrow">By the numbers</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight">Fifteen years of shipping.</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline border border-hairline" style={{ borderRadius: 2 }}>
            {[
              ["450+", "Products shipped"],
              ["20+", "Countries deployed"],
              ["60+", "In-house engineers"],
              ["78%", "Client repeat rate"],
              ["4.6 yrs", "Average engineer tenure"],
              ["14 days", "Typical prototype cycle"],
              ["78 million+", "Devices in the field"],
              ["ISO 9001", "Certified since 2013"],
            ].map(([n, l]) => (
              <div key={l as string} className="bg-white p-6">
                <div className="text-3xl md:text-4xl font-semibold text-navy-deep">{n}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-steel mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="eyebrow">How we work</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy-deep tracking-tight max-w-3xl">
            The principles that don't flex — even when the timeline does.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              ["Engineers own the client relationship", "Your primary contact is a senior engineer. No account managers, no scripts, no game of telephone."],
              ["Fixed-scope milestones over hourly burn", "Every phase is priced against defined deliverables. You know what you're paying for, before you pay."],
              ["Your IP is your IP", "Mutual NDA before technical discussion. All design files, firmware source and manufacturing files transfer to you on completion."],
              ["We design to certify", "FCC, CE, BIS, IEC 60601, IEC 62368 — designed to pass first-time, not to rework after a failed test-house visit."],
              ["Transparent trade-offs", "Every architectural decision comes with a written trade-off: cost, risk, time, second-source, lifecycle."],
              ["Small enough to care, big enough to ship", "60+ engineers. Small enough that the founders review every proposal. Big enough to staff parallel workstreams."],
            ].map(([t, d]) => (
              <div key={t}>
                <h3 className="text-lg font-semibold text-navy-deep">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
