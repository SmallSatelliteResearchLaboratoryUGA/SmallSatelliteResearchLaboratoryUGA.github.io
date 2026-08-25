import SectionDivider from "@/app/components/home/SectionDivider";

interface ContactPerson {
  role: string;
  name: string;
  email: string;
}

const contacts: ContactPerson[] = [
  {
    role: "Principal Investigator",
    name: "Dr. Deepak Mishra",
    email: "dmishra@uga.edu",
  },
  {
    role: "Lab Manager",
    name: "Sydney Whilden",
    email: "sydney.whilden25@uga.edu",
  },
  {
    role: "General Inquiries",
    name: "Lab Contact",
    email: "ssrluga@uga.edu",
  },
];

function ContactCard({ contact }: { contact: ContactPerson }) {
  return (
    <a
      href={`mailto:${contact.email}`}
      className="group flex flex-col rounded-2xl border border-white/15 bg-white/[0.06] hover:border-[rgba(255,45,92,0.45)] hover:bg-white/[0.10] transition duration-300 p-6 text-left"
    >
      <span className="text-xs uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] mb-3">
        {contact.role}
      </span>
      <span className="text-xl text-white font-medium mb-2">
        {contact.name}
      </span>
      <span className="text-sm text-white/80 break-all group-hover:text-white group-hover:[text-shadow:0_0_10px_rgba(255,45,92,0.7)] transition">
        {contact.email}
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      {/* Hero */}
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.18),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            Questions about the lab, our missions, or how to get involved?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Map + Address + Contacts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Map and address */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <iframe
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAQA59VHUySY5niNcvw3qrZg9Q9rF0qEeo&q=UGA+Physics+Building,Athens,GA+30602"
                allowFullScreen
                title="SSRL Location"
              />
            </div>

            <address className="not-italic rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] mb-3 block">
                Visit Us
              </span>
              <p className="text-white text-base md:text-lg leading-relaxed">
                Room 107
                <br />
                UGA Physics Building
                <br />
                Sanford Dr, Athens, GA 30602, USA
              </p>
            </address>
          </div>

          {/* Right: Contacts */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] mb-3">
              Reach Out
            </p>
            <h2 className="text-3xl md:text-4xl mb-6">Talk to a Person</h2>
            <p className="text-white/85 leading-7 mb-8">
              Click any card below to send an email directly. For general
              questions, the lab contact line is the best place to start.
            </p>

            <div className="flex flex-col gap-4">
              {contacts.map((c) => (
                <ContactCard key={c.email} contact={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Join CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] mb-3">
            Interested in joining?
          </p>
          <h2 className="text-3xl md:text-4xl mb-4">
            Apply to the Lab
          </h2>
          <p className="text-white/85 leading-7 mb-8">
            If you&apos;re a UGA student with an interest in spacecraft, we&apos;d
            love to meet you. Applications go through a short technical
            interview process.
          </p>
          <a
            href="https://qualtricsxmfclnmhypx.qualtrics.com/jfe/form/SV_9FY8n5Dn6LaWKgu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#BA0C2F] text-white text-lg font-bold rounded-[5px] shadow-[0_0_20px_rgba(186,12,47,0.5)] hover:bg-white hover:text-[#BA0C2F] hover:-translate-y-1 transition"
          >
            Start Application
          </a>
        </div>
      </section>
    </div>
  );
}
