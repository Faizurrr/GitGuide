

export default function Introduction() {
  return (
    <div className="min-h-screen bg-black px-6 py-12">
      <div className="max-w-5xl mx-auto bg-black rounded-2xl shadow-lg p-8 space-y-10">

        {/* Heading */}
          <header className="max-w-3xl mb-24">
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
            <span className="px-2 py-0.5 rounded bg-green-400/10 border border-green-400/20">Tutorial</span>
            <span className="text-neutral-600">/</span>
            <span>Git & GitHub</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 tracking-tighter">
            Introduction to Git & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                 GitHub
            </span>
          </h1>
          <p className="text-neutral-500 text-xl leading-relaxed">
              A beginner-friendly guide to understand Git and GitHub step by step
          </p>
        </header>

        {/* What is Git */}
         
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            📌 What is Git?
          </h2>
          <p className="text-white leading-relaxed">
            <strong>Git</strong> is a <span className="font-medium">version control system</span>.
            It helps developers track changes in their code.
          </p>

          <p className="text-white mt-3 leading-relaxed">
            Imagine you are writing notes in a notebook 📒.  
            Every time you make changes, Git keeps a record of:
          </p>

          <ul className="list-disc list-inside mt-3 text-white space-y-1">
            <li>What was changed</li>
            <li>Who changed it</li>
            <li>When it was changed</li>
          </ul>

          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-gray-800">
              👉 Example:  
              You write code today and it breaks tomorrow.  
              With Git, you can go back to the old working version easily.
            </p>
          </div>
        </section>

        {/* What is GitHub */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            🌐 What is GitHub?
          </h2>
          <p className="text-white leading-relaxed">
            <strong>GitHub</strong> is a website where you can store your Git projects online.
          </p>

          <p className="text-white mt-3 leading-relaxed">
            Think of GitHub like <strong>Google Drive for code</strong> ☁️.
            You can:
          </p>

          <ul className="list-disc list-inside mt-3 text-white space-y-1">
            <li>Upload your code</li>
            <li>Share it with others</li>
            <li>Work together with a team</li>
          </ul>

          <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <p className="text-gray-800">
              👉 Example:  
              You create a website project on your laptop.  
              GitHub lets you save it online and show it to your friends or recruiters.
            </p>
          </div>
        </section>

        {/* Git vs GitHub */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            🔍 Difference Between Git & GitHub
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left text-gray-800 font-semibold">Git</th>
                  <th className="p-3 text-left text-gray-800 font-semibold">GitHub</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 text-white">Tool / Software</td>
                  <td className="p-3 text-white">Website / Platform</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-3 text-gray-800">Works on your computer</td>
                  <td className="p-3 text-gray-800">Works on the internet</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 text-white">Tracks code changes</td>
                  <td className="p-3 text-white">Stores & shares code</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Learn */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            🚀 Why Should You Learn Git & GitHub?
          </h2>

          <ul className="list-disc list-inside text-white space-y-2">
            <li>It is required for almost every software job</li>
            <li>Helps you manage projects easily</li>
            <li>Makes teamwork simple</li>
            <li>Important for placements & internships</li>
          </ul>
        </section>

        {/* Footer Note */}
        <div className="text-center pt-6 border-t">
          <p className="text-white">
            Don’t worry if this feels confusing right now 😊  
            We’ll learn everything step by step.
          </p>
        </div>

      </div>
    </div>
  );
}
