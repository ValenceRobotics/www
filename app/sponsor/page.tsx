"use client";
import Banner from "@/components/banner";
import { Navbar } from "@/components/navbar";
import WhatIsFirst from "@/components/whatisfirst";
import { SimpleGrid } from "@chakra-ui/react";

function Sponsor() {
  return (
    <>
      <Navbar active="sponsor" />
      <Banner />
      <div className="mt-10">
        <Landing
          blackText="Sponsor "
          orangeText="Valence Robotics"
          desc="FRC Team 8429 Valence Robotics"
          buttonLink="https://c1h0s3jjlx4.typeform.com/to/efpc56TR"
          buttonText="Sponsorship Form"
        />
        <div className="mt-20" />
        <WhatIsFirst heading="Why Us?">
          As a highschool student established and powered team, we are always
          looking for support in whatever means it may come.
        </WhatIsFirst>
        <div className="mt-20" />
        <Interested />
        <div className="mt-20" />
        <h1 className="text-5xl font-bold text-center text-light-orange font-heading dark:text-logo-orange">
          Sponsorship{" "}
          <span className="text-black dark:text-slate-200">Tiers</span>
        </h1>
        <p className="text-center text-lg mt-2 max-w-5xl mx-auto ">
          Only sponsorships finalized before February 14, 2022 will be included
          on the 21-22 season team shirts. However, sponsorships received after
          this date will be included on next team&apos;s shirts and will be
          featured on the current website.
        </p>
        <Tier />
      </div>
    </>
  );
}

export default Sponsor;

function Interested() {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <div className="flex justify-evenly">
        <h1 className="text-4xl font-bold text-center text-light-orange font-heading">
          Interested <span className="text-black dark:text-slate-200">in</span>{" "}
          Sponsoring?
        </h1>
      </div>
      <div className="mt-8">
        <div>
          <div className="flex justify-center mb-4">
            <div className="bg-light-orange rounded-full w-8 h-8 flex justify-center items-center mr-2">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-white font-heading">
                1
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-center text-black align-middle font-para dark:text-slate-200">
              Fill out the{" "}
              <a
                href="https://c1h0s3jjlx4.typeform.com/to/efpc56TR"
                target="_blank"
                className="text-light-orange underline hover:text-dark-orange"
                rel="noreferrer"
              >
                sponsor information form
              </a>
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="bg-light-orange rounded-full w-8 h-8 flex justify-center items-center mr-2">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-white font-heading">
                2
              </h1>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-center text-black align-middle font-para dark:text-slate-200">
              Wait for an email from us!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tier() {
  const TierInfo = [
    {
      level: "Radon",
      followingText: "Tier Sponsor",
      price: "$5,000+",
      benefits: [
        "Large business logo on shirt (worn by team members at events and tournaments)",
        "Large business logo on website and link to sponsor’s page",
        "Large business logo on Valence robot",
        "Thank you letter at end of the season, along with regular sponsorship updates",
      ],
      color: "text-purple",
    },
    {
      level: "Xenon",
      followingText: "Tier Sponsor",
      price: "$1,000.00 - $4,999.99",
      benefits: [
        "Medium business logo on shirt (worn by team members at events and tournaments",
        "Medium business logo on website",
        "Medium business logo on Valence robot",
        "Thank you letter at end of the season, along with regular sponsorship updates",
      ],
      color: "text-purple",
    },
    {
      level: "Krypton",
      followingText: "Tier Sponsor",
      price: "$500.00 - $999.99",
      benefits: [
        "Small business logo on shirt (worn by team members at events and tournaments",
        "Small business logo on website",
        "Small business logo on Valence robot",
        "Thank you letter at end of the season, along with regular sponsorship updates",
      ],
      color: "text-purple",
    },
    {
      level: "Argon",
      followingText: "Tier Sponsor",
      price: "$150.00 - $499.99",
      benefits: [
        "Small business logo on website",
        "Small business logo on Valence robot",
        "Thank you letter at end of the season and regular sponsorship updates",
      ],
      color: "text-purple",
    },
    {
      level: "Neon",
      followingText: "Tier Sponsor",
      price: "$50.00 - $149.99",
      benefits: [
        "Small business logo on website",
        "Thank you letter at end of the season and regular sponsorship updates",
      ],
      color: "text-purple",
    },
    {
      level: "Helium",
      followingText: "Tier Sponsor",
      price: "$5.00 - $49.99",
      benefits: [
        "Thank you letter at end of the season and regular sponsorship updates",
      ],
      color: "text-purple",
    },
    {
      level: "FRC Robotics Team Exclusive Benefits",
      price: "$150.00+",
      benefits: ["Team logo sticker on Valence robot"],
      color: "text-light-blue",
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 mt-8">
      {TierInfo.map((tier) => {
        return (
          <>
            <div className="text-4xl text-center mt-10">
              <h1
                className={`text-center font-extrabold inline text-purple font-heading dark:text-light-orange`}
              >
                {tier.level}
              </h1>
              <h1 className="text-center font-bold inline font-heading">
                {" "}
                {tier.followingText}
              </h1>
              <h1 className="text-center font-bold text-2xl text-blue-400 italic font-para dark:text-yellow">
                {tier.price}
              </h1>
            </div>
            <SimpleGrid
              minChildWidth="300px"
              spacingX="10px"
              spacingY="10px"
              mt="8"
            >
              {tier.benefits.map((benefit, index) => {
                return <Bullet text={benefit} key={index} />;
              })}
            </SimpleGrid>
          </>
        );
      })}
    </div>
  );
}

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import Landing from "@/components/landing";

function Bullet(props: { text: string }) {
  return (
    <div className="font-para">
      <IconContext.Provider value={{ className: "text-light-orange text-3xl" }}>
        <IoIosCheckmarkCircleOutline className="inline mr-2 sponsor-icons" />
      </IconContext.Provider>
      <p className="inline text-xl">{props.text}</p>
    </div>
  );
}
