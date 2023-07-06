"use client";
import Link from "next/link";

interface ButtonProps {
  text: string;
  to: string;
  dark: boolean;
}
function Button(props: ButtonProps) {
  if (!props.dark)
    return (
      <Link href={props.to}>
        <button className="rounded-full bg-light-orange py-2 px-10 text-white drop-shadow-lg hover:bg-dark-orange font-bold duration-300 text-lg font-para dark:bg-button-orange">
          {props.text}
        </button>
      </Link>
    );
  else {
    return (
      <Link href={props.to}>
        <button className="rounded-full bg-dark-orange py-2 px-10 text-white drop-shadow-lg hover:bg-darker-orange duration-300 font-bold text-lg font-para dark:bg-button-orange">
          {props.text}
        </button>
      </Link>
    );
  }
  // return (
  //   <Link href={props.to} isExternal>

  //   </Link>
}

export default Button;
