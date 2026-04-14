import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <SectionHeading title="Professional Summary" />
        
        <div className="prose prose-lg prose-slate text-slate-700">
          <p className="mb-6 leading-relaxed">
            I am a senior documentation professional specializing in delivering high-quality user manuals, administrator guides, complex API documentation, structured content, and developer enablement materials. I work at the intersection of product, engineering, and the end-user, ensuring technical accuracy maps perfectly to intuitive usability.
          </p>
          <p className="mb-6 leading-relaxed">
            My expertise is anchored in documentation strategy, information architecture, and establishing docs-as-code and structured authoring environments. I have successfully driven documentation delivery across diverse domains, including SaaS, cloud infrastructure, fintech, aerospace, and industrial automation.
          </p>
          <p className="leading-relaxed">
            As an Agile documentation leader, I actively collaborate with cross-functional teams to align content releases with product lifecycles, often serving as a Scrum Master to streamline operations and elevate the strategic impact of the TechPub division.
          </p>
        </div>
      </div>
    </section>
  );
}
