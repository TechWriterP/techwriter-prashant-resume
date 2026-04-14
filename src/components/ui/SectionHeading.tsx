import { cn } from "./Button";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-blue-600 rounded-full mt-6 opacity-80" />
    </div>
  );
}
