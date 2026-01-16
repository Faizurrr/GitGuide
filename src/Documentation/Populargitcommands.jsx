import React from "react";

export default function Populargitcommands() {
  const commands = [
    {
      command: "git init",
      description: "Initializes a new Git repository in the current folder.",
    },
    {
      command: "git clone <repo-url>",
      description: "Creates a copy of a remote repository on your local machine.",
    },
    {
      command: "git status",
      description: "Shows the current status of files (modified, staged, untracked).",
    },
    {
      command: "git add .",
      description: "Stages all changes for the next commit.",
    },
    {
      command: "git commit -m \"message\"",
      description: "Saves staged changes with a descriptive message.",
    },
    {
      command: "git branch",
      description: "Lists all branches in the repository.",
    },
    {
      command: "git checkout -b <branch-name>",
      description: "Creates and switches to a new branch.",
    },
    {
      command: "git pull",
      description: "Fetches and merges changes from the remote repository.",
    },
    {
      command: "git push",
      description: "Uploads local commits to the remote repository.",
    },
    {
      command: "git log",
      description: "Displays the commit history.",
    },
  ];

  return (
    
    <div className="min-h-screen bg-black text-white px-6 py-20">
                <header className="max-w-3xl mb-24">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
            <span className="px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">Tutorial</span>
            <span className="text-neutral-600">/</span>
            <span>Git & GitHub</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tighter">
            Popular Git  
            <span className="bg-clip-text text-transparent ml-3 bg-gradient-to-r from-green-400 to-emerald-500">
              Commands.
            </span>
          </h1>
            <p className="text-gray-300 text-2xl mb-8">
        These are the most commonly used Git commands that every developer
        should know.
      </p>
        </header>
      

      <div className="space-y-4">
        {commands.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-green-400 transition"
          >
            <code className="text-green-400 font-mono text-lg">
              {item.command}
            </code>
            <p className="text-gray-300 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
