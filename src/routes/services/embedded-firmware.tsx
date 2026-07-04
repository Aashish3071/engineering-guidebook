import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Terminal, Code2, ShieldCheck } from "lucide-react";
import { CTABand } from "../../components/site/CTABand";

export const Route = createFileRoute("/services/embedded-firmware")({
  head: () => ({
    meta: [
      { title: "Embedded Firmware Development | Axiom Electronics" },
      {
        name: "description",
        content:
          "Production-grade embedded software development. Bare-metal, RTOS, and Embedded Linux in C/C++ and Rust. Secure boot and OTA architectures.",
      },
    ],
  }),
  component: EmbeddedFirmwarePage,
});

function EmbeddedFirmwarePage() {
  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="container-x pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-4xl">
            <Link to="/" className="text-accent-amber hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
              &larr; Back to Home
            </Link>
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Embedded Software Engineering
            </h1>
            <p className="mt-6 text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
              Hardware is only as reliable as the code that runs it. We write deterministic, fault-tolerant firmware for microcontrollers and microprocessors, ensuring stability in the most demanding environments.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b border-hairline">
        <div className="container-x grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start">
          <div className="prose-technical">
            <h2>Code that doesn't crash.</h2>
            <p>
              In the embedded world, "turn it off and on again" is rarely an option. Devices are often deployed in inaccessible locations or mission-critical systems where failure is catastrophic. Our firmware development process is rooted in rigorous software engineering practices, prioritizing stability, security, and testability from day one.
            </p>
            <p>
              Whether it's an 8-bit bare-metal state machine or a multi-threaded RTOS driving a complex industrial gateway, we deliver clean, documented, and production-ready code.
            </p>

            <h3>Architectures & OS</h3>
            <ul>
              <li><strong>Bare-Metal:</strong> Highly deterministic, low-overhead event loops and interrupts for deeply embedded 8/16/32-bit MCUs (ARM Cortex-M, AVR, PIC).</li>
              <li><strong>Real-Time Operating Systems (RTOS):</strong> FreeRTOS and Zephyr implementations for complex multitasking, resource management, and precise timing requirements.</li>
              <li><strong>Embedded Linux:</strong> Yocto and Buildroot environments for application processors (ARM Cortex-A), handling high-level networking, UI, and edge computing.</li>
            </ul>

            <h3>Security & Device Management</h3>
            <p>
              Connected devices introduce significant attack vectors. We implement defense-in-depth strategies at the firmware level.
            </p>
            <ul>
              <li><strong>Secure Boot:</strong> Cryptographic verification of the firmware image before execution, ensuring only authorized code runs on your hardware.</li>
              <li><strong>Over-The-Air (OTA) Updates:</strong> Robust, fail-safe update mechanisms (A/B partitioning) with rollback capabilities to ensure devices are never bricked in the field.</li>
              <li><strong>Hardware Security Modules (HSM):</strong> Integration with secure elements (e.g., ATECC608) for key storage and hardware-accelerated cryptography.</li>
            </ul>

            <h3>Quality Assurance</h3>
            <p>
              We treat firmware like critical software. All code is managed via Git, subjected to peer review, and integrated into CI/CD pipelines. We employ static analysis tools, MISRA C compliance checks, and extensive Hardware-In-The-Loop (HIL) automated testing to catch regressions before they reach production.
            </p>
          </div>

          <div className="bg-surface rounded-md p-8 border border-hairline sticky top-32">
            <h3 className="text-xl font-semibold text-navy-deep mb-6">Software Stack</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <Code2 className="h-4 w-4" /> Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">C (C99, C11)</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">C++ (C++14/17)</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Rust</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Python (Test)</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <Terminal className="h-4 w-4" /> Frameworks & OS
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">FreeRTOS</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Zephyr RTOS</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Yocto Project</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Qt (Embedded UI)</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Security
                </h4>
                <ul className="space-y-2 text-sm text-charcoal/85">
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent-amber shrink-0" /> MISRA C Compliant</li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent-amber shrink-0" /> Mbed TLS / wolfSSL</li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent-amber shrink-0" /> MCUboot integration</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-hairline">
              <Link to="/contact" className="btn-primary w-full">
                Discuss Firmware Architecture <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand 
        title="Need to salvage a failing firmware project?" 
        subtitle="We conduct rapid code reviews and architectural audits to identify bottlenecks and chart a path to stable production releases." 
      />
    </>
  );
}
