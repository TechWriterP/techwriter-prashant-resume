import { CheckCircle2 } from "lucide-react";

const VALUE_PROPS = [
  "Documentation strategy and capacity planning",
  "Enterprise product documentation leadership",
  "API and technical developer documentation",
  "Structured authoring and DITA expertise",
  "Docs-as-code and modern publishing workflows",
  "Cross-functional collaboration and Agile execution"
];

export function ValuePropositionSection() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why Teams Hire Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50"
            >
              <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <p className="font-medium text-slate-200 text-lg leading-snug">
                {prop}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
