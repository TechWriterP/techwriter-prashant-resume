import { SectionHeading } from "../ui/SectionHeading";

const EXPERIENCES = [
  {
    company: "Hitachi Vantara",
    role: "Principal Technical Writer – Pentaho Data Catalog",
    period: "Oct 2022 – Present",
    domain: "Data Management & Analytics",
    achievements: [
      "Lead strategic documentation planning and delivery for the enterprise Pentaho Data Catalog.",
      "Own and execute the comprehensive release-aligned documentation lifecycle.",
      "Author diverse technical assets including user guides, administrator guides, release notes, and high-fidelity API documentation.",
      "Architect DITA-based content workflows utilizing Oxygen XML Editor, SDL Tridion, and Fluid Topics.",
      "Champion cross-functional collaboration with product owners, engineering, and global stakeholders.",
      "Serve as Scrum Master for the TechPub team, contributing to agile maturity and process optimization initiatives."
    ]
  },
  {
    company: "Zeta (Better World Tech)",
    role: "Staff Information Developer",
    period: "Oct 2021 – Sep 2022",
    domain: "Cloud-Native FinTech Platforms",
    achievements: [
      "Developed comprehensive documentation ecosystems for complex cloud-native financial technology products.",
      "Created rigorous end-user, system, and developer materials including API references, installation guides, runbooks, and cookbooks.",
      "Operated in a high-velocity docs-as-code environment using Jira, Confluence, Bitbucket, and Hugo.",
      "Directed the modernization, migration, and structural enrichment of legacy content."
    ]
  },
  {
    company: "L&T Technology Services",
    role: "Senior System Analyst / Documentation Architect / Off-shore Lead",
    period: "Jun 2011 – Oct 2021",
    domain: "Life Sciences, Industrial, & Wind Energy",
    achievements: [
      "Directed a $0.36M migration engagement for Johnson & Johnson, creating API references, SOPs, and developer guides.",
      "Managed an end-to-end documentation lifecycle and trained a team of 5 writers for Newport Corp OMS deployments.",
      "Designed documentation architecture mapping legacy PDFs to structured product information for Rockwell Automation.",
      "Authored highly-regulated heavy machinery operations manuals in XML/DITA for Vestas, Gamesa, and Suzlon."
    ]
  },
  {
    company: "Cades Studec India Technologies",
    role: "Technical Writer & Illustrator",
    period: "Jan 2010 – Mar 2011",
    domain: "Aerospace Engineering",
    achievements: [
      "Authored and synchronized sophisticated aircraft wiring and schematic manuals for A380, A330, and A340 programs.",
      "Integrated complex engineering lifecycle changes and customer-specific modifications into production manuals.",
      "Leveraged native AIRBUS authoring and illustration tools while ensuring strict adherence to aviation technical standards."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="Over 14 years of driving documentation excellence across technology enterprises."
        />
        
        <div className="space-y-12 max-w-4xl">
          {EXPERIENCES.map((job) => (
            <div key={job.company} className="relative pl-8 md:pl-0">
              {/* Timeline line for mobile / desktop layout */}
              <div className="hidden md:block absolute left-[220px] top-2 bottom-0 w-px bg-slate-200"></div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                {/* Timeline metadata */}
                <div className="md:w-[200px] shrink-0 pt-1">
                  <h4 className="text-lg font-bold text-slate-900">{job.company}</h4>
                  <div className="text-sm font-medium text-slate-500 mt-1 mb-2">{job.period}</div>
                  <div className="inline-block px-2.5 py-1 bg-white border border-slate-200 rounded text-xs font-semibold text-slate-600">
                    {job.domain}
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-[216px] top-2.5 h-2 w-2 rounded-full bg-blue-600 ring-4 ring-slate-50"></div>
                
                {/* Content */}
                <div className="flex-1 bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-t border-l border-slate-100 rotate-[-45deg] hidden md:block"></div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{job.role}</h3>
                  <ul className="space-y-3">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700">
                        <span className="text-blue-500 mr-2 shrink-0 mt-1">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
