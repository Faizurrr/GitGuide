import React from "react";
import { 
  Settings, 
  Globe, 
  ExternalLink, 
  ChevronRight, 
  MousePointer2, 
  Rocket,
  CheckCircle2
} from "lucide-react";

// Reuse your ImageCard component or a simplified version for steps
const StepCard = ({ number, title, description, badge }) => (
  <div className="flex gap-6 mb-12 last:mb-0">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-bold">
        {number}
      </div>
      <div className="w-[2px] h-full bg-neutral-800 mt-2"></div>
    </div>
    <div className="pb-8">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {badge && (
          <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-neutral-400 uppercase tracking-tighter">
            {badge}
          </span>
        )}
      </div>
      <p className="text-neutral-400 leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  </div>
);

export default function GitHubPagesGuide() {
  return (
    <div className="min-h-screen bg-[#050505] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-2 text-green-400 mb-4 font-mono text-sm">
            <Globe size={16} />
            <span>LIVE HOSTING</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Launch to GitHub Pages
          </h2>
          <p className="text-neutral-500 text-lg">
            Follow these steps to turn your code into a live website with a custom <code className="text-green-400 text-sm">github.io</code> URL.
          </p>
        </header>

        {/* Steps Container */}
        <div className="bg-neutral-900/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          
          <StepCard 
            number="1"
            title="Navigate to Repository Settings"
            description="Open your repository on GitHub. Look at the top navigation bar and click on the 'Settings' gear icon located on the far right."
            badge="Navigation"
          />

          <StepCard 
            number="2"
            title="Access the Pages Tab"
            description="In the left-hand sidebar menu, find the 'Code and automation' section and click on 'Pages'."
            badge="Configuration"
          />

          <StepCard 
            number="3"
            title="Build and Deployment"
            description="Under 'Branch', click the dropdown that says 'None' and select your main branch (usually 'main' or 'master'). Keep the folder as '/(root)' and click Save."
            badge="Action Required"
          />

          <StepCard 
            number="4"
            title="Wait for the Green Light"
            description="GitHub will now start building your site. Refresh the page after 1–2 minutes. You will see a bar at the top saying: 'Your site is live at...'"
            badge="The Result"
          />

          {/* Live Link Visualizer */}
          <div className="mt-8 p-6 rounded-2xl bg-green-500/5 border border-green-500/20 group hover:border-green-500/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <Rocket className="text-green-400" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-1">Success! Find your URL here:</h4>
                <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg border border-white/5 mt-3">
                  <Globe size={14} className="text-neutral-500" />
                  <span className="text-green-400 text-sm font-mono truncate">
                    https://username.github.io/your-repo-name/
                  </span>
                  <ExternalLink size={14} className="text-neutral-500 ml-auto" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Pro Tip */}
        <div className="mt-12 flex items-center gap-4 p-6 rounded-2xl bg-neutral-900 border border-white/5">
          <div className="text-yellow-500">
            <MousePointer2 size={20} />
          </div>
          <p className="text-sm text-neutral-400">
            <strong className="text-white">Pro Tip:</strong> Ensure your main file is named <code className="bg-white/10 px-1 rounded text-white">index.html</code> at the root level, otherwise GitHub won't know what to display!
          </p>
        </div>

      </div>
    </div>
  );
}