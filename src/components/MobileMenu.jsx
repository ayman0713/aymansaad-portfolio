import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const menuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
            } 
        },
        exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.3 }
        }),
        exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    const links = ["Home", "About", "Projects", "Contact"];

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-[80vh] z-50 flex flex-col items-center justify-center shadow-lg backdrop-blur-md border-b border-gray-700"
                    style={{
                        background: "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(0,0,0,0.7))",
                        boxShadow: "0px 4px 15px rgba(0,0,0,0.5)"
                    }}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer"
                        aria-label="Close Menu"
                    >
                        &times;
                    </button>

                    {links.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="relative text-2xl font-semibold text-white my-5 transition-transform group hover:scale-110 hover:text-gray-200"
                            custom={index}
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <span className="relative z-10">{item}</span>
                            <span 
                                className="absolute inset-0 rounded-full blur-md opacity-70 scale-90 
                                           bg-blue-500 transition duration-300 ease-in-out pointer-events-none 
                                           group-hover:scale-100 group-hover:opacity-100"
                            ></span>
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
