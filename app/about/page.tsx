"use client";
import { SimpleGrid } from "@chakra-ui/react";
// import { GoMarkGithub } from "react-icons/go";
import { FaGithub as GoMarkGithub } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Navbar } from "@/components/navbar";
import Banner from "@/components/banner";
import Button from "@/components/button";
import React from "react";
import WhatIsFirst from "@/components/whatisfirst";

export default function About() {
  return (
    <>
      <head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Navbar active="about" />
      <Banner />
      <div className="mt-10">
        <div className="container mx-auto">
          <Jumbotron />
          <div className="mt-20" />
          <WhatIsFirst heading="What is FIRST?">
            FIRST® (For Inspiration and Recognition of Science and Technology)
            is a non-profit organization dedicated to advancing STEM education
            in the next generation of students. FIRST® Robotics Competition is
            one of the programs– alongside FIRST® LEGO® League, FIRST® Tech
            Challenge, and others– aimed specifically at high school students.
            Find out more{" "}
            <a
              href="https://www.firstinspires.org/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-900"
            >
              here
            </a>
          </WhatIsFirst>
          <div className="mt-20" />
          <OurTeam />
          <div className="mt-20" />
          <InterestedInJoining />
          {/* <MeetTheTeam /> */}

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            mt="20"
            mx="auto"
            spacing="10"
          >
            <div className="mx-auto self-center">
              <h1 className="text-4xl font-bold text-light-orange font-heading">
                Contact{" "}
                <span className="text-black dark:text-slate-200">Us</span>
              </h1>
              <p className="italic mt-1">Feel free to reach out!</p>

              {/* <p className=" mt-3 text-xl font-para">
                <span className="font-bold">Phone: </span>(984) 269-8507
              </p> */}
              <p className="  text-xl font-para">
                <span className="font-bold">Email: </span>
                valencerobotics@gmail.com
              </p>
              <p className="  text-xl font-para">
                <span className="font-bold">Location: </span>Durham, NC
              </p>

              <div className="mt-4">
                <IconContext.Provider
                  value={{ className: "text-3xl text-light-orange" }}
                >
                  <a
                    href="https://github.com/ValenceRobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mt-3">
                      <GoMarkGithub className="inline" />
                      <p className="inline text-lg font-semibold">
                        {" "}
                        ValenceRobotics
                      </p>
                    </div>
                  </a>
                  <div />
                  <a
                    href="https://www.instagram.com/valence_robotics/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mt-3">
                      <AiOutlineInstagram className="inline " />
                      <p className="inline text-lg font-semibold">
                        {" "}
                        @valence_robotics
                      </p>
                    </div>
                  </a>
                  <div />
                  <a
                    href="https://www.paypal.com/paypalme/valencerobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mt-3">
                      <BsPaypal className="inline" />
                      <p className="inline text-lg font-semibold">
                        {" "}
                        @valencerobotics
                      </p>
                    </div>
                  </a>
                </IconContext.Provider>
              </div>
            </div>

            <iframe
              title="asdf"
              width="100%"
              height="400"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.7854115918017!2d-78.94668018447898!3d36.00110951996912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace6b05ff94eff%3A0x69e83452ec106d7!2s140%20Science%20Dr%2C%20Durham%2C%20NC%2027710!5e0!3m2!1sen!2sus!4v1676139200467!5m2!1sen!2sus"
            >
              <a href="https://www.gps.ie/sport-gps/">bike gps</a>
            </iframe>
          </SimpleGrid>
        </div>
      </div>
    </>
  );
}

function InterestedInJoining() {
  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 1 }} mt="20" mx="auto" spacing="10">
        <h1 className="text-4xl font-bold text-black font-heading mx-auto dark:text-slate-200">
          <span className="text-dark-orange">Interested</span> in{" "}
          <span className="text-dark-orange">joining</span>? Fill out the{" "}
          <a
            href="https://forms.gle/xLUby8H11ygVrqY88"
            className="text-dark-orange underline hover:text-dark-orange"
            target="_blank"
            rel="noreferrer"
          >
            member information form
          </a>
        </h1>

        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-black align-middle font-para"></h2> */}
      </SimpleGrid>
    </div>
  );
}

function Jumbotron() {
  return (
    <div className="grid md:grid-cols-2 gap-y-8">
      <div className="flex justify-center">
        <img src="logo_dark.png" alt="Logo" className="max-h-56 m-auto" />
      </div>

      <div className="flex justify-center">
        <div className="m-auto text-center">
          <h1 className="lg:text-7xl text-5xl font-bold text-center">
            <span className="text-logo-orange font-heading">About</span> Us
          </h1>

          <p className="text-center text-lg text-slate-200 italic mt-8 font-para">
            Valence Robotics FRC Team 8429
          </p>

          <div className="mt-8">
            <Button
              text="Join Us"
              to="https://forms.gle/xLUby8H11ygVrqY88"
              dark={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <div className="grid md:grid-cols-2 gap-y-8 gap-x-4">
      <div className="m-auto px-4">
        <h3 className="text-2xl text-center font-bold text-light-orange font-heading">
          Our Team
        </h3>
        <p className="text-center max-w-md mx-auto mt-3 font-para">
          Our team began as a group of chemistry students working late one night
          in the library, when one student, our captain, started formulating an
          ambitious idea. After much time spent deliberating on the thought, we
          concurred: We wanted to start a FIRST® Robotics Competition team,
          completely founded and driven by students. The beginnings were rough,
          many hours consumed by reaching through doors, many of which lead to
          even harder paths or even dead ends. However, with our growing group
          of devoted students, we have preserved and developed into the team it
          is today.
        </p>
      </div>

      <div className="m-auto px-4">
        <img src="team_picture.jpg" alt="team1" className="rounded-lg" />
      </div>
    </div>
  );
}
