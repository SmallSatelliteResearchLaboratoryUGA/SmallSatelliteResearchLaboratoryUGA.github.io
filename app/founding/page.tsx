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
        <a href="http://calebadams.space" target="_blank" rel="noopener noreferrer" className="cursor-pointer">Caleb Adams</a>,
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
        <a href="http://calebadams.space" target="_blank" rel="noopener noreferrer" className="cursor-pointer">Caleb Adams</a>,
        Nicholas (Hollis) Neel, Kenny Cochran, and Ryan Babaie. The goal of the
        organization was to launch a small satellite into space. The plan was to
        fund this venture through a combiniation of smart-telescope sales and a
        kickstarter. The organization saw some early success with the development
        of{" "}
        <a href="https://news.uga.edu/looking-to-space/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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
        <a href="https://geography.uga.edu/directory/people/deepak-r-mishra" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          Dr. Deepak Mishra
        </a>{" "}
        and{" "}
        <a href="https://engineering.uga.edu/team_member/david-cotten/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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
          <a href="http://calebadams.space" target="_blank" rel="noopener noreferrer" className="cursor-pointer">Caleb Adams</a>,
          from Spacey Science, becomes Program Manager.{" "}
          <a href="https://engineering.uga.edu/team_member/david-cotten/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            Dr. David Cotten
          </a>{" "}
          becomes the Associate Director, Principal Investigator of the MOCI
          satellite, Co-Principal Investigator of the SPOC Satellite, and Lab
          Supervisor.{" "}
          <a href="https://geography.uga.edu/directory/people/deepak-r-mishra" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            Dr. Deepak Mishra
          </a>{" "}
          becomes the Director and Principal Investigator of the SPOC Satellite.
        </p>
        <p>
          The Faculty and Students are now on a united front and a lab-wide
          vision statement is created:
        </p>
        <p className="text-center italic font-light">
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
        <a href="https://www.nasa.gov/ames" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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
          height="200"
          src="https://www.youtube.com/embed/Li59YM0gapg?si=rRg52BMu2qEk8cN4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="px-[15px]"
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
        <a href="https://www.nasa.gov/ames" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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
          height="200"
          src="https://www.youtube.com/embed/BqykaGbbo8s?si=uE66bFhYv-udI_TV"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="px-[15px]"
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
          height="200"
          src="https://www.youtube.com/embed/-ZDZ8wQPj24"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="px-[15px]"
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
  const isEven = index % 2 === 1;

  const contentBlock = (
    <div className="md:w-5/12 relative border border-[#007bff] rounded-b-[10px] shadow-[0px_3px_25px_0px_rgba(10,55,90,0.2)] timeline-content">
      <h3
        className="text-white font-light bg-[#072027] p-[10px_15px] text-[18px]"
        style={{ textAlign: isEven ? "left" : "right" }}
      >
        {entry.title}
      </h3>
      <div
        className="p-[10px_15px] [&>p]:text-[#f6f6f6] [&_a]:text-[#007bff]! [&_a]:text-[12px] [&_a:hover]:text-[#0056b3] [&_a:hover]:underline"
        style={{ textAlign: isEven ? "left" : "right" }}
      >
        {entry.content}
      </div>
      {/* Arrow */}
      <div
        className={`absolute top-[5%] w-0 h-0 ${
          isEven
            ? "right-full border-r-[10px] border-r-[#007bff] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
            : "left-full border-l-[10px] border-l-[#007bff] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
        }`}
      />
    </div>
  );

  const dateBlock = (
    <div
      className="md:w-5/12 py-3"
      style={{ textAlign: isEven ? "right" : "left" }}
    >
      <time className="text-[#f6f6f6]">{entry.date}</time>
    </div>
  );

  const circleBlock = (
    <div className="hidden md:block w-[65px] relative z-[100]">
      <div className="w-[65px] h-[65px] border-2 border-dashed border-[#072027] rounded-full bg-[#072027] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%]" />
    </div>
  );

  return (
    <div
      className={`flex flex-wrap items-start justify-center pb-[25px] relative ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {contentBlock}
      {circleBlock}
      {dateBlock}
    </div>
  );
}

export default function FoundingPage() {
  return (
    <section className="max-w-[1140px] mx-auto px-4 pt-4 pb-8">
      <br />
      <h1>Founding and History</h1>
      <br />

      {/* Timeline */}
      <div className="py-[50px] relative before:content-[''] before:block before:absolute before:top-0 before:left-1/2 before:w-0 before:border-l-2 before:border-dashed before:border-[#007bff] before:h-full before:z-[1] before:-translate-x-1/2">
        {timelineData.map((entry, i) => (
          <TimelineNode key={i} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
