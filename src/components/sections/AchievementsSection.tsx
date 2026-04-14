import { Trophy, TrendingUp, Users, Zap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const ACHIEVEMENTS = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    metric: "1,500+",
    label: "Employees Trained",
    description: "Trained across organizations in MS Excel, Advanced Excel, and VBA automation."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    metric: "4.6/5",
    label: "Training Feedback",
    description: "Maintained exceptional feedback scores demonstrating effective knowledge transfer."
  },
  {
    icon: <Trophy className="w-8 h-8 text-blue-600" />,
    metric: "Top Performer",
    label: "Awards and Recognition",
    description: "Multi-time recipient of 'Star of the Month' and 'Employee of the Year' (2018–19)."
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    metric: "Automation",
    label: "Process Optimization",
    description: "Spearheaded automation initiatives leading to the formation of a Common Automation Group."
  }
];

export function AchievementsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading title="Selected Achievements" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm mb-6 inline-flex">
                {item.icon}
              </div>
              <div className="text-3xl font-extrabold text-slate-900 mb-2">
                {item.metric}
              </div>
              <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                {item.label}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
