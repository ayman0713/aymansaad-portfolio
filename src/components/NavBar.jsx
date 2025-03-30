import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const NavBar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""; 
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-none shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        ayman<span className="text-blue-500">.saad</span>
                    </a>

                    <div 
                        className="w-10 h-8 relative cursor-pointer z-40 md:hidden text-2xl"
                        onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                            href="#home" 
                            className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            About
                        </a>
                        <a 
                            href="#projects" 
                            className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact" 
                            className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            Contact
                        </a>

                        <a 
                            href="https://github.com/ayman0713"
                            target="blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition-colors text-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        
                        <a  
                            href="https://www.linkedin.com/in/aymansaadruiz/"
                            target="blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition-colors text-xl hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
