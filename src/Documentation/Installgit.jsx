import React from "react";

export default function InstallGit() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Title */}
             <header className="max-w-3xl mb-24">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
            <span className="px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">Tutorial</span>
            <span className="text-neutral-600">/</span>
            <span>Git & GitHub</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tighter">
            How to Install  <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                 Git
            </span>
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
                       Git is a version control system that helps you track changes in your code.
          Follow the steps below to install Git on your operating system.
          </p>
        </header>

        {/* Windows */}
        
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">🪟 Install Git on Windows</h2>
          <ol className="list-decimal list-inside space-y-2 text-neutral-300">
          <li>
  Visit the official Git website:{" "}
  <a
    href="https://git-scm.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white underline"
  >
    git-scm.com
  </a>
</li>

            <li>Download Git for Windows</li>
            <li>Run the installer</li>
            <li>Keep default settings and click <b>Next</b></li>
            <li>Finish installation</li>
          </ol>
        </section>

        {/* macOS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">🍎 Install Git on macOS</h2>
          <p className="text-neutral-300">
            Git is often pre-installed on macOS. To check:
          </p>
          <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
            git --version
          </pre>
          <p className="text-neutral-300">
            If Git is not installed, macOS will prompt you to install it.
            Alternatively, install via Homebrew:
          </p>
          <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
            brew install git
          </pre>
        </section>

        {/* Linux */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">🐧 Install Git on Linux</h2>
          <p className="text-neutral-300">
            Use your package manager:
          </p>
          <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
            sudo apt update
            <br />
            sudo apt install git
          </pre>
        </section>

        {/* Verify */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">✅ Verify Installation</h2>
          <p className="text-neutral-300">
            After installation, verify Git by running:
          </p>
          <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
            git --version
          </pre>
        </section>

      </div>
    </div>
  );
}
