import { RevealOnScroll } from '../RevealOnScroll';


export const Projects = () => {
    return <section 
    id="projects" 
    className=" min-h-screen flex items-center justify-center py-20 mt-20"
    >
         <RevealOnScroll>
    <div className=" max-w-5xl mx-auto px-4">
        <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-white bg-clip-text text-transparent text-center"
        
        >  
            Featured Projects
        </h2>
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all font-bold">
                <h3 className=" tex-xl font-bold mb-2">Cloud Platform</h3>
                <p className=" text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias illum porro ratione, 
                aliquam saepe totam obcaecati vitae aut velit quisquam.
                </p>
                <div className=" flex flex-wrap gap-2 mb-4">
                   {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span 
                    key={key}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        {tech}
                    </span>
                   ))} 
                </div>

                   <div className=" flex justify-between items-center">
                    <a href="#" className=" text-blue-400 hover:text-blue-300 transition-colors">
                        View Project → 
                        </a>
                   </div>
            </div>
        
        <div className=" p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all font-bold">
            <h3 className=" tex-xl font-bold mb-2">Weather App 🌦️</h3>
            <p className=" text-gray-400 mb-4">A sleek and intuitive weather application that provides real-time weather updates, 
                forecasts, and location-based insights.  
                This project showcases my ability to work with APIs, manage state efficiently, and design responsive UIs. 
                </p>
                <ul className='text-gray-400 mb-4'>
                    <li>⚪️ Real-time weather data for any location.</li>
                    <li>⚪️ Dynamic UI that adapts to weather conditions.</li>
                    <li>⚪️ Geolocation support for automatic local forecasts.</li>
                    <li>⚪️ Search functionality for multiple locations.</li>
                </ul>


                <div className=" flex flex-wrap gap-2 mb-4">
                   {["HTML", "CSS", "JavaScript", "OpenWeather API"].map((tech, key) => (
                    <span 
                    key={key}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        {tech}
                    </span>
                   ))} 
                </div>

                   <div className=" flex justify-between items-center">
                   <a
                    href="https://github.com/ayman0713/Weather-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                    View Project →
                    </a>

                   </div>
        </div>
            <div className=" p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all font-bold">
                <h3 className=" tex-xl font-bold mb-2">Cloud Platform</h3>
                <p className=" text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias illum porro ratione, 
                aliquam saepe totam obcaecati vitae aut velit quisquam.
                </p>
                <div className=" flex flex-wrap gap-2 mb-4">
                   {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span 
                    key={key}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        {tech}
                    </span>
                   ))} 
                </div>

                   <div className=" flex justify-between items-center">
                        <a href="#" className=" text-blue-400 hover:text-blue-300 transition-colors">
                        View Project → 
                        </a>
                   </div>
            </div>
        <div className=" p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all font-bold">
            <h3 className=" tex-xl font-bold mb-2">Cloud Platform</h3>
            <p className=" text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias illum porro ratione, 
                aliquam saepe totam obcaecati vitae aut velit quisquam.
                </p>
                <div className=" flex flex-wrap gap-2 mb-4">
                   {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span 
                    key={key}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all ">
                        {tech}
                    </span>
                   ))} 
                </div>

                   <div className=" flex justify-between items-center">
                    <a href="#" className=" text-blue-400 hover:text-blue-300 transition-colors">
                        View Project → 
                        </a>
                   </div>
        </div>

    </div>
    
    </div>
    </RevealOnScroll>
    </section>
}