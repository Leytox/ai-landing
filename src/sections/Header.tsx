"use client";
import { Button, ButtonProps } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { Orbit } from "@/components/Orbit";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <header className={"border-b border-[var(--color-border)] relative z-40"}>
        <div className={"container"}>
          <div
            className={twMerge(
              "h-18 lg:h-20 flex items-center justify-between",
              isMobileNavOpen &&
                "fixed top-0 bg-gray-950 w-full justify-around",
            )}
          >
            <div className="flex gap-4 items-center">
              <Logo />
              <div className="font-extrabold text-2xl">sphereal.ai</div>
            </div>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <a
                    href={href}
                    key={href}
                    className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
                  >
                    {name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden gap-4 lg:flex">
              {loginItems.map(({ name, href, buttonVariant }) => (
                <Button key={href} variant={buttonVariant}>
                  {name}
                </Button>
              ))}
            </div>
            <div className="flex items-center lg:hidden">
              <Button
                className="size-10 rounded-lg"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2
                -translate-y-1/2"
                >
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1 duration-400 transition",
                      isMobileNavOpen && "translate-y-0 rotate-45",
                    )}
                  ></div>
                </div>
                <div className="absolute-center">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 duration-400 transition",
                      isMobileNavOpen && "translate-y-0 -rotate-45",
                    )}
                  ></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden">
          <div className="absolute-center isolate -z-10">
            <Orbit />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[300px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[500px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[650px]" />
          </div>
          <div className="absolute-center isolate -z-10">
            <Orbit className="size-[800px]" />
          </div>
          <div className="container h-full">
            <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
              {navItems.map(({ name, href }) => (
                <a
                  href={href}
                  key={href}
                  className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10"
                >
                  {name}
                </a>
              ))}
              {loginItems.map(({ name, href, buttonVariant }) => (
                <a href={href} key={name} className="w-full max-w-xs">
                  <Button block variant={buttonVariant}>
                    {name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
