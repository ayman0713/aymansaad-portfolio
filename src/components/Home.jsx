import { RevealOnScroll } from './RevealOnScroll';

export const Home = () => {
    return <section id="home" className=" min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className=" text-center z-10 px-4">
            <h1 className=" text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent leading-right">
            Hi, I'm Ayman!
            </h1>

            <p className=" text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I am a frontend developer specializing in building clean, scalable, and high-performance web applications, with a deep passion for delivering exceptional user experiences. 
            My expertise lies in creating intuitive and engaging interfaces that prioritize usability and performance. 
            While frontend development and user experience design are my primary focus, I also have solid experience in full stack development. 
            This allows me to contribute effectively across the entire development lifecycle, ensuring cohesive, end-to-end solutions that align both frontend excellence and backend robustness.
            </p>
            <div className=" flex justify-center space-x-4">
                <a href="#projects" 
                className=" bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_150px_rgba(59, 130, 246, 0.4)]"
                >
                    View Projects
                </a>
                <a href="#contact" 
                className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                >
                    Contact me
                </a>
            </div>
        </div>
        </RevealOnScroll> 
    </section>
}