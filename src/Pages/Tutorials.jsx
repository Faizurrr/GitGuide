import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="h-16" />

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* ===== Sidebar ===== */}
        <aside className="w-full md:w-64 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Tutorials</h2>

          <ul className="flex md:block gap-2 md:space-y-2 text-sm overflow-x-auto md:overflow-visible">
            <li>
              <Link
                to="/Tutorials"
                className="block whitespace-nowrap px-3 py-2 font-bold rounded-lg hover:bg-blue-600"
              >
                First Commits
              </Link>
            </li>

            <li>
              <Link
                to="/Installgit"
                className="block whitespace-nowrap px-3 py-2 font-bold rounded-lg hover:bg-blue-600"
              >
                How to Install Git
              </Link>
            </li>

            <li>
              <Link
                to="/Push-to-github"
                className="block whitespace-nowrap px-3 py-2 font-bold rounded-lg hover:bg-blue-600"
              >
                Push to GitHub
              </Link>
            </li>

            <li>
              <Link
                to="/git-branches"
                className="block whitespace-nowrap px-3 py-2 font-bold rounded-lg hover:bg-blue-600"
              >
                Branching
              </Link>
            </li>

            <li>
              <Link
                to="/git-errors"
                className="block whitespace-nowrap px-3 py-2 font-bold rounded-lg hover:bg-blue-600"
              >
                Undo Mistakes
              </Link>
            </li>

            <li>
              <Link
                to="/MasterGithub"
                className="block whitespace-nowrap px-3 py-2 font-bold rounded-lg hover:bg-blue-600"
              >
                   Master to Github
              </Link>
            </li>

            <li>
              <Link
                to="/Deployment"
                className="block whitespace-nowrap px-3 py-2 font-bold rounded-lg hover:bg-blue-600"
              >
                Deploy Project
              </Link>
            </li>
          </ul>
        </aside>

        {/* ===== Main Content ===== */}
        <main className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-2">First Commit</h1>
          <p className="text-neutral-400 mb-6">
            Goal: Initialize a Git repository and make your first commit.
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Step 1: Initialize a Repository
            </h2>
            <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 text-sm overflow-x-auto">
              <code>git init</code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Step 2: Create & Track a File
            </h2>
            <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 text-sm overflow-x-auto">
              <code>git add index.html</code>
            </pre>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Step 3: Make Your First Commit
            </h2>
            <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 text-sm overflow-x-auto">
              <code>git commit -m "Initial commit"</code>
            </pre>
          </div>

          <div className="bg-blue-950 border border-blue-800 rounded-lg p-4 text-sm">
            💡 <span className="font-semibold">Tip:</span> Keep commit messages short and meaningful.
          </div>
        </main>
      </div>
      <footer className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} GitGuide — Learn Git the Smart Way
      </footer>
    </div>
  );
}
