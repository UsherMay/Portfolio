function Hero(){
    return(
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center py-20 z-1"
        >
            <div className="text-left z-10 px-4 ">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right"> Hi, I'm Me</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto"> wow wowowohiu, skjdbkqdjoaibfljhbdlbdlkbmabjm
                    osdubnsldjnmdskjnmdskjbmskjvùmzon doubn smdjobmajb zaodnnqdbjmov obnmsdljv
                </p>

                <a href="mailto:qqch@qqch.com" className="bg-orange-500 text-white py-3 px-6 rounded 
                            font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(239, 185, 48, 0.4)]
                            hover:bg-orange-300">Contact Me</a>
            </div>

            <img src="/src/assets/avataarsMe.png" 
                 alt="Hero png: avaataarsMe"
                 className="w-[50%] z-10 animate-floating"/>
                <div className="absolute w-[50vw] h-[50vw] min-w-80 min-h-80 top-[-128px] left-[10vw] bg-orange-600 bg-opacity-50 z-0"/>
                <div className=""/>
        </section>
    );
}

export default Hero;