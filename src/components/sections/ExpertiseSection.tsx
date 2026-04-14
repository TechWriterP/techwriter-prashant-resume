import { SectionHeading } from "../ui/SectionHeading";

const EXPERTISE_CATEGORIES = [
  {
    title: "Strategy & Architecture",
    items: ["Documentation Strategy", "Information Architecture", "Agile Collaboration", "Scrum", "Stakeholder Management"]
  },
  {
    title: "Content Types",
    items: ["Product Documentation", "API Documentation", "Developer Publications", "Release Notes", "Admin & User Guides"]
  },
  {
    title: "Ecosystems",
    items: ["Docs-as-Code", "DITA / DITA XML", "Structured Authoring", "CMS / CCMS Management"]
  }
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading title="Core Expertise" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERTISE_CATEGORIES.map((category) => (
            <div key={category.title} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 mr-3"></span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
