import FadeInSection from "@/app/components/home/FadeInSection";
import SectionDivider from "@/app/components/home/SectionDivider";

interface TimelineEntry {
  title: string;
  date: string;
  content: React.ReactNode;
}

const timelineData: TimelineEntry[] = [
  {
    date: "February 2015",
    title: "First UGA Hackathon Winners",
    content: (
      <p>
        A team of UGA Students, lead by{" "}
        <a href="http://calebadams.space" target="_blank" rel="noopener noreferrer">Caleb Adams</a>,
        place first at Virgina Tech hacks and become the first team from UGA to
        win an MLH Hackathon. They designed and built a low cost remote operated
        telescope. Members of this team would later go on to begin the annual
        UGA Hackathon, UGA Hacks.
      </p>
    ),
  },
  {
    date: "March 2015",
    title: "Spacey Sciences LLC Founded",
    content: (
      <p>
        The company Spacey Sciences LLC was formed out of the UGA
        Entrepreneurship program. The company consisted of{" "}
        <a href="http://calebadams.space" target="_blank" rel="noopener noreferrer">Caleb Adams</a>,
        Nicholas (Hollis) Neel, Kenny Cochran, and Ryan Babaie. The goal of the
        organization was to launch a small satellite into space. The plan was to
        fund this venture through a combiniation of smart-telescope sales and a
        kickstarter. The organization saw some early success with the development
        of{" "}
        <a href="https://news.uga.edu/looking-to-space/" target="_blank" rel="noopener noreferrer">
          the Spacey Smart Telescope.
        </a>{" "}
        The company would go on to sell several prototype units before
        dissolution.
      </p>
    ),
  },
  {
    date: "May 2015",
    title: "Center for Geospatial Research meets with NASA Astronaut",
    content: (
      <p>
        UGA Researchers and Faculty{" "}
        <a href="https://geography.uga.edu/directory/people/deepak-r-mishra" target="_blank" rel="noopener noreferrer">
          Dr. Deepak Mishra
        </a>{" "}
        and{" "}
        <a href="https://engineering.uga.edu/team_member/david-cotten/" target="_blank" rel="noopener noreferrer">
          Dr. David Cotten
        </a>{" "}
        met with meet with NASA Astronaut Mary Cleave about building a satellite
        for UGA.
      </p>
    ),
  },
  {
    date: "August 2015",
    title: "Partnership with the Center for Geospatial Research and Spacey Sciences LLC",
    content: (
      <p>
        Students and faculty meet for the first time. The Spacey Sciences team,
        now consisting of over 18 students, presents initial plans to build a 1U
        cube-satellite to the researchers at the Center for Geospatial Research.
        The partnership evolves as two groups find common goals and begin to
        collaborate on NASA and Air Force Research Lab proposals.
      </p>
    ),
  },
  {
    date: "November 2015",
    title: "Submission of NASA and AFRL Proposals",
    content: (
      <p>
        With guidance from faculty, the student team works hard to craft two
        proposals. In the end, two proposals are submitted - one to NASA and the
        other to the Air Force Research Lab.
      </p>
    ),
  },
  {
    date: "January 2016",
    title: "Air Force Research Lab Funding Won!",
    content: (
      <p>
        The UGA team receives initial funding from the AFRL University Nanosat
        Program (UNP) for the Multi-view On-board Computational Imager (MOCI).
        This is initial funding - not for the launch - but for the design of the
        MOCI satellite. UGA is now a part of the AFRL&apos;s UNP Nanosat 9 (NS-9)
        program.
      </p>
    ),
  },
  {
    date: "April 2016",
    title: "NASA Funding is Won!",
    content: (
      <p>
        The UGA team receives funding from NASA&apos;s Undergraduate Student
        Instrument Project (USIP) for the SPectral Ocean Color (SPOC) mission.
        The lab now has two missions to design.
      </p>
    ),
  },
  {
    date: "May 2016",
    title: "Official Founding of the Small Satellite Research Laboratory",
    content: (
      <>
        <p>
          Spacey Sciences LLC dissolves in favor of becoming UGA SSRL, the Small
          Satellite Research Lab. The Faculty and Students join together into a
          united front.{" "}
          <a href="http://calebadams.space" target="_blank" rel="noopener noreferrer">Caleb Adams</a>,
          from Spacey Science, becomes Program Manager.{" "}
          <a href="https://engineering.uga.edu/team_member/david-cotten/" target="_blank" rel="noopener noreferrer">
            Dr. David Cotten
          </a>{" "}
          becomes the Associate Director, Principal Investigator of the MOCI
          satellite, Co-Principal Investigator of the SPOC Satellite, and Lab
          Supervisor.{" "}
          <a href="https://geography.uga.edu/directory/people/deepak-r-mishra" target="_blank" rel="noopener noreferrer">
            Dr. Deepak Mishra
          </a>{" "}
          becomes the Director and Principal Investigator of the SPOC Satellite.
        </p>
        <p className="mt-4">
          The Faculty and Students are now on a united front and a lab-wide
          vision statement is created:
        </p>
        <p className="mt-4 text-center italic text-white/90 border-l-2 border-[#ff2d5c] pl-4">
          &quot;Our mission is to place UGA among the top spacefaring universties in
          the world and to give UGA a permanent presence in outerspace. We aim to
          teach students how to design, build, and operate spacecraft while
          providing our faculty with unique space-based data.&quot;
        </p>
      </>
    ),
  },
  {
    date: "May 2016",
    title: "Partnership with NASA Ames",
    content: (
      <p>
        The UGA SSRL signs a Space Act agreement with the{" "}
        <a href="https://www.nasa.gov/ames" target="_blank" rel="noopener noreferrer">
          NASA Ames Research Center
        </a>
        . This allows the lab access to NASA resources and researchers.
      </p>
    ),
  },
  {
    date: "March 2017",
    title: "Lab Expansion",
    content: (
      <p>
        The lab continues to grow as applicants are put through a rigorous
        3-round techinal interview process. Progress on SPOC and MOCI continues
        and the organization grows to 50 students and 12 faculty.
        <br /><br />
        The lab acquires official facilities which include a cleanroom and vacuum
        chamber.
      </p>
    ),
  },
  {
    date: "Year In Review 2016 - 2017",
    title: "Year In Review 2016 - 2017",
    content: (
      <>
        <p>
          The SSRL releases a year in review video detailing the acomplishments
          of the organization within the year 2016 - 2017.
        </p>
        <iframe
          width="100%"
          height="220"
          src="https://www.youtube.com/embed/Li59YM0gapg?si=rRg52BMu2qEk8cN4"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-4 rounded-lg border border-white/10"
        />
      </>
    ),
  },
  {
    date: "January 2018",
    title: "MOCI wins UNP NS-9",
    content: (
      <p>
        The UGA SSRL competed with 10 teams from across the country. These teams
        included the likes of MIT and UC Boulder. UGA won phase A funding,
        meaning the MOCI mission would fly! We were the first team to win on our
        first try and the first team to win without an aerospace program.
        <br /><br />
        To learn more, see our year in review video below.
      </p>
    ),
  },
  {
    date: "October 2018",
    title: "Renewal of Partnership with NASA Ames",
    content: (
      <p>
        The UGA SSRL renews its partnership with the{" "}
        <a href="https://www.nasa.gov/ames" target="_blank" rel="noopener noreferrer">
          NASA Ames Research Center
        </a>
        .
      </p>
    ),
  },
  {
    date: "Year In Review 2018 - mid 2019",
    title: "Year In Review 2018 - mid 2019",
    content: (
      <>
        <p>
          The SSRL releases a year in review video detailing the acomplishments
          of the organization within the year 2018 - mid 2019.
        </p>
        <iframe
          width="100%"
          height="220"
          src="https://www.youtube.com/embed/BqykaGbbo8s?si=uE66bFhYv-udI_TV"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-4 rounded-lg border border-white/10"
        />
      </>
    ),
  },
  {
    date: "2020",
    title: "SPOC Launches",
    content: (
      <>
        <p>
          SPOC launches on October 2nd, 2020 from the NASA Wallops Flight
          Facility.
        </p>
        <iframe
          width="100%"
          height="220"
          src="https://www.youtube.com/embed/-ZDZ8wQPj24"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-4 rounded-lg border border-white/10"
        />
      </>
    ),
  },
];

function TimelineNode({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const isRight = index % 2 === 1;

  return (
    <div className="relative mb-12 md:mb-16">
      {/* Center dot */}
      <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-[#ff2d5c] shadow-[0_0_15px_rgba(255,45,92,0.9),0_0_25px_rgba(186,12,47,0.6)]" />
        <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#ff2d5c] animate-ping opacity-30" />
      </div>

      <div
        className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
          isRight ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Card */}
        <div className="w-full md:w-5/12">
          <article className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[rgba(255,45,92,0.45)] hover:bg-white/[0.05] transition duration-300">
            <div className="px-5 md:px-6 py-4 border-b border-white/10">
              <h3
                className="text-xl md:text-2xl text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.6)] leading-tight"
                style={{ textAlign: isRight ? "right" : "left" }}
              >
                {entry.title}
              </h3>
            </div>
            <div
              className="px-5 md:px-6 py-5 text-white/85 leading-7 [&_a]:text-[#ff2d5c] [&_a]:underline [&_a:hover]:text-white [&_a:hover]:[text-shadow:0_0_10px_rgba(255,45,92,0.9)] [&_a]:transition"
              style={{ textAlign: isRight ? "right" : "left" }}
            >
              {entry.content}
            </div>
            {/* Pointer arrow toward center line */}
            <div
              aria-hidden
              className={`hidden md:block absolute top-6 w-0 h-0 border-y-[10px] border-y-transparent ${
                isRight
                  ? "right-full border-r-[10px] border-r-[rgba(255,45,92,0.45)]"
                  : "left-full border-l-[10px] border-l-[rgba(255,45,92,0.45)]"
              }`}
            />
          </article>
        </div>

        {/* Date */}
        <div
          className={`w-full md:w-5/12 md:pt-5 ${
            isRight ? "md:text-left" : "md:text-right"
          }`}
        >
          <time className="inline-block text-sm md:text-base uppercase tracking-[0.25em] text-white font-semibold px-3 py-1 rounded-full border border-white/25 bg-white/10">
            {entry.date}
          </time>
        </div>
      </div>
    </div>
  );
}

export default function FoundingPage() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      <section className="min-h-[calc(100vh-76px)] flex items-center justify-center relative overflow-hidden text-center border-b border-white/10 px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(186,12,47,0.18),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff2d5c] [text-shadow:0_0_10px_rgba(255,45,92,0.7)] mb-4 animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-1000 fill-mode-both">
            Founding & History
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            From a hackathon win in 2015 to launching satellites alongside NASA
            and the Air Force, here&apos;s how the Small Satellite Research
            Laboratory came to be.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical center line */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,45,92,0.6)_5%,rgba(255,45,92,0.6)_95%,transparent_100%)] shadow-[0_0_15px_rgba(255,45,92,0.4)]"
          />

          <div className="relative">
            {timelineData.map((entry, i) => (
              <FadeInSection key={i}>
                <TimelineNode entry={entry} index={i} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
