import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionContent = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={twMerge("container py-24 md:py-36 overflow-hidden", className)}
      {...otherProps}
    />
  );
};
