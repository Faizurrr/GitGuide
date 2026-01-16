

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="h-16" />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">About GitGuide</h1>
        <p className="text-neutral-400 text-lg mb-10">
          Learn Git & GitHub the simple and practical way.
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold mb-2">What is GitGuide?</h2>
            <p className="text-neutral-400 leading-relaxed">
              GitGuide is a beginner-friendly platform created to help students
              and new developers learn Git and GitHub from scratch with clear
              explanations and hands-on tutorials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Why GitGuide?</h2>
            <p className="text-neutral-400 leading-relaxed">
              Many beginners struggle with Git because most resources assume
              prior knowledge. GitGuide removes confusion and teaches Git in a
              structured and simple way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How GitGuide Helps</h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Clear documentation for core concepts</li>
              <li>Step-by-step practical tutorials</li>
              <li>Real-world Git & GitHub workflows</li>
              <li>Beginner-safe commands and examples</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Who is This For?</h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Students learning programming</li>
              <li>Beginner web developers</li>
              <li>Anyone new to Git & GitHub</li>
              <li>Developers preparing for open-source contributions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Future Vision</h2>
            <p className="text-neutral-400 leading-relaxed">
              GitGuide aims to grow into a complete Git learning hub with
              interactive tutorials, real projects, and open-source guidance.
            </p>
          </section>

        </div>
      </div>
        {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} GitGuide — Learn Git the Smart Way
      </footer>

    </div>
  );
}
