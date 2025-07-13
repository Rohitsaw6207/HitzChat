import { Mail, Github, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6 border-t border-base-300 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap text-sm">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="flex items-center gap-1 justify-center md:justify-start">
            Developed by 
            <span className="text-gradient-to-r from-purple-400 to-cyan-400 font-semibold"> Rohit Kumar</span>
          </p>
        </div>

        {/* Center */}
        <div className="text-center">
          <p className="font-bold">
            © 2025 Hitzchat – Online Chatting Website. All rights reserved. |{" "}
            <Link to="/policy" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Right Side Icons */}
        <div className="flex gap-2 justify-center">
          <a
            href="mailto:rohitku6207@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-square"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-saw6207/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-square"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://github.com/Rohitsaw6207"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-square"
          >
            <Github className="size-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
