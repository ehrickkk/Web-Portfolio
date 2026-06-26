import type { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeading({ label, title, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-heading md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}
