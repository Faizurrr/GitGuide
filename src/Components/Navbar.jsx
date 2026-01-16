import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-neutral-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 select-none">
          <img
            src="/pictures/logo1.png"
            alt="GitGuide Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><Link className="hover:underline" to="/">Home</Link></li>
          <li><Link className="hover:underline" to="/Tutorials">Tutorials</Link></li>
          <li><Link className="hover:underline" to="/docs">Docs</Link></li>
          <li><Link className="hover:underline" to="/About">About</Link></li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4 text-sm">
          <Link onClick={() => setIsOpen(false)} className="block hover:text-yellow-400" to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} className="block hover:text-yellow-400" to="/Tutorials">Tutorials</Link>
          <Link onClick={() => setIsOpen(false)} className="block hover:text-yellow-400" to="/docs">Docs</Link>
          <Link onClick={() => setIsOpen(false)} className="block hover:text-yellow-400" to="/About">About</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
