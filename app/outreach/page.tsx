"use client";

import { useEffect, useState } from "react";

interface OutreachEvent {
  title: string;
  date: string;
  location: string;
  age: string;
  studentAmount: string;
  img: string;
  description: string;
}

function EventCard({ event }: { event: OutreachEvent }) {
  const imgSrc = event.img.startsWith("/") ? event.img : `/${event.img}`;

  return (
    <>
      <hr />
      <div className="flex flex-col md:flex-row w-full">
        {/* Image */}
        <div
          className="w-[200px] h-[200px] bg-cover bg-no-repeat bg-center shrink-0"
          style={{ backgroundImage: `url(${imgSrc})` }}
        />
        {/* Description */}
        <div className="ml-0 md:ml-5">
          <h1>{event.title}</h1>
          <p>
            <span className="font-bold">Date: </span>
            <span className="mr-10">{event.date}</span>
            <span className="font-bold">location: </span>
            <span className="mr-10">{event.location}</span>
            <span className="font-bold">age: </span>
            <span className="mr-10">{event.age}</span>
            <span className="font-bold">number of students: </span>
            <span className="mr-10">{event.studentAmount}</span>
          </p>
          <p>{event.description}</p>
        </div>
      </div>
    </>
  );
}

export default function OutreachPage() {
  const [events, setEvents] = useState<OutreachEvent[]>([]);

  useEffect(() => {
    fetch("/json/outreach.json")
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, []);

  return (
    <section className="max-w-[1140px] mx-auto px-4 pt-4 pb-8">
      <h1 className="text-center">Outreach Events</h1>

      <div>
        {events.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>
    </section>
  );
}
