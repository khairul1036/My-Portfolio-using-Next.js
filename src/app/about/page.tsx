/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import SplashCursor from "@/components/ui/SplashCursor";
import BoxReveal from "@/components/ui/box-reveal";
import Khairul from "../../../public/khairul.jpg";
import ShinyButton from "@/components/ui/shiny-button";
import Image from "next/image";

function About() {
  return (
    <>
      {/* <SplashCursor /> */}
      <title>Khairul Islam | About</title>
      <div className="mx-auto max-w-7xl px-4 lg:py-20">
        <div className="relative flex flex-col-reverse rounded-xl py-16 my-20 pt-20 lg:dark:bg-slate-900 lg:bg-slate-100 lg:pt-0 lg:flex-col lg:pb-0">
          <BackgroundBeams />
          <div className="inset-y-0 top-0 right-0 z-0 w-full  rounded-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full z-10 dark:text-slate-900 text-slate-100 transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <Image
              width={500}
              height={500}
              className="object-cover z-50 overflow-hidden w-full h-56 rounded-xl shadow-lg lg:shadow-none md:h-96 lg:h-full"
              placeholder="blur"
              src={Khairul}
              alt="Khairul Islam Image"
            />
          </div>

          <div className="relative flex flex-col items-start w-full z-10  mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 z-10">
              <BoxReveal boxColor={"#6366f1"} duration={0.5}>
                <p className="text-[2rem] font-semibold rounded-lg">
                  About Me<span className="text-[#6366f1]">.</span>
                </p>
              </BoxReveal>
              <p className="pr-5 mb-5 text-base font-bold dark:text-gray-200 text-slate-900 md:text-lg">
                Hi, I'm{" "}
                <span className="text-xl font-bold md:text-2xl text-indigo-500">
                  Khairul Islam
                </span>
                , a passionate Web Application Developer based in Dhaka,
                Bangladesh. I’ve been dedicated to building modern, scalable web
                applications and continuously expanding my knowledge in both
                front-end and back-end technologies.
                <br />
                <br />
                I’m currently pursuing a{" "}
                <span className="text-indigo-500">
                  Bachelor of Science in CSE
                </span>{" "}
                at{" "}
                <span className="text-indigo-500">
                  Daffodil International University
                </span>
                , with an graduation in 2025. I’ve maintained a strong academic
                performance, holding a{" "}
                <span className="text-indigo-500">
                  CGPA of 3.76 out of 4.00
                </span>
                . My studies have equipped me with in-depth knowledge of data
                structures, algorithms, software engineering, and full-stack web
                development.
                <br />
                <br />
                Professionally, I serve as an{" "}
                <span className="text-indigo-500">
                  Instructor at Qbit Learning (2023–Present)
                </span>
                , where I teach programming languages such as C, Python, and
                Java with a primary focus on C programming. I am also working as
                a{" "}
                <span className="text-indigo-500">
                  Part-Time Web Team Member at Empower NextGen (2024–Present)
                </span>
                , contributing to real-world web projects that strengthen my
                hands-on development experience.
                <br />
                <br />
                My technical stack includes{" "}
                <span className="text-indigo-500">
                  React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Redux,
                  TailwindCSS, ShadcnUI
                </span>
                , and more. I’m passionate about solving real-world problems
                with clean, scalable code and delivering high-quality digital
                solutions.
              </p>

              <div className="flex items-center z-10">
                <Link href="/contact">
                  <ShinyButton>Contact Me</ShinyButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
