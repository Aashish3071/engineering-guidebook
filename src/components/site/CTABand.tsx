import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CTABand({
  title = "Have a project in mind?",
  subtitle = "Tell us what you're building. An engineer — not a sales rep — will respond within one business day.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-navy-deep text-white">
      <div className="container-x py-14 md:py-18 grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-2xl">{title}</h2>
          <p className="mt-3 text-white/65 max-w-2xl">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <Link to="/contact" className="btn-primary bg-white !text-navy-deep border-white hover:bg-white/90">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+918047189200" className="btn-ghost-light">
            <Phone className="h-4 w-4" /> +91 80 4718 9200
          </a>
        </div>
      </div>
    </section>
  );
}
