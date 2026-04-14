import { GraduationCap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <SectionHeading title="Education" />
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm shrink-0 self-start sm:self-auto">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Post-Graduate Diploma in Project Management</h3>
              <p className="text-slate-600 font-medium mt-1">Symbiosis University, Pune</p>
              <span className="inline-block mt-2 px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-semibold rounded uppercase tracking-wider">
                Pursuing
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm shrink-0 self-start sm:self-auto">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Aircraft Maintenance Engineering – Avionics</h3>
              <p className="text-slate-600 font-medium mt-1">VSM Aerospace, Bangalore</p>
              <p className="text-sm text-slate-500 mt-2">Passed DGCA Paper 1 and Paper 2 license examinations (2009)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
