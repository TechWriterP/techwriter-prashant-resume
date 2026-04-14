import { SectionHeading } from "../ui/SectionHeading";

const TOOL_CATEGORIES = [
  {
    title: "Authoring & Publishing",
    tools: [
      "Oxygen XML Editor", "SDL Tridion", "Fluid Topics", "GitBook", 
      "MkDocs", "Hugo", "Adobe FrameMaker", "PTC Arbortext Editor", 
      "RoboHelp", "MadCap Flare"
    ]
  },
  {
    title: "Standards & Tech",
    tools: [
      "DITA", "DITA XML", "Markdown", "HTML", "CSS", "YAML", 
      "AWS", "Azure", "CI/CD", "DevOps", "ITIL"
    ]
  },
  {
    title: "Collaboration & Source",
    tools: [
      "Jira", "Confluence", "Bitbucket", "Git", "VS Code", 
      "SharePoint", "Google Workspace", "Microsoft 365"
    ]
  },
  {
    title: "API & Additional",
    tools: [
      "Swagger", "Postman", "Power BI", "MS Project", "MS Visio", 
      "Python", "VBA", "Power Automate", "UiPath", "Salesforce"
    ]
  }
];

export function ToolsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading 
          title="Tools & Technologies" 
          subtitle="Software and platforms I use to architect, author, and deliver content."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOL_CATEGORIES.map((category) => (
            <div key={category.title} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-5">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-white text-slate-700 border border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
