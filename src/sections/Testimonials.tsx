"use client";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setProgress(0);
    }, 10000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <section id="testimonials">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <LayoutGroup>
              <motion.div
                layout
                className="border-gradient overflow-hidden rounded-3xl px-6 py-16 relative flex flex-col md:flex-row md:justify-between gap-12 md:gap-4"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="absolute size-16 text-violet-400 top-0  z-10"
                />
                <AnimatePresence mode="wait">
                  {testimonials.map(
                    (testimonial, index) =>
                      testimonialIndex === index && (
                        <motion.blockquote
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 25 }}
                          transition={{ duration: 0.5 }}
                          key={testimonial.name}
                          className="flex flex-col md:flex-row gap-12 relative"
                        >
                          <p className="text-xl md:max-w-sm lg:max-w-xl md:text-left font-medium">
                            {testimonial.quote}
                          </p>
                          <cite className="not-italic md:text-left">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="rounded-xl size-28"
                            />
                            <div className="font-bold mt-4">
                              {testimonial.name}
                            </div>
                            <div className="text-xs text-gray-400 mt-2">
                              {testimonial.title}
                            </div>
                          </cite>
                        </motion.blockquote>
                      ),
                  )}
                </AnimatePresence>
                <div className="flex md:flex-col gap-2 justify-center">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className="size-6 relative isolate inline-flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        setTestimonialIndex(index);
                        setProgress(0);
                      }}
                    >
                      {testimonialIndex === index && (
                        <motion.div
                          className="absolute border-gradient size-full rounded-full -z-10"
                          layoutId="testimonial-dot"
                        />
                      )}
                      <div className="size-1.5 bg-gray-200 rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gray-950"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
