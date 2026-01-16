
// ===== Import Icons =====
import { 
  AlertOctagon, 
  RotateCcw, 
  Search, 
  ShieldAlert, 
  Terminal, 
  Zap, 
  Bomb, 
  LifeBuoy, 
  History,
  Trash2
} from "lucide-react";

// ==================================================
// Error Card Component
// ==================================================
const ErrorSolution = ({ errorTitle, scenario, solution, command, icon: Icon, colorClass }) => (
  <div className="relative group p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-red-500/20 transition-all duration-500">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${colorClass}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{errorTitle}</h3>
    <p className="text-sm text-red-400 font-mono mb-4 uppercase tracking-tighter">Scenario: {scenario}</p>
    <p className="text-neutral-400 mb-6 leading-relaxed">{solution}</p>
    
    <div className="bg-black/60 rounded-xl p-4 border border-white/5 group-hover:border-white/10 transition-colors">
      <code className="text-green-400 font-mono text-sm block">
        <span className="text-neutral-600 mr-2">$</span>
        {command}
      </code>
    </div>
  </div>
);

export default function GitError() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-red-500/30 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldAlert size={14} /> Panic Room
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Git <span className="text-red-500">First Aid</span> Kit
          </h1>
          <p className="text-neutral-500 text-xl max-w-2xl mx-auto">
            Made a mistake? Don't delete your project. 
            Git is a time machine—you can almost always go back.
          </p>
        </header>

        {/* 1. Common Disasters Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <ErrorSolution 
            icon={RotateCcw}
            errorTitle="Forgot a File"
            scenario="You just committed but forgot to add one tiny file."
            solution="Don't create a new commit. Use 'amend' to add the missing file to the previous commit."
            command="git add . && git commit --amend --no-edit"
            colorClass="bg-blue-500/10 text-blue-400"
          />
          <ErrorSolution 
            icon={Trash2}
            errorTitle="Undo Local Changes"
            scenario="You messed up your code and want to go back to the last save."
            solution="This will discard all uncommitted changes in your current directory and restore files to the last commit."
            command="git checkout . "
            colorClass="bg-orange-500/10 text-orange-400"
          />
          <ErrorSolution 
            icon={Bomb}
            errorTitle="Merge Conflict"
            scenario="Two people changed the same line. Git is confused."
            solution="Open the file, look for the '<<<<' markers, choose the correct code, then add and commit."
            command="git status # to see conflict files"
            colorClass="bg-red-500/10 text-red-400"
          />
        </div>

        {/* 2. THE ULTIMATE EMERGENCY RECOVERY */}
        <div className="bg-neutral-900/20 border border-white/5 rounded-3xl p-8 md:p-16 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <LifeBuoy size={300} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">The "Nuclear" Option</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Sometimes you get so lost in branches and merges that you just want to 
              <strong> force your local computer</strong> to match exactly what is on GitHub. 
              Be careful: this deletes everything locally that isn't on the server.
            </p>

            <div className="space-y-4">
              <div className="p-6 bg-black/40 rounded-2xl border border-red-500/20">
                <p className="text-red-400 font-mono text-sm mb-4"># DANGER: This will overwrite your local work!</p>
                <div className="space-y-2">
                  <code className="block text-emerald-400">git fetch origin</code>
                  <code className="block text-emerald-400">git reset --hard origin/main</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. UNDERSTANDING DETACHED HEAD */}
        <div className="flex flex-col lg:flex-row gap-12 items-center py-12">
          <div className="lg:w-1/2">
             <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
                <AlertOctagon size={28} />
             </div>
             <h2 className="text-3xl font-bold text-white mb-6">"Detached HEAD" State</h2>
             <p className="text-neutral-400 leading-relaxed mb-6">
                This sounds scary, but it just means you are looking at a specific commit instead of a branch. 
                You are in "Read-Only" mode. To fix it, just switch back to your main branch.
             </p>
             <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-yellow-500 font-mono">
                git checkout main
             </div>
          </div>
          <div className="lg:w-1/2 w-full">
            
          </div>
        </div>

        {/* 4. THE MAGIC OF REFLOG */}
        <div className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
           <div className="bg-neutral-950 rounded-[22px] p-10 md:p-16 text-center">
              <History className="text-purple-400 mx-auto mb-6" size={48} />
              <h2 className="text-4xl font-black text-white mb-4">I deleted my branch!</h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">
                If you deleted a branch before pushing it, don't worry. Git keeps a secret log 
                of every move you've ever made for the last 30 days.
              </p>
              <div className="flex flex-col items-center gap-4">
                <code className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-purple-300 font-mono">
                  git reflog
                </code>
                <p className="text-xs text-neutral-600 uppercase tracking-widest">Find your lost commit ID, then 'git checkout' to it.</p>
              </div>
           </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 text-center">
          <p className="text-neutral-500">
            Still stuck? Most errors are solved by <span className="text-white">git status</span>. 
            It's the most helpful command in the world.
          </p>
        </footer>
      </div>
    </div>
  );
}