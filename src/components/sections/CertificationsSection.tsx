import { Award } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const CERTIFICATIONS = [
  "PRINCE2 Practitioner",
  "Advanced Certified Scrum Master",
  "Certified Agile Project Manager (IAPM)",
  "Microsoft Office Specialist Excel Expert",
  "ITIL 4 Foundation",
  "Certified Scrum Product Owner",
  "Microsoft Excel and VBA Trainer",
  "Six Sigma Yellow Belt"
];

export function CertificationsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading title="Certifications" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div 
              key={cert} 
              className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-semibold text-slate-800 text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
