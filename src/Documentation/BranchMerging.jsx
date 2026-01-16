

export default function BranchMerging() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
         <header className="max-w-3xl mb-24">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
            <span className="px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">Tutorial</span>
            <span className="text-neutral-600">/</span>
            <span>Git & GitHub</span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-extrabold text-white mb-8 tracking-tighter">
             Git Branches &  <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                 Mergings
            </span>
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
                    GitHub is a cloud-based platform that helps developers store, manage,
        and collaborate on code using Git.
          </p>
        </header>

      {/* Branching Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🌿 Git Branching</h2>

        <div className="space-y-4">
          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git branch</code>
            <p className="text-gray-300 mt-2">
              Lists all branches in the repository.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git branch branch-name</code>
            <p className="text-gray-300 mt-2">
              Creates a new branch.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git checkout -b branch-name</code>
            <p className="text-gray-300 mt-2">
              Creates and switches to a new branch.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git switch branch-name</code>
            <p className="text-gray-300 mt-2">
              Modern and recommended way to switch branches.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git branch -d branch-name</code>
            <p className="text-gray-300 mt-2">
              Deletes a branch after it has been merged.
            </p>
          </div>
        </div>
      </section>

      {/* Merging Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔀 Git Merging</h2>

        <div className="space-y-4">
          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git merge branch-name</code>
            <p className="text-gray-300 mt-2">
              Merges the specified branch into the current branch.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git pull</code>
            <p className="text-gray-300 mt-2">
              Fetches and merges changes from the remote repository.
            </p>
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
            <code className="text-green-400">git merge --abort</code>
            <p className="text-gray-300 mt-2">
              Cancels a merge if conflicts occur.
            </p>
          </div>
        </div>
      </section>

      {/* Merge Conflicts */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">⚠️ Merge Conflicts</h2>
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
          <p className="text-gray-300">
            Merge conflicts happen when Git cannot automatically combine changes
            from different branches. You must manually resolve the conflicts in
            the affected files, then commit the changes.
          </p>
        </div>
      </section>

      {/* Workflow */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔁 Common Workflow</h2>
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 text-gray-300">
          <p>1. Create a feature branch</p>
          <p>2. Make changes & commit</p>
          <p>3. Switch to main branch</p>
          <p>4. Merge feature branch</p>
          <p>5. Delete feature branch</p>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">✅ Best Practices</h2>
        <ul className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 text-gray-300 space-y-2 list-disc list-inside">
          <li>Use meaningful branch names</li>
          <li>Pull latest changes before merging</li>
          <li>Keep branches small and focused</li>
          <li>Delete merged branches</li>
        </ul>
      </section>
    </div>
  );
}
