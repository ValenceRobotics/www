"use client";
import { SimpleGrid } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import Banner from "@/components/banner";
import Button from "@/components/button";
import React from "react";

export default function FLLGuide() {
  return (
    <>
      <head>
        <title>FLL Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Navbar active="fll-guide" />
      <Banner />
      <div className="mt-10">
        <div className="container mx-auto">
          <h1 className="lg:text-7xl text-5xl font-bold text-center font-heading">
            <span className="text-logo-orange font-heading">FLL</span> Guide
          </h1>
          <p className="text-center text-lg font-para mt-2 max-w-5xl mx-auto">Welcome to Team 8429 Valence Robotics FLL Guide! Having established our own FLL team for students with visual impairments, we’ve created this resource to provide teams with the resources they need to thrive while helping increase the accessibility of FIRST programs. This guide is offered in both a blog and podcast format!</p>
          <div className="mt-2"/>
          <h2 className="text-2xl text-center font-bold text-light-orange font-heading">Chapter 1</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
            <div className="justify-center">
              <div className="mt-2"/>
              <h3 className="text-lg text-center font-bold font-heading">Podcast</h3>
              <div className="mt-2"/>
              <audio controls src="./fll-guide/ch1-audio.mp4"></audio>
              <div className="mt-2"/>
              <h3 className="text-lg text-center font-bold font-heading">Interview</h3>
              <div className="mt-2"/>
              {/*
              <video controls>
                <source src="./fll-guide/ch1-interview.mp4" type="video/mp4"/>
              </video>
              */}
              <iframe src="https://drive.google.com/file/d/16kt6xibSjP5FB-0pOwHv_b68KB2_HdxL/preview"></iframe>
              <div className="mt-2"/>
              <h3 className="text-lg text-center font-bold font-heading">Cold Email Template</h3>
              <div style={{maxHeight:"20em", overflow:"scroll"}}>
                <p className="text-lg font-para mt-2 max-w-5xl mx-auto">Hi ____,</p>
                <p className="text-lg font-para mt-2 max-w-5xl mx-auto">My name is ___ and I’m a member of a high school FIRST Robotics Competition team (insert team number and name). FIRST is a K-12 robotics program aimed at providing students with platforms to explore and build skills in STEAM while developing 21st Century Skills.</p>
                <p className="text-lg font-para mt-2 max-w-5xl mx-auto">	As a team, we strive to expand access to STEM education/programs in the broader ___ community and (insert state here) through various events. In the past year alone, we have collaborated with ______ to introduce STEM to K-12 students utilizing robot demonstrations, circuitry lessons, and other interactive activities. Furthermore, we (insert other activities here).</p>
                <p className="text-lg font-para mt-2 max-w-5xl mx-auto">(insert teacher/advisor/adult name), we hope to bring our interactive, experiential STEM activities to ____ and further engage students with STEM and robotics. Through hands-on, discussion-based events, we would introduce students to the world of FIRST robotics while nurturing the skills necessary to thrive in STEM fields like communication and critical thinking. Please let me know if you are interested in such a collaboration with us as we would love to work with you to craft events best suitable for your students. I look forward to hearing from you and do not hesitate to ask any questions!</p>
                <p className="text-lg font-para mt-2 max-w-5xl mx-auto">Thanks,<br/>_____</p>
              </div>
            </div>

            <div className="justify-center" style={{maxHeight:"50em", overflow:"scroll"}}>
              <div className="mt-2"/>
              <h3 className="text-lg text-center font-bold font-heading">Blog</h3>
              <div className="mt-2"/>
              <p className="text-center text-lg font-para mt-2 max-w-5xl mx-auto">Hi everyone! Welcome to Valence Robotics’s First Lego League Guide, otherwise known as the FLL Guide for short. Today, we will be diving deeper into what this FLL Guide is, why we started it, and a brief summary on the FLL team we started for students with visual disabilities! But before we begin, let’s give you a brief introduction to our team: 8429 Valence Robotics. We are a community team entering our fourth year located in Durham, North Carolina, but more specifically–we work directly in Duke’s Makerspace–The Foundry. Our FLL guide was brought to fruition after speaking to a FIRST alum at one of our local competitions. Inspired by her work in creating FIRST teams for her area, we realized the future of STEAM starts directly from Mentors. As a team that started our own FLL team for people with disabilities, we hope to be Mentors that can motivate other teams to create more FLL programs, specifically for people with disabilities, in their community to grow the web of accessible STEAM programs for all. However, this isn’t an easy task, so that’s why we are here to help by providing an insight into our experience of starting our FLL team–Team ​​65893 The RoboCoders, the techniques we used to promote accessibility, and the advice we wish we had when navigating this process.</p>
              <p className="text-center text-lg font-para mt-2 max-w-5xl mx-auto">The origins of The RoboCoders are in Raleigh’s Governor Morehead School of the Blind. We were able to connect with them through one of our mechanical lead’s–Prithu Kolar. His affiliation with them was sparked through his volunteering at the school which used his passion for mechanical engineering to develop a refreshable braille machine that would aid students in their learning at an affordable cost. Prithu’s work aligned with Valence’s already established initiative called “The Blue Ribbon Initiative.” This initiative is an awareness, education, and advocacy campaign that brings attention to the obstacles faced by people with disabilities in STEAM fields and activities. Brought with this perfect opportunity, Prithu offered to connect us to The Governor Morehead School of the Blind. In order to introduce our team to the students there, we hosted a touch-based STEAM activity with a 3D printed miniature replica of our 2024 robot. After working and getting more comfortable with these students, we were able to create a FLL team with these amazing students that were willing to step out of their comfort zone for a new and fun passion! So far, we’ve given a short summary of how we were able to get started with The RoboCoders. But we believe this is only the start to a new beginning as we will provide you with advice on how you can contribute to creating more accessible FLL programs.</p>
              <p className="text-center text-lg font-para mt-2 max-w-5xl mx-auto">To jumpstart your team’s journey towards making FIRST more accessible for all students, you’ll need to begin by finding a community to develop your team within. This could be a group of students who are inspired to be a part of FIRST, a specific school, or even, an already established team that is looking to become more accessible. In our case, Valence already had a connection with the Governor Morehead School for the Blind through one of our students and the volunteering he had done with the school previously. By using our student’s already established relationship as a jumping off point, we were able to build team-wide relationships with the students. Using your team’s connections whether it be through volunteering, siblings, etc is a great first step to establishing a team but if you don’t have these connections, don’t fret. Reaching out to local schools, community centers, and even your state’s school for the blind through cold calling and emailing is a great way to spark a relationship. In doing so, you’re able to convey your passion for FIRST Robotics and the message FIRST stands for by pursuing accessibility. In our experience, many of the students we worked with had never been offered an opportunity to explore their passions in engineering. By taking the time to not only mentor them but hold conversations and build connections about their passions, we were able to provide these students with a platform to dive into their love for STEAM. In the upcoming chapters, we’ll go further into the techniques we used to support our students in their FLL journey. From FIRST Introduction sessions with tactile, 3D printed robots to build our student’s interest in FIRST to hands-off mentorship techniques to ensure students have confidence in their independent learning, we’ll explain the thought-process behind our work and the steps we took to maximize success in both our mentors and students!</p>
            </div>
          </div>
          <div className="mt-2"/>
          <h2 className="text-2xl text-center font-bold text-light-orange font-heading">Chapter 2</h2>
          <p className="text-center text-lg font-para mt-2 max-w-5xl mx-auto">Coming soon!</p>
          <div className="mt-2"/>
          <h2 className="text-2xl text-center font-bold text-light-orange font-heading">Chapter 3</h2>
          <p className="text-center text-lg font-para mt-2 max-w-5xl mx-auto">Coming soon!</p>
        </div>
      </div>
    </>
  );
}
