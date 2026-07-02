import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InquiryForm } from "../components/site/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Consultation — Axiom Electronics" },
      { name: "description", content: "Talk to a senior electronics engineer within one business day. NDA on request. No sales scripts." },
      { property: "og:title", content: "Request a Consultation — Axiom Electronics" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-navy-deep text-white border-b border-white/10">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow text-white/60">Contact</div>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Request a consultation<span className="text-accent-amber">.</span>
            </h1>
            <p className="mt-5 text-white/75 text-lg leading-relaxed">
              Share your requirements below. A senior engineer will review your inquiry and respond within
              one business day — with clarifying questions and, if needed, an NDA.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x grid lg:grid-cols-[1fr_1.6fr] gap-12">
          <aside className="space-y-8">
            <div>
              <div className="eyebrow">Talk to engineering</div>
              <div className="mt-3 text-lg font-semibold text-navy-deep">engineering@axiom-electronics.com</div>
              <div className="text-sm text-muted-foreground">Direct to the engineering team — not a shared inbox.</div>
            </div>
            <div>
              <div className="eyebrow">Phone</div>
              <div className="mt-3 text-lg font-semibold text-navy-deep">+91 80 4718 9200</div>
              <div className="text-sm text-muted-foreground">Mon–Fri · 09:00–19:00 IST · WhatsApp OK</div>
            </div>
            <div>
              <div className="eyebrow">Offices</div>
              <ul className="mt-3 space-y-3 text-sm">
                <li>
                  <div className="font-semibold text-navy-deep">Bengaluru · India</div>
                  <div className="text-muted-foreground">Engineering & prototyping HQ</div>
                </li>
                <li>
                  <div className="font-semibold text-navy-deep">Amsterdam · Netherlands</div>
                  <div className="text-muted-foreground">European client success</div>
                </li>
              </ul>
            </div>
            <div className="border-t border-hairline pt-6">
              <div className="eyebrow">Not ready to inquire?</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Review our <Link to="/services" className="text-navy-deep underline underline-offset-4">services</Link>,{" "}
                <Link to="/process" className="text-navy-deep underline underline-offset-4">engineering process</Link> or{" "}
                <Link to="/" hash="case-studies" className="text-navy-deep underline underline-offset-4">case studies</Link>.
              </p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-navy-deep">
                Explore services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
