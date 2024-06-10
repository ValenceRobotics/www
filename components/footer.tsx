"use client";
import Logo from "../assets/logo_black.png";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-footer mt-24 pt-16 pb-8 px-4 md:px-16 dark:bg-light-orange text-slate-900">
      <div className="flex flex-wrap justify-evenly gap-y-12 gap-x-6">
        <img
          className="w-24 h-24 lg:w-32 lg:h-32 justify-self-center"
          src="/logo_black.png"
          alt="Valence Robotics Logo"
        />

        <div className="flex flex-wrap justify-evenly gap-x-6 md:gap-x-24">
          <div>
            <h1 className="font-bold text-xl mb-2 font-heading">Navigate</h1>

            <Link
              href="/"
              className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para"
            >
              Home
            </Link>
            <br />
            <Link
              href="about"
              className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para"
            >
              About Us
            </Link>
            <br />
          </div>
          <div>
            <h1 className="font-bold text-xl mb-2 font-heading">
              Get Involved
            </h1>

            <Link
              className="text-base font-para font-normal text-gray-800 hover:text-black hover:underline"
              href="https://forms.gle/xLUby8H11ygVrqY88"
            >
              Join the Team
            </Link>
            <br />
            <Link
              href="sponsor"
              className="text-base font-para font-normal text-gray-800 hover:text-black hover:underline"
            >
              Sponsor Us
            </Link>
            <br />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl mb-2 font-heading">Socials</h1>
          <Link
            href="https://www.instagram.com/valence_robotics/"
            className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para"
          >
            Instagram
          </Link>
          <br />
          <Link
            href="https://www.facebook.com/Team8429/"
            className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para"
          >
            Facebook
          </Link>
          <br />
          <Link
            href="https://www.linkedin.com/company/frc-team-8429-valence-robotics/"
            className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para"
          >
            LinkedIn
          </Link>
          <br />
          <Link
            href="https://www.youtube.com/channel/UCHZhouxknFw9WPkhLWJGMmQ"
            className="text-base font-normal text-gray-800 hover:text-black hover:underline font-para"
          >
            Youtube
          </Link>
          <br />
        </div>
      </div>

      <div className="mt-16 mx-16 lg:mx-32 h-1 bg-slate-900 opacity-40" />
      <p className="mt-4 text-center text-grey-text opacity-87 font-para dark:text-slate-900">
        &copy; 2021 Valence Robotics | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
