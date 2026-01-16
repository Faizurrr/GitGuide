import React from "react";
// ===== Import Icons =====
import { ArrowRight, ArrowDown, CheckCircle2, Terminal, Github, Globe } from "lucide-react";

// ===== Import Images =====
// Ensure these paths match your project structure
import step1Image1 from "../assets/step1Img1.png";
import step1Image2 from "../assets/step1img2.png";
import step1Image3 from "../assets/step1Img3.png";
import step2Image1 from "../assets/step2Img1.png";
import step2Image2 from "../assets/step2Img2.png";
import step3Image1 from "../assets/step3Img1.png";

// ==================================================
// Image Card Component (Fixed Display Issues)
// ==================================================
const ImageCard = ({ src, index }) => (
  <div className="group relative">
    {/* Animated glow effect on hover */}
    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
        </div>
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Screenshot {index + 1}</span>
      </div>
      
      <div className="p-2 bg-[#121212]">
        <img
          src={src}
          alt={`Step visual ${index + 1}`}
          className="w-full lg:w-72 h-auto max-h-64 object-contain rounded-md transform transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  </div>
);

// ==================================================
// Step Layout Component
// ==================================================
const StepSection = ({ number, title, description, images, icon: Icon }) => {
  return (
    <div className="relative pb-24 last:pb-0">
      {/* Vertical Connection Line */}
      <div className="absolute left-[20px] top-12 bottom-0 w-[2px] bg-neutral-800">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-400/30 to-transparent"></div>
      </div>

      <div className="flex gap-8">
        {/* Step Indicator */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center shadow-xl group">
            <span className="text-green-400 font-mono font-bold">{number}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 pt-1">
          <div className="flex items-center gap-3 mb-4">
            {Icon && <Icon className="text-neutral-500" size={20} />}
            <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
          </div>
          
          <p className="text-neutral-400 text-base leading-relaxed max-w-3xl mb-8">
            {description}
          </p>

          {/* Image Row */}
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-6">
            {images.map((img, idx) => (
              <React.Fragment key={idx}>
                <ImageCard src={img} index={idx} />
                {idx !== images.length - 1 && (
                  <ArrowRight className="text-neutral-700 hidden lg:block animate-pulse" size={20} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================================================
// Main Page Component
// ==================================================
export default function PushToGithub() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-green-500/30 font-sans">
      {/* Abstract Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-green-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        {/* Header */}
        <header className="max-w-3xl mb-24">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
            <span className="px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">Tutorial</span>
            <span className="text-neutral-600">/</span>
            <span>Git & GitHub</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 tracking-tighter">
            Push your code <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              to the cloud.
            </span>
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
            Follow this visual guide to sync your local development environment with your GitHub account.
          </p>
        </header>

        {/* Timeline */}
        <div className="max-w-5xl">
          <StepSection
            number="01"
            icon={Github}
            title="Create a GitHub Repository"
            description="Log into your GitHub dashboard and click 'New'. Name your repository clearly, set it to Public or Private, and leave the 'Initialize' options unchecked. This creates a blank canvas for your local code."
            images={[step1Image1, step1Image2, step1Image3]}
          />

          <StepSection
            number="02"
            icon={Terminal}
            title="Locate Project Terminal"
            description="Open your terminal or VS Code integrated terminal. Use the change directory command to enter your project folder. Ensure you are at the root level where your main project files are located."
            images={[step2Image1, step2Image2]}
          />

          <StepSection
            number="03"
            icon={Globe}
            title="Initialize and Verify"
            description="Enter 'git init' to begin tracking. This establishes the local environment necessary to communicate with GitHub's servers. You'll see a hidden folder appear in your project structure."
            images={[step3Image1]}
          />
        </div>

        {/* Completion Card */}
        <div className="mt-32 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative p-12 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-xl text-center">
            <div className="w-20 h-20 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-green-400" size={40} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Push</h3>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              You've successfully prepared your local project. Now you're ready to add, commit, and push!
            </p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-green-400 transition-colors duration-300">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}