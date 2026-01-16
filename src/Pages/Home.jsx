import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 ">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent pt-5">
            Git & GitHub
          </span>
          <br /> the Right Way
        </h1>

        <p className="mt-6 text-neutral-400 max-w-2xl text-lg">
          A beginner-friendly documentation platform to master Git, GitHub,
          version control, and professional workflows.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            to="/docs"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            Start Learning
          </Link>

          <Link
            to="/introduction"
            className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-white transition"
          >
            Introduction
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What You’ll Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-white/30 transition">
            <h3 className="text-xl font-medium">Git Basics</h3>
            <p className="mt-2 text-neutral-400">
              Learn init, add, commit, status, and core Git workflow from scratch.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-white/30 transition">
            <h3 className="text-xl font-medium">GitHub Workflow</h3>
            <p className="mt-2 text-neutral-400">
              Push projects to GitHub, collaborate, and manage repositories.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-white/30 transition">
            <h3 className="text-xl font-medium">Professional Practices</h3>
            <p className="mt-2 text-neutral-400">
              Learn clean commits, branching strategies, and industry standards.
            </p>
          </div>

        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="bg-neutral-950 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Beginner → Pro Learning Path
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6 text-left">
            {[
              "Introduction",
              "Install Git",
              "Git Basics",
              "Push to GitHub",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-5"
              >
                <span className="text-sm text-neutral-400">Step {index + 1}</span>
                <h3 className="mt-2 font-medium text-lg">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-semibold">
          Ready to Become Confident with Git?
        </h2>
        <p className="mt-4 text-neutral-400">
          Start learning today and build real-world development skills.
        </p>

        <a href="/public/Documentationpdf.pdf"
       
          className="inline-block mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium hover:opacity-90 transition"
        >
          Download Documentation
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} GitGuide — Learn Git the Smart Way
      </footer>

    </div>
  );
}
