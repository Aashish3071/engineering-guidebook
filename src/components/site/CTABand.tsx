import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CTABand({
  title = "Have a project brief? Get an engineering review in 24 hours.",
  subtitle = "Share your requirements — a senior engineer (not a sales rep) will respond with next steps, questions and an NDA if you need one.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-navy-deep text-white">
      <div className="container-x py-16 md:py-20 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
        <div>
          <div className="eyebrow text-white/60">Next step</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">{title}</h2>
          <p className="mt-4 text-white/75 max-w-2xl">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <Link to="/contact" className="btn-primary bg-white !text-navy-deep border-white hover:bg-white/90">
            Request Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+918047189200" className="btn-ghost-light">
            <Phone className="h-4 w-4" /> +91 80 4718 9200
          </a>
        </div>
      </div>
    </section>
  );
}
