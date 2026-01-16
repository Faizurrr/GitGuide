
// ===== Import Icons =====
import { 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  GitBranch, 
  FileCode, 
  Users, 
  Zap, 
  Lock,
  Search,
  Check,
    AlertOctagon
} from "lucide-react";

// ==================================================
// Practice Card Component
// ==================================================
const PracticeCard = ({ icon: Icon, title, description, badge, list }) => (
  <div className="group relative p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={80} />
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400">
          <Icon size={20} />
        </div>
        <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{badge}</span>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      <ul className="space-y-3">
        {list.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
            <Check size={14} className="text-green-400 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function BestPractices() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-green-500/30 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="max-w-3xl mb-24">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
            <ShieldCheck size={18} />
            <span>Professional Standards</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Git <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">Best Practices.</span>
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
            Writing code is only half the job. Following these workflows ensures your project stays organized, secure, and ready for collaboration.
          </p>
        </header>

        {/* Practice Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          <PracticeCard 
            badge="Commits"
            icon={MessageSquare}
            title="Meaningful Commit Messages"
            description="A commit message is a note to your future self. It should explain 'Why' you changed something, not just 'What'."
            list={[
              "Use the imperative mood (e.g., 'Fix bug' instead of 'Fixed bug')",
              "Keep the subject line under 50 characters",
              "Use a prefix like 'Feat:', 'Fix:', or 'Docs:'"
            ]}
          />

          <PracticeCard 
            badge="Security"
            icon={Lock}
            title="The .gitignore Secret"
            description="Never push sensitive data to GitHub. Once it is pushed, it is visible to the world forever."
            list={[
              "Add 'node_modules' to ignore heavy files",
              "Keep .env files (API keys) private",
              "Use .gitignore templates for your specific language"
            ]}
          />

          <PracticeCard 
            badge="Workflow"
            icon={GitBranch}
            title="Branch Per Feature"
            description="The main branch should always be stable. Never work directly on 'main' if you are testing new ideas."
            list={[
              "Create a branch for every new bug fix",
              "Merge only after your code passes local tests",
              "Delete branches after they are successfully merged"
            ]}
          />

          <PracticeCard 
            badge="Collaboration"
            icon={Users}
            title="The PR Culture"
            description="Pull Requests (PRs) are the backbone of team communication. They allow for quality control."
            list={[
              "Write a clear description for your PR",
              "Request reviews from teammates",
              "Use PRs even for solo projects to keep a history"
            ]}
          />

        </div>

        {/* Advanced Bonus Section */}
        <div className="relative p-12 rounded-[2.5rem] bg-neutral-900/50 border border-white/5 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 mb-6">
                <Zap size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Atomic Commits</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                An <strong>Atomic Commit</strong> means your commit does exactly one thing. If you fixed a typo AND added a login feature, those should be two separate commits. 
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-green-500/20 text-sm">
                   <CheckCircle2 className="text-green-400 mb-2" size={16} />
                   <p className="text-neutral-300 italic font-mono">"Fix: Update header spacing"</p>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-red-500/20 text-sm">
                   <AlertOctagon className="text-red-400 mb-2" size={16} />
                   <p className="text-neutral-300 italic font-mono">"Fixed stuff and added logo"</p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-80 aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <FileCode size={48} className="text-neutral-500 mx-auto mb-4" />
                <span className="text-xs font-mono text-neutral-600 uppercase">Clean Code Standard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Tip */}
        <div className="mt-24 text-center">
          <p className="text-neutral-500 flex items-center justify-center gap-2">
            <Search size={16} /> 
            Pro Tip: Before you push, always run <code className="text-white bg-white/5 px-2 py-1 rounded">git status</code> to double-check your changes.
          </p>
        </div>

      </div>
    </div>
  );
}