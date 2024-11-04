"use client";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import underlineImage from "@/assets/images/underline.svg?url";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { useMousePosition } from "@/hooks/useMousePosition";
import { motion, useSpring, useTransform } from "framer-motion";
export const CallToAction = () => {
  const { xProgress, yProgress } = useMousePosition();

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0, 1], ["-25%", "25%"]);
  const translateLargeY = useTransform(springY, [0, 1], ["-25%", "25%"]);
  const translateMediumX = useTransform(springX, [0, 1], ["-50%", "50%"]);
  const translateMediumY = useTransform(springY, [0, 1], ["-50%", "50%"]);
  const translateSmallX = useTransform(springX, [0, 1], ["-75%", "75%"]);
  const translateSmallY = useTransform(springY, [0, 1], ["-75%", "75%"]);

  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10" />
            <div className="absolute inset-0 -z-10">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[600px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}
              >
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-y-[200px] -translate-x-[200px] rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}
              >
                <Planet
                  size="lg"
                  color="teal"
                  className="translate-y-[100px] translate-x-[200px] -rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY,
                }}
              >
                <Planet
                  size="md"
                  color="fuchsia"
                  className="-translate-y-[100px] -translate-x-[100px] rotate-90"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY,
                }}
              >
                <Planet
                  size="sm"
                  color="violet"
                  className="-translate-y-[200px] translate-x-[200px] rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateSmallX,
                  y: translateSmallY,
                }}
              >
                <Planet
                  size="sm"
                  color="teal"
                  className="-translate-y-[150px] -translate-x-[240px] rotate-45"
                />
              </motion.div>
            </div>
            <div className="absolute-center -z-10">
              <motion.div
                style={{
                  x: translateMediumX,
                  y: translateMediumY,
                }}
              >
                <Planet
                  size="md"
                  color="fuchsia"
                  className="-translate-y-[50px] translate-x-[350px] rotate-45"
                />
              </motion.div>
            </div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl text-center leading-tight">
              Join the AI Revolution with{" "}
              <span className="relative isolate">
                <span>Sphereal</span>
                <span
                  className="absolute top-full left-0 w-full h-4 -translate-y-2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "top",
                  }}
                ></span>
              </span>
            </h2>
            <p className="text-center text-xl mt-8">
              Expirience the transformative power of AI with Sphereal. Boost
              your productivity, streamline your operations, and unlock new
              opportunities with our AI-powered solutions.
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
