interface ContactPerson {
  role: string;
  name: string;
  email: string;
}

const contacts: ContactPerson[] = [
  { role: "Principal Investigator", name: "Dr. Deepak Mishra", email: "dmishra@uga.edu" },
  { role: "Lab Manager", name: "Sydney Whilden", email: "sydney.whilden25@uga.edu" },
  { role: "General Inquiries", name: "Lab Contact", email: "ssrluga@uga.edu" },
];

export default function ContactPage() {
  return (
    <section className="max-w-[1140px] mx-auto px-4 pt-4 pb-8">
      <h1>Contact Us</h1>

      {/* Map section */}
      <div className="pt-[50px] pb-[50px]">
        <div className="min-w-[300px] mb-4">
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAQA59VHUySY5niNcvw3qrZg9Q9rF0qEeo&q=UGA+Physics+Building,Athens,GA+30602"
            allowFullScreen
          />
          <address className="mt-2">
            <h5 className="text-white mb-0 leading-relaxed">
              Room 107<br />
              UGA Physics Building<br />
              Sanford Dr, Athens, GA 30602, USA
            </h5>
          </address>
        </div>
      </div>

      {/* Contacts section */}
      <h2>Contacts:</h2>
      <div className="flex flex-wrap justify-center text-center text-sm">
        {contacts.map((c) => (
          <div key={c.email} className="mx-[2px] mr-6 mb-4">
            <h3>{c.role}</h3>
            <h3>{c.name}</h3>
            <p>{c.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
