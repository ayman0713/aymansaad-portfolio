import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className="bg-transparent text-white py-6 border-t border-none shadow-[0_4px_15px_rgba(0,0,0,0.2)] backdrop-blur-lg">
            <div className="max-w-5xl mx-auto px-4 mb-2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            ayman<span className="text-blue-500">.saad</span>
            </div>
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-center md:text-left">&copy; {new Date().getFullYear()} Ayman Saad. All rights reserved.</p>

                <div className="flex space-x-6">
                    <a 
                        href="https://github.com/ayman0713" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors duration-300 text-xl transform hover:scale-110"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/aymansaadruiz/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors duration-300 text-xl transform hover:scale-110"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
