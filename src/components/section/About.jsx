import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {


    const frontendSkills =[
        "React.js",
        "HTML",
        "CSS", 
        "JavaScript",
        "TailwindCSS"
    ];

    const backendSkills = [
        "Node.js", 
        "Python", 
        "JavaScript", 
        "SQL",
        "Django",
        "REST APIs"
    ];
    
    return <section id="about" className=" min-h-screen flex items-center justify-center py-17"
    >
        <RevealOnScroll>
        <div className=" max-w-3xl mx-auto px-4">
          <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            About Me
            </h2>
            <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all text-lg">
                <p className=" text-gray-300 mb-6">
                Coming from a criminology background, I discovered a deep passion for technology and how it shapes the world. 
                This curiosity led me to immerse myself in coding, web development, and building real-world applications. 
                For over a year, I have worked on personal projects, honing my frontend skills and learning to create scalable, intuitive applications. 
                I love tackling challenges, optimizing user experiences, and continuously expanding my knowledge to build innovative solutions that make an impact.
                </p>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4">Frontend</h3>
                        <div className=" flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (

                            <span 
                            key={key}
                            className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition ">
                                {tech}
                            </span>
                            
                        ))}
                        </div>
                    </div>
                    
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4">Backend</h3>
                        <div className=" flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (

                            <span 
                            key={key}
                            className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition ">
                                {tech}
                            </span>
                            
                        ))}
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 mt-8">
                        <div className=" p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                            <h3 className=" text-xl font-bold mb-4"> 🎓Education </h3>
                            <ul className=" list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S. in Criminology </strong> -Anglia Ruskin University - Cambridge (2019-2023)
                                </li>
                                <li>
                                    <strong> Professional Certificate </strong> -META FrontEnd Development - Coursera
                                </li>
                                <li>
                                    <strong> AI Driven Software engineering Bootcamp </strong> -Skills City -  Manchester (2024-2025)
                                </li>
                            </ul>
                        </div>
                        
            </div>
        </div>
        </RevealOnScroll>
    </section>
};
