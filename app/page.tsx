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
                  to="https://forms.gle/xLUby8H11ygVrqY88"
                  dark={true}
                />
                <Button text="Donate" to="https://www.gifts.duke.edu/pratt?designation=3993153" dark={true} />
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
              Valence Robotics is a FIRST® Robotics Competition team and
              501(c)(3) organization. Our team was established in October 2021
              with the mission of furthering connectivity and curiosity within
              the Durham community.
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
              companyName="The Foundry"
              desc="The Foundry is a 7,600-square-foot student-focused, project-centered, collaborative space where students from across Duke University and the surrounding community can build ideas from the ground up."
              img="/sponsors/foundry.png"
              tier="Radon Tier Sponsor"
            />
          </div>
          <h2 className="text-2xl text-center font-normal font-heading my-3">
            Xenon Tier Sponsors
          </h2>
          <div className="columns-1 md:columns-2 gap-4">
            <SponsorCard
              companyName="Duke ECE Department"
              desc="The Department of Electrical and Computer Enginering is located at Duke University in the United States. The mission of the Department of Electrical and Computer Engineering is to facilitate the development of well rounded, educated, productive, and ethical individuals who are well versed in technology and in social, political, and environmental issues."
              img="/sponsors/dukeece.png"
              tier="Xenon Tier Sponsor"
            />
            <SponsorCard
              companyName="Thermo Fisher Scientific"
              desc="Thermo Fisher Scientific Inc. is the world leader in serving science, with annual revenue of approximately $40 billion. Our Mission is to enable our customers to make the world healthier, cleaner and safer. Whether our customers are accelerating life sciences research, solving complex analytical challenges, improving patient diagnostics and therapies or increasing productivity in their laboratories, we are here to support them."
              img="/sponsors/thermofisherscientific.png"
              tier="Xenon Tier Sponsor"
            />
          </div>
          <h2 className="text-2xl text-center font-normal font-heading my-3">
            Partners
          </h2>
          <div className="columns-1 md:columns-2 gap-4">
            <SponsorCard
              companyName="Fabworks"
              href="https://www.fabworks.com"
              desc="Fabworks is the fastest way to get your sheet metal and tube parts manufactured."
              img="/sponsors/fabworks.png"
              tier="Partner"
            />
            <SponsorCard
              companyName="Limelight"
              href="https://limelightofnc.com/"
              desc="Custom screen print and embroidery. For businesses, family reunion, schools, sport teams and churches."
              img="/sponsors/limelight.webp"
              tier="Partner"
            />
          </div>
        </div>
      </div>
    </>
  );
}
