import Image from "next/image";

export default function FacilitiesPage() {
  return (
    <section className="max-w-[1140px] mx-auto px-4 pt-4 pb-8">
      {/* Page Heading */}
      <h1 className="my-4">
        UGA SSRL <small className="text-[0.65em] font-light">Facilities and Capabilities</small>
      </h1>

      {/* Hero lab image */}
      <div>
        <Image
          src="/images/lab/lab.jpg"
          alt="Lab"
          width={1140}
          height={400}
          className="w-full h-auto rounded mb-3"
          unoptimized
        />
      </div>

      <br /><br />

      <p className="text-white">
        SSRL has over 1400 sq. ft. of lab space located in the UGA Physics
        building. It is equipped with a wide range of facilities for designing,
        building, and testing space ready equipment including: 126 sq. ft. ISO 7
        certified cleanroom, a 200 liter thermal vacuum chamber capable of
        reaching 10⁻⁶ torr, 150 sq ft of ESD safe work space for sensitive
        electronics, and a ground station capable of communication and data
        downlink using S-Band, UHF, and VHF
      </p>

      <hr />

      {/* Cleanroom — image left, text right */}
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="md:w-3/4">
          <Image
            src="/images/lab/cleanroom.png"
            alt="Cleanroom"
            width={900}
            height={400}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
        <div className="md:w-1/4">
          <h2>Cleanroom</h2>
          <p>
            The facilities include a 126 sq. ft., ISO 7 certified cleanroom.
            This is typically used for optical systems integration and final
            flight systems integration.
          </p>
          <p>
            Here the{" "}
            <a
              href="/images/documents/presentations/UGAWorkshop2017CubeSatDeveloper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              SPOCeye
            </a>{" "}
            instrument, the primary scientific payload of the{" "}
            <a
              href="/images/documents/presentations/SPOC_Design_Review.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              SPOC satellite
            </a>
            , are integrated and tested.
          </p>
        </div>
      </div>

      <hr />

      {/* Ground Station — text left, image right */}
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="md:w-1/4">
          <h2>Ground Station</h2>
          <p>
            This station has a dual SDR/HDR system between 10 Hz and 6 GHz, VHF,
            UHF, and S-Bands for amateur satellite communication, satellite
            tracking capabilities integrated with Ball Aerospace COSMO mission
            command and control software
          </p>
        </div>
        <div className="md:w-3/4">
          <Image
            src="/images/lab/groundstation.png"
            alt="Ground Station"
            width={900}
            height={400}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
      </div>

      <hr />

      {/* Thermal Vacuum Chamber — image left, text right */}
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="md:w-3/4">
          <Image
            src="/images/lab/tvac.png"
            alt="Thermal Vacuum Chamber"
            width={900}
            height={400}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
        <div className="md:w-1/4">
          <h2>Thermal Vacuum Chamber</h2>
          <p>
            The equipment includes a 200 liter thermal vacuum chamber capable of
            reaching 10⁻⁶ torr, +80°C, and -40°C.
          </p>
        </div>
      </div>

      <hr />

      {/* ESD Safe Areas — text left, image right */}
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="md:w-1/4">
          <h2>ESD Safe Areas</h2>
          <p>
            150 sq ft of ESD safe work space for sensitive electronics. A
            plethora of standard electronics, tools, workbenches, and components
            are included.
          </p>
        </div>
        <div className="md:w-3/4">
          <Image
            src="/images/lab/ESD.png"
            alt="ESD Safe Areas"
            width={900}
            height={400}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
      </div>

      <hr />

      {/* Mission Operations Terminal + 3D Printers — 4-column row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        <div>
          <h2>Mission Operations Terminal</h2>
          <p>
            Our 6 screen Missions Operations terminal consists of 2, 4K monitors
            and 4, 1080p touch screens. It is from here where the ground
            operators of{" "}
            <a
              href="/images/documents/presentations/SPOC_Design_Review.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              SPOC
            </a>
            ,{" "}
            <a
              href="/images/documents/presentations/MOCI_Software_Demo2018.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              MOCI
            </a>
            , and future missions will command and control our satellites.
          </p>
        </div>
        <div>
          <Image
            src="/images/lab/mops.png"
            alt="Mission Operations Terminal"
            width={300}
            height={200}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
        <div>
          <h2>3D Printers</h2>
          <p>
            The Lab contains 2, 3D printers that are used for prototyping, fit
            checking, and assembly practice.
          </p>
        </div>
        <div>
          <Image
            src="/images/lab/3d.png"
            alt="3D Printers"
            width={300}
            height={200}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
      </div>

      <hr />

      {/* Soldering + General Purpose Computers — 4-column row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        <div>
          <Image
            src="/images/lab/wires.png"
            alt="Soldering and Wiring Stations"
            width={300}
            height={200}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
        <div>
          <h2>Soldering and Wiring Stations</h2>
          <p>
            Typically, we make our own wires and harnesses. We can also populate
            custom boards that we design in house.
          </p>
        </div>
        <div>
          <Image
            src="/images/lab/computers.png"
            alt="General Purpose Computers"
            width={300}
            height={200}
            className="w-full h-auto rounded"
            unoptimized
          />
        </div>
        <div>
          <h2>General Purpose Computers</h2>
          <p>
            The Lab contains 7 general purpose computers with high-end GPUs use
            for development, CAD, and simulations.
          </p>
        </div>
      </div>
    </section>
  );
}
