import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center bg-white text-navy-deep font-mono text-sm font-semibold" style={{ borderRadius: 2 }}>AX</span>
              <div className="leading-tight">
                <div className="font-semibold">Axiom Electronics</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Product Engineering</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 max-w-sm leading-relaxed">
              End-to-end electronics product engineering — from schematic to serial production.
              Serving OEMs across 20+ countries.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/75">
              <div className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Engineering Centre, Bengaluru · Design Studio, Amsterdam</div>
              <div className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0" /> engineering@axiom-electronics.com</div>
              <div className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0" /> +91 80 4718 9200</div>
            </div>
          </div>

          <FooterCol title="Services" links={[
            ["PCB Design & Layout", "/services/pcb-design"],
            ["IoT Hardware Development", "/services/iot-hardware"],
            ["Embedded Firmware", "/services/embedded-firmware"],
          ]} />
          <FooterCol title="Company" links={[
            ["About", "/about"],
            ["Engineering Process", "/process"],
            ["Industries", "/industries"],
            ["Contact", "/contact"],
          ]} />
          <FooterCol title="Resources" links={[
            ["Case Studies", "/case-studies"],
            ["Request Consultation", "/contact"],
          ]} />
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-white/60 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Axiom Electronics · ISO 9001:2015 · IPC-A-610
          </div>
          <div className="flex gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">NDA on request</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 md:col-start-auto">
      <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-4">{title}</div>
      <ul className="space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="text-sm text-white/80 hover:text-white inline-flex items-center gap-1 group">
              {label}
              <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
