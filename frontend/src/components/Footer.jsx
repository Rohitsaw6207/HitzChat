import { Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 border-t border-base-300 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-center md:text-left">
          <p>
            Developed with <span className="text-red-500"></span> by <span className="text-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Rohit Kumar</span>
          </p>
        </div>

        <div className="text-sm text-center">
          <p>
            © 2025 Online Game Hub. All rights reserved. |
            <Link to="/policy" className="ml-1 text-purple-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex gap-2">
          <a href="mailto:rohitku6207@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square">
            <Mail className="size-4" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-kumar-saw6207/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square">
            <Linkedin className="size-4" />
          </a>
          <a href="https://github.com/Rohitsaw6207" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-square">
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;