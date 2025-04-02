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
        </div>
      </div>
    </>
  );
}
