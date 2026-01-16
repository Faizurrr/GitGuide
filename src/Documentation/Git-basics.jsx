import React from "react";

export default function GitBasics() {
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
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 tracking-tighter">
            Git 
            <span className="bg-clip-text text-transparent ml-3 bg-gradient-to-r from-green-400 to-emerald-500">
                 Basics
            </span>
          </h1>
                <p className="text-neutral-300 text-lg">
          Git Basics help you understand how Git works and how to track changes
          in your project. These commands are the foundation of Git.
        </p>
        </header>

        {/* Intro */}
      
        {/* What is Git */}
          

        <section className="space-y-3">
          <h2 className="text-2xl font-medium">What is Git?</h2>
          <p className="text-neutral-300">
            Git is a **distributed version control system** that helps developers
            track code changes, collaborate with others, and manage project history.
          </p>
        </section>

        {/* Basic Workflow */}
        <section className="space-y-3">
          <h2 className="text-2xl font-medium">Basic Git Workflow</h2>
          <ol className="list-decimal list-inside text-neutral-300 space-y-1">
            <li>Initialize a repository</li>
            <li>Add files to staging area</li>
            <li>Commit changes</li>
            <li>Repeat as you develop</li>
          </ol>
        </section>

        {/* Commands */}
        <section className="space-y-6">

          {/* git init */}
          <div>
            <h3 className="text-xl font-medium">1️⃣ git init</h3>
            <p className="text-neutral-300">
              Initializes a new Git repository in your project folder.
            </p>
            <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
              git init
            </pre>
          </div>

          {/* git status */}
          <div>
            <h3 className="text-xl font-medium">2️⃣ git status</h3>
            <p className="text-neutral-300">
              Shows the current state of your repository (modified, staged files).
            </p>
            <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
              git status
            </pre>
          </div>

          {/* git add */}
          <div>
            <h3 className="text-xl font-medium">3️⃣ git add</h3>
            <p className="text-neutral-300">
              Adds files to the staging area.
            </p>
            <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
              git add .
            </pre>
          </div>

          {/* git commit */}
          <div>
            <h3 className="text-xl font-medium">4️⃣ git commit</h3>
            <p className="text-neutral-300">
              Saves your changes permanently in Git history.
            </p>
            <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
              git commit -m "Your commit message"
            </pre>
          </div>

        </section>

        {/* Summary */}
        <section className="space-y-3">
          <h2 className="text-2xl font-medium">Summary</h2>
          <p className="text-neutral-300">
            Git basics include initializing a repository, tracking changes,
            staging files, and committing updates. Mastering these commands
            will make Git easy and powerful for you.
          </p>
        </section>

      </div>
    </div>
  );
}
