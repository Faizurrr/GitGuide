import React from "react";

export default function GitHubBasics() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
               <header className="max-w-3xl mb-24">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
            <span className="px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">Tutorial</span>
            <span className="text-neutral-600">/</span>
            <span>Git & GitHub</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 tracking-tighter">
            GitHub <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                 Basics
            </span>
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
                    GitHub is a cloud-based platform that helps developers store, manage,
        and collaborate on code using Git.
          </p>
        </header>

    

      {/* What is GitHub */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📌 What is GitHub?</h2>
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 text-gray-300">
          GitHub allows developers to host Git repositories online, collaborate
          with others, track changes, and manage projects efficiently.
        </div>
      </section>

      {/* Key Concepts */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧩 Key GitHub Concepts</h2>

        <div className="space-y-4">
          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 className="text-green-400 font-semibold">Repository</h3>
            <p className="text-gray-300 mt-2">
              A repository is a project folder that contains code, files,
              and version history.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 className="text-green-400 font-semibold">Commit</h3>
            <p className="text-gray-300 mt-2">
              A commit saves changes to the repository with a message.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 className="text-green-400 font-semibold">Branch</h3>
            <p className="text-gray-300 mt-2">
              A branch lets you work on features without affecting the main code.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <h3 className="text-green-400 font-semibold">Pull Request (PR)</h3>
            <p className="text-gray-300 mt-2">
              A pull request is used to request merging changes into another
              branch.
            </p>
          </div>
        </div>
      </section>

      {/* Basic GitHub Commands */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Basic GitHub Commands</h2>

        <div className="space-y-4">
          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git remote add origin &lt;repo-url&gt;</code>
            <p className="text-gray-300 mt-2">
              Connects your local repository to GitHub.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git push -u origin main</code>
            <p className="text-gray-300 mt-2">
              Pushes code to GitHub for the first time.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git pull</code>
            <p className="text-gray-300 mt-2">
              Downloads and merges updates from GitHub.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🤝 Collaboration on GitHub</h2>
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 text-gray-300">
          Developers collaborate using pull requests, code reviews, issues,
          and discussions to improve project quality.
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Best Practices</h2>
        <ul className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 text-gray-300 list-disc list-inside space-y-2">
          <li>Write clear commit messages</li>
          <li>Use branches for new features</li>
          <li>Review pull requests carefully</li>
          <li>Keep repositories organized</li>
        </ul>
      </section>
    </div>
  );
}
