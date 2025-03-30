import RevealOnScroll from "./RevealOnScroll";
export default function About(){
    const frontendSkills=["React","Vite","TailwindCss"];
    const backendSkills=["python", "Aws", "Node.js"];
   return <section
        id='about'
        className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        hello 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border border-white/10 mt-4 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key)=>(
                                <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                                ))}
                        </div>

                    </div>
                    <div className="rounded-xl p-6 border border-white/10 mt-4 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key)=>
                                
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                                    {tech}
                                </span>
                            
                                
                            )}
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-grey space-y-2">
                        <li>
                            <strong> Maters in computer Science from Kennesaw State University(Jan 2023 -May 2024)</strong>
                        </li>
                        <li>
                            Relevant Course Work:
                        </li>
                    </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Software Engineer at Quartet Ai</h4>
                            <p>write your work experience</p>
                        </div>
                        <div>
                            <h4 className="font-semibold"> company 2</h4>
                            <p>write your work experience</p>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
}