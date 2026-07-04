import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";
import { CTABand } from "../../components/site/CTABand";

export const Route = createFileRoute("/services/pcb-design")({
  head: () => ({
    meta: [
      { title: "PCB Design & Layout Services | Axiom Electronics" },
      {
        name: "description",
        content:
          "Expert PCB design consultancy. Multi-layer, HDI, and rigid-flex designs for industrial, medical, and high-speed applications.",
      },
    ],
  }),
  component: PCBDesignPage,
});

function PCBDesignPage() {
  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="container-x pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-4xl">
            <Link to="/" className="text-accent-amber hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
              &larr; Back to Home
            </Link>
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              High-Performance PCB Design & Layout
            </h1>
            <p className="mt-6 text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
              We engineer complex printed circuit boards for critical applications. From 2-layer prototypes to 24-layer HDI boards with controlled impedance, our focus is on precision, signal integrity, and manufacturing reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b border-hairline">
        <div className="container-x grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start">
          <div className="prose-technical">
            <h2>Engineering discipline built into every trace.</h2>
            <p>
              A successful PCB is more than just routing connections. It requires a deep understanding of thermal management, electromagnetic compatibility (EMC), and Design for Manufacturing (DFM) principles. We don't just connect the dots; we architect the physical foundation of your electronic product.
            </p>
            <p>
              Our engineers specialize in high-speed digital, precision analog, and RF layouts. We ensure that signal integrity is maintained across complex geometries, utilizing advanced stack-up strategies and controlled impedance routing.
            </p>

            <h3>Core Capabilities</h3>
            <ul>
              <li><strong>High-Density Interconnect (HDI):</strong> Microvias, blind/buried vias, and fine-pitch BGA breakouts for space-constrained wearables and IoT devices.</li>
              <li><strong>Rigid-Flex & Flex PCB:</strong> 3D folding designs for complex enclosures and dynamic mechanical environments.</li>
              <li><strong>Power Electronics:</strong> High-current, high-voltage layouts with critical thermal dissipation strategies and creepage/clearance compliance.</li>
              <li><strong>RF & Wireless:</strong> Matched impedance routing, antenna integration, and shielding for BLE, Wi-Fi, LoRa, and cellular modules.</li>
            </ul>

            <h3>The Axiom Process</h3>
            <p>
              Every layout undergoes rigorous internal review and constraint-driven routing. We collaborate directly with your chosen fabrication house to tailor the design rules to their capabilities, ensuring a "right-first-time" yield.
            </p>
          </div>

          <div className="bg-surface rounded-md p-8 border border-hairline sticky top-32">
            <h3 className="text-xl font-semibold text-navy-deep mb-6">Technical Arsenal</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <Cpu className="h-4 w-4" /> CAD Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Altium Designer</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">KiCad</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Cadence OrCAD</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <Layers className="h-4 w-4" /> Deliverables
                </h4>
                <ul className="space-y-2 text-sm text-charcoal/85">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent-amber shrink-0" /> DFM-ready Gerbers & ODB++</li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent-amber shrink-0" /> IPC-2581 fabrication data</li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent-amber shrink-0" /> 3D STEP models for mechanical fit</li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent-amber shrink-0" /> Consolidated BOM and assembly drawings</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-hairline">
              <Link to="/contact" className="btn-primary w-full">
                Discuss Your PCB Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand 
        title="Ready to tape out?" 
        subtitle="Share your schematic or concept. Our engineers will review your requirements and provide a detailed timeline and quote within 24 hours." 
      />
    </>
  );
}
