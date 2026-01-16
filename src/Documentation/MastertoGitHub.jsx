
import { 
  ShieldCheck, 
  GitFork, 
  Terminal, 
  Activity, 
  Globe, 
  Cpu, 
  Workflow, 
  LifeBuoy,
  FileSearch,
  BookOpen
} from "lucide-react";

// ==================================================
// Deep Dive Content Card
// ==================================================
const KnowledgeBlock = ({ title, icon: Icon, children, color }) => (
  <div className="p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-green-500/20 transition-all group">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-2xl ${color}`}>
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="text-neutral-400 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export default function MastertoGitHub() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-green-500/40">
      
      {/* 1. THE BIG PICTURE: THE THREE TREES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <header className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Deep Dive into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              The Git Core.
            </span>
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed">
            To master GitHub, you must understand the "Three Trees" of Git architecture. 
            This is how Git tracks your files before they ever reach the cloud.
          </p>
        </header>

        

        <div className="grid lg:grid-cols-3 gap-8">
          <KnowledgeBlock title="Working Directory" icon={Cpu} color="bg-blue-500/10 text-blue-400">
            <p>This is where your actual files live on your hard drive. Git watches these files but hasn't "saved" them yet. They are <strong>untracked</strong> or <strong>modified</strong>.</p>
          </KnowledgeBlock>
          <KnowledgeBlock title="The Staging Area" icon={Activity} color="bg-yellow-500/10 text-yellow-400">
            <p>Think of this as the "Loading Dock." When you run <code>git add</code>, you are moving files here to prepare them for the ship. You can choose exactly which lines of code to send.</p>
          </KnowledgeBlock>
          <KnowledgeBlock title="The .git Directory" icon={ShieldCheck} color="bg-green-500/10 text-green-400">
            <p>Once you <code>git commit</code>, the snapshot is stored here permanently. This is the "Vault." Even if you delete your files in the working directory, they are safe here.</p>
          </KnowledgeBlock>
        </div>
      </section>

      {/* 2. THE COLLABORATION PROTOCOL (FORKING & PRs) */}
      <section className="bg-neutral-900/20 border-y border-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <GitFork className="text-purple-400" /> The Fork-Pull Workflow
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-bold mb-2">Step 1: The Fork</h4>
                  <p className="text-neutral-400">You find a famous project (like React). You click "Fork" to create a personal <strong>Clone</strong> of that project under your own GitHub account.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Step 2: The Feature Branch</h4>
                  <p className="text-neutral-400">You create a branch in your fork. You never work on the 'main' branch of a fork to keep it clean for syncing.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Step 3: The Pull Request (PR)</h4>
                  <p className="text-neutral-400">This is the most important part of GitHub. You send a "Request" to the original owner to "Pull" your code into their project. It starts a conversation and a code review.</p>
                </div>
              </div>
            </div>
            <div className="bg-black/50 p-1 rounded-3xl border border-white/10 shadow-2xl">
              
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECOVERY: THE TIME MACHINE MASTERCLASS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">What if things break?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-red-500/5 border border-red-500/10 group hover:bg-red-500/10 transition-all">
            <LifeBuoy className="text-red-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">The "Reset" vs. "Revert"</h3>
            <p className="text-neutral-400 mb-6">
              <strong>Reset</strong> is for your private work—it deletes history. <br />
              <strong>Revert</strong> is for shared work—it creates a new commit that "undoes" the old one without erasing the past.
            </p>
            <code className="block bg-black p-4 rounded-xl text-red-400 font-mono text-sm">
              git revert [commit-hash]
            </code>
          </div>
          
          <div className="p-10 rounded-3xl bg-blue-500/5 border border-blue-500/10 group hover:bg-blue-500/10 transition-all">
            <FileSearch className="text-blue-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">The "Reflog" (The God Mode)</h3>
            <p className="text-neutral-400 mb-6">
              Deleted a branch by accident? Lost a commit? <code>git reflog</code> is the ultimate safety net. It tracks every single movement of the Git HEAD, allowing you to recover "deleted" data.
            </p>
            <code className="block bg-black p-4 rounded-xl text-blue-400 font-mono text-sm">
              git reflog
            </code>
          </div>
        </div>
      </section>

      {/* 4. GITHUB ACTIONS: AUTOMATION (THE FUTURE) */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6">
              <Workflow size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">CI/CD: GitHub Actions</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Mastering GitHub means mastering <strong>Automation</strong>. With Actions, you can tell GitHub: "Every time I push code, automatically run tests, check for bugs, and deploy to my server."
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Auto-test your code before merging.
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Deploy to Vercel/AWS automatically.
              </li>
              <li className="flex items-center gap-3 text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                Auto-assign issues to team members.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-neutral-900 border border-white/10 p-8 rounded-3xl">
             <h4 className="text-xs font-mono text-neutral-500 mb-4 uppercase">Workflow Configuration (.yml)</h4>
             <pre className="text-sm font-mono text-emerald-400 bg-black/50 p-6 rounded-xl overflow-x-auto">
{`on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Tests
        run: npm test`}
             </pre>
          </div>
        </div>
      </section>

      {/* 5. CONCLUSION: THE GLOBAL IMPACT */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <Globe className="mx-auto text-green-500 mb-8 animate-spin-slow" size={64} />
        <h2 className="text-5xl font-black text-white mb-6">The World Runs on GitHub.</h2>
        <p className="text-neutral-400 text-xl leading-relaxed">
          From the Mars Rover code to the smallest personal blog, GitHub is the infrastructure of human knowledge. 
          By learning these commands, you are learning the language of global innovation.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold">100M+ Repositories</div>
          <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold">4M+ Organizations</div>
          <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold">90% of Fortune 500</div>
        </div>
      </section>

    </div>
  );
}