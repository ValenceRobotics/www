// import SponsorshipPacket from "../assets/Sponsor Packet.pdf";
// import SponsorProspectus from "../assets/2022-23 Valence Robotics Prospectus.pdf";
import { Navbar } from "@/components/navbar";
import Banner from "@/components/banner";
import Landing from "@/components/landing";
import Button from "@/components/button";

function Resources() {
  return (
    <>
      <head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Navbar active="resources" />
      <Banner />
      <div className="mt-10 ">
        <Landing
          blackText="Our "
          orangeText="Resources"
          desc="Branding, Marketing, and more"
          buttonLink=""
          buttonText=""
        />

        {/* <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">Important <span className="text-black dark:text-slate-200">Links</span></h1> */}
        <div className="text-center mt-10">
          <div className="my-4 md:inline md:mx-3"></div>
          <Button
            text="Branding Document"
            to="https://docs.google.com/document/d/1Fc0RgRXL9f0TvXlq7sW3yHkdeqg2uJ7H_sZClSpjRcs/edit?usp=sharing"
            dark={true}
          />
          <div className="my-4 md:inline md:mx-3"></div>
          <Button
            text="Sponsor Packet"
            to="https://docs.google.com/document/d/1SUuSq2FaKFuLpAshwy7bJuyLd-E8XxW0zukyqIxsPWM/edit?usp=sharing"
            dark={true}
          />
          <div className="my-4 md:inline md:mx-3"></div>
          <Button
            text="Sponsor Prospectus"
            to="https://docs.google.com/document/d/10CxtpBF3CUBEvQvdiMTTygSjt7mCjv0Mda16YhOJXmE/edit"
            dark={true}
          />
        </div>

        <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">
          Branding{" "}
          <span className="text-black dark:text-slate-200">Document</span>
        </h1>

        <object
          className="w-full md:w-1/2 mx-auto h-screen drop-shadow-lg  "
          data="/Branding Document.pdf"
          type="application/pdf"
          aria-label="Branding Document"
        />

        <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">
          Sponsor <span className="text-black dark:text-slate-200">Packet</span>
        </h1>

        <object
          className="w-full md:w-1/2 mx-auto h-screen drop-shadow-lg  "
          data="/Sponsor Packet.pdf"
          type="application/pdf"
          aria-label="Sponsorship Packet"
        />

        <h1 className="text-4xl font-bold text-center text-light-orange mt-10 mb-5 font-heading">
          Sponsor{" "}
          <span className="text-black dark:text-slate-200">Prospectus</span>
        </h1>
        <object
          className="w-full md:w-1/2 mx-auto h-screen drop-shadow-lg  "
          data="/2022-23 Valence Robotics Prospectus.pdf"
          type="application/pdf"
          aria-label="Sponsorship Prospectus"
        />
      </div>
    </>
  );
}

export default Resources;
