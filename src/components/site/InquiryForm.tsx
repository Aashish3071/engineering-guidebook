import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Lock, AlertCircle } from "lucide-react";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-surface p-8 md:p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center bg-navy-deep text-white" style={{ borderRadius: 2 }}>
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-navy-deep">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          A senior engineer from our team will review your requirements and reach out within one business day
          with next steps and an NDA if required.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="card-surface p-8 md:p-10 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center bg-destructive text-white" style={{ borderRadius: 2 }}>
          <AlertCircle className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-navy-deep">Something went wrong</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          We couldn't send your request. Please email us directly at{" "}
          <a href="mailto:engineering@axiom-electronics.com" className="text-navy-deep underline underline-offset-4">
            engineering@axiom-electronics.com
          </a>{" "}
          or try again.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-6">
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-surface p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-4 pb-5 mb-5 border-b border-hairline">
        <div className="eyebrow">Consultation Request</div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
          <Lock className="h-3.5 w-3.5" /> NDA-safe · Reviewed by engineers only
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name *" name="name" placeholder="Jane Doe" required />
        <Field label="Company *" name="company" placeholder="Acme Industries" required />
        <Field label="Designation" name="designation" placeholder="Head of Hardware" />
        <Field label="Business email *" name="email" type="email" placeholder="jane@acme.com" required />
        <Field label="Phone (with country code)" name="phone" placeholder="+1 555 000 0000" />
        <Field label="Country *" name="country" placeholder="United States" required />

        <Select label="Industry *" name="industry" required options={[
          "Industrial Automation", "Automotive / EV", "Medical Electronics", "Consumer Electronics",
          "Energy & Utilities", "Agriculture / AgriTech", "Smart Home", "Robotics", "Telecom", "Other",
        ]} />
        <Select label="Project type *" name="projectType" required options={[
          "New product development", "Prototype only", "Redesign / cost reduction", "Sensor / IoT solution", "Consultation only",
        ]} />

        <Select label="Service required *" name="service" required options={[
          "PCB Design & Layout", "IoT Hardware Development", "Embedded Firmware", "Sensor Design & Integration",
          "Hardware Architecture Consulting", "Prototype Development", "Product Engineering (Turnkey)", "Other",
        ]} />
        <Select label="Expected timeline" name="timeline" options={[
          "< 4 weeks", "1–3 months", "3–6 months", "6+ months", "Not sure yet",
        ]} />

        {!compact && (
          <Select label="Estimated budget (optional)" name="budget" options={[
            "< $10k", "$10k – $50k", "$50k – $150k", "$150k – $500k", "$500k+", "Prefer to discuss",
          ]} />
        )}

        <div className={compact ? "md:col-span-2" : ""}>
          <Field label="Attach brief / spec (PDF, ZIP · optional)" name="file" type="file" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-widest text-navy mb-1.5">Project description *</label>
          <textarea
            required
            name="description"
            rows={4}
            placeholder="Briefly describe the product, target application, current stage, and what you need help with."
            className="w-full border border-hairline px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep/20"
            style={{ borderRadius: 2 }}
          />
        </div>
      </div>

      <label className="flex items-start gap-2.5 mt-5 text-xs text-muted-foreground">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-navy-deep" />
        <span>
          I consent to Axiom Electronics contacting me about this inquiry. My information will not be shared with third parties.
          A mutual NDA can be signed before technical discussion.
        </span>
      </label>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <button type="submit" className="btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request Consultation"} <ArrowRight className="h-4 w-4" />
        </button>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Response within 1 business day</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> NDA available on request</span>
        </div>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-navy mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-hairline px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep/20 file:mr-3 file:py-1 file:px-2 file:border file:border-hairline file:bg-surface file:text-xs file:font-mono file:uppercase"
        style={{ borderRadius: 2 }}
      />
    </div>
  );
}

function Select({ label, name, options, required }: {
  label: string; name: string; options: string[]; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-navy mb-1.5">{label}</label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full border border-hairline px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-deep focus:ring-1 focus:ring-navy-deep/20"
        style={{ borderRadius: 2 }}
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
