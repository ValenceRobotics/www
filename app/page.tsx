import Banner from "@/components/banner";
import Button from "@/components/button";
import { Navbar } from "@/components/navbar";
import SponsorCard from "@/components/sponsorcard";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar active="home" />
      <Banner />
      <div className="w-screen mt-10">
        <div className="mx-auto flex flex-wrap justify-evenly gap-y-16">
          <div className="flex justify-center">
            <div className="m-auto text-center">
              <h1 className="text-7xl font-bold text-center font-name">
                <span className="text-logo-orange">Valence</span> Robotics
              </h1>

              <p className="text-center text-lg text-slate-200 italic mt-8 px-12 font-para">
                Transforming the students of today into the leaders of tomorrow
              </p>

              <div className="mt-8 flex justify-center gap-6">
                <Button
                  text="Join Us"
                  to="https://forms.gle/XDHLhtjhZRDmcG6q8"
                  dark={true}
                />
                <Button text="Sponsor Us" to="sponsor" dark={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap gap-x-4 gap-y-16 mt-24">
          <div className="container md:w-2/5 px-4 md:px-16">
            <h3 className="text-2xl text-center font-normal font-heading">
              Our Mission
            </h3>
            <p className="text-center max-w-md mx-auto mt-3 font-para">
              The mission of Valence Robotics is to uplift our diverse student
              community through opportunities to develop into motivated leaders
              of science, technology, engineering, art, and math. Created for
              and initiated by students, our team seeks to guide members to
              become well-rounded industry professionals.
            </p>
          </div>

          <div className="container md:w-2/5 px-4 xl:px-16">
            <h3 className="text-2xl text-center font-normal font-heading">
              Who are we?
            </h3>
            <p className="text-center max-w-md mx-auto mt-3 font-para">
              Valence Robotics is a FIRST® Robotics Competition team and 501(c)3
              organization. Our team was established in October 2021 with the
              mission of furthering connectivity and curiosity within the
              community. While we operate primarily in Durham, North Carolina,
              our members come from counties all across the state.
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-24 px-4">
          <h1 className="text-4xl font-bold text-center text-button-orange my-4 font-heading">
            <span className="text-black dark:text-slate-200">Current</span>{" "}
            Sponsors
          </h1>
          <p className="text-center max-w-md mx-auto mt-3 font-para">
            We are grateful for the support of our sponsors. Without their
            generosity, we would not be able to pursue our mission.
          </p>
          <h2 className="text-2xl text-center font-normal font-heading my-3">
            Radon Tier Sponsors
          </h2>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            <SponsorCard
              companyName="Area 27"
              desc="AREA 27 was a FIRST Robotics Competition team, and our inaugural (and final) year was 2020."
              // img={Area27}
              img="/sponsors/area27.png"
              tier="Radon Tier Sponsor"
            />
            <SponsorCard
              companyName="Duke Pratt School of Engineering"
              desc="The Pratt School of Engineering is located at Duke University in the United States. The school's associated research, education, alumni and service-to-society efforts are collectively known as Duke Engineering."
              // img={DukePratt}
              img="/sponsors/dukepratt.jpeg"
              tier="Radon Tier Sponsor"
            />
            <SponsorCard
              companyName="Apple"
              desc="Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States."
              // img={apple}
              img="/sponsors/apple.jpeg"
              tier="Radon Tier Sponsor"
            />
            <SponsorCard
              companyName="NASA"
              desc="The National Aeronautics and Space Administration is an independent agency of the United States federal government responsible for the civilian space program, as well as aeronautics and space research."
              // img={nasa}
              img="/sponsors/nasa.png"
              tier="Radon Tier Sponsor"
            />
            <SponsorCard
              companyName="Burroughs Wellcome Fund"
              desc="The Burroughs Wellcome Fund is an American non-profit medical research organization that provides funding for biomedical research, STEM education, and areas of career development for scientists. Since 1970, it has been headquartered in North Carolina's Research Triangle Park."
              // img={burroughsWellcome}
              img="/sponsors/burroughs.jpeg"
              tier="Radon Tier Sponsor"
            />
          </div>
          <h2 className="text-2xl text-center font-normal font-heading my-3">
            Xenon Tier Sponsors
          </h2>
          <div className="columns-1 md:columns-2 gap-4">
            <SponsorCard
              companyName="TE Connectivity"
              desc="TE Connectivity is an American Swiss-domiciled technology company that designs and manufactures connectors and sensors for several industries, such as automotive, industrial equipment, data communication systems, aerospace, defense, medical, oil and gas, consumer electronics and energy."
              // img={TEConnectivity}
              img="/sponsors/teconnectivity.png"
              tier="Xenon Tier Sponsor"
            />

            <SponsorCard
              companyName="Intuitive Foundation"
              desc="The Intuitive Foundation is dedicated to reducing the global burden of disease and suffering through philanthropy, research and education aimed at better outcomes for patients everywhere"
              // img={intuitiveFoundation}
              img="/sponsors/intuitivefoundation.png"
              tier="Xenon Tier Sponsor"
            />
          </div>
        </div>
      </div>
    </>
  );
}
