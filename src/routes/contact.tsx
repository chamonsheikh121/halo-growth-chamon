import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Mail, MapPin, Calendar, Phone } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HALO Growth Partners" },
      {
        name: "description",
        content: "Begin a confidential conversation with a HALO senior partner.",
      },
      { property: "og:title", content: "Contact HALO Growth Partners" },
      {
        property: "og:description",
        content: "Confidential consultations with our senior partners.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Begin a Conversation"
        title={<>A confidential conversation, when the moment requires it.</>}
        lede="Reach a HALO senior partner directly. We respond within one business day."
      />

      <section className="relative overflow-hidden py-24">
        <div className="absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.18_255)]/15 blur-[140px]" />
        <div className="container-elite relative grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            <Reveal>
              <div>
                <div className="eyebrow">Direct Lines</div>
                <div className="mt-8 space-y-6">
                  {[
                    { icon: Mail, l: "Email", v: "partners@halogrowth.com" },
                    { icon: Phone, l: "Phone", v: "+1 (312) 555 0140" },
                    { icon: Calendar, l: "Schedule", v: "Book a 30-minute consultation" },
                    { icon: MapPin, l: "Offices", v: "Chicago · New York · London" },
                  ].map((c) => (
                    <div key={c.l} className="flex items-start gap-5 border-b border-white/5 pb-6">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-electric">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                          {c.l}
                        </div>
                        <div className="mt-1 text-[15px] text-white">{c.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="card-elite p-8">
                <div className="text-[10px] uppercase tracking-[0.28em] text-electric">
                  For Boards & Investors
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  We work with boards, sponsors, and CEOs on the most consequential leadership
                  decisions of their tenure. All conversations are confidential.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={120}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success(
                    "Thank you. A senior partner will be in touch within one business day.",
                  );
                }}
                className="glass relative rounded-2xl p-8 md:p-10"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Title" name="title" />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" />
                  <Field
                    label="Engagement Interest"
                    name="interest"
                    placeholder="e.g. Executive Search, Leadership Advisory…"
                  />
                </div>
                <div className="mt-5">
                  <label className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="peer mt-3 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all focus:border-electric/50 focus:bg-white/[0.04] focus:shadow-[0_0_30px_-10px_oklch(0.72_0.18_245/0.5)]"
                    placeholder="Briefly describe the moment, the team, and the outcome you're working toward."
                  />
                </div>
                <button type="submit" className="btn-electric mt-8" disabled={sent}>
                  {sent ? (
                    "Received — we'll be in touch"
                  ) : (
                    <>
                      Begin the Conversation <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  All inquiries are treated in strict confidence.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all focus:border-electric/50 focus:bg-white/[0.04] focus:shadow-[0_0_30px_-10px_oklch(0.72_0.18_245/0.5)]"
      />
    </div>
  );
}
