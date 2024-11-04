"use client";
import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { Logo } from "@/components/Logo";
import Image from "next/image";
import { useEffect, useState } from "react";

export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl md:text-5xl text-center md:text-left font-semibold text-gray-200">
                  Your AI-powered collaboration companion
                </h2>
                <ul className="mt-12 gap-8 flex flex-col">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex gap-2 items-center text-gray-300 w-full"
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        width={24}
                        className="text-violet-400"
                      />
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16">Try it now</Button>
              </div>
              <div className="flex justify-center">
                <div className="size-[270px] md:size-[450px] relative inline-flex items-center justify-center">
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transition: "transform 0.045s linear",
                    }}
                  >
                    <Orbit className="size-full md:size-[250px] lg:size-full absolute-center" />
                  </div>
                  <div className="absolute-center">
                    <Orbit className="size-[180px] lg:size-[300px]" />
                  </div>
                  <div className="absolute-center">
                    <Logo className="size-24 lg:size-32" />
                  </div>
                  {logos.map((logo) => (
                    <div
                      key={logo.rotate}
                      className="absolute inset-0"
                      style={{
                        transform: `rotate(${logo.rotate + rotation}deg)`,
                        transition: "transform 0.045s linear",
                      }}
                    >
                      <div className="outline outline-1 outline-gray-200/30 inline-flex size-10 md:size-14 justify-center items-center border border-[var(--color-border)] rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          className="size-6 md:size-9"
                          style={{
                            transform: `rotate(-${logo.rotate + rotation}deg)`,
                            transition: "transform 0.045s linear",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Features;
