import { Link } from "react-router-dom";

export default function Docs() {
  return (
    <div className="w-full bg-black">
      
    {/* Banner */}
<div className="w-full relative overflow-hidden
                h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem]">
  <img
    src="/pictures/DocsImg.png"
    alt="Docs"
    className="w-full h-full object-cover object-center"
  />
</div>

      {/* Content */}
      <div className="max-w-5xl mx-auto min-h-screen px-6 py-12">
        <ol className="space-y-6">
          
          {/* Item */}
          <li>
            <Link
              to="/introduction"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                Introduction to Git & GitHub
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Learn what Git and GitHub are and why they are essential for developers.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/Installgit"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                How to Install Git
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Step-by-step guide to install Git on Windows, macOS, and Linux.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/Git-basics"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                Git Basics
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Understand init, status, add, commit, and the basic workflow.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/Popular-git-commands"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                Popular Git Commands
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Most-used Git commands every beginner must know.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/git-branches"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                Git Branches & Merging
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Learn branching, merging, and collaborative workflows.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/github-basics"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                GitHub Basics
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Repositories, cloning, pushing, pulling, and collaboration.
              </p>
            </Link>
          </li>
           <li>
            <Link
              to="/Push-to-github"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                  How to push local repo on Github
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Step-by-step guide to install Git on Windows, macOS, and Linux.
              </p>
            </Link>
          </li>
            <li>
            <Link
              to="/Deployment"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                  How to deploy a project using GitHub?
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Step-by-step guide of Deployment of Project Using Github.
              </p>
            </Link>
          </li> 
               <li>
            <Link
              to="/MasterGithub"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                    Master to GitHub
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Step-by-step guide of Deployment of Project Using Github.
              </p>
            </Link>
          </li>
          <li> 
            <Link
              to="/git-errors"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                Common Git Errors & Fixes
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Fix frequent Git mistakes with simple explanations.
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/best-practices"
              className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all hover:border-white/30 hover:bg-neutral-800"
            >
              <h2 className="text-white text-2xl font-medium group-hover:underline">
                Best Practices for Beginners
              </h2>
              <p className="mt-2 text-neutral-400 text-sm">
                Write clean commits and follow professional Git workflows.
              </p>
            </Link>
          </li>

        </ol>
      </div>
      
    </div>
  );
}
