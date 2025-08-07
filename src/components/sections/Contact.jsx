

function Contact(){
    return(
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-10 z-1"
        >
            <div className="max-w-3xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border rounded-2xl border-white/10 hover:-translate-y-1 transition-all">

                    <div className="p-4 flex flex-col items-center gap-5">
                        <h2 className="text-center text-4xl tracking-widest font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right">
                        Contacts
                        </h2>
                        <p className="p-4 text-center text-xl tracking-wide font-bold">N'hésitez pas à me contacter</p>
                    </div>    
                
                    <div className="p-4">
                        <ul className="flex flex-col items-center gap-5">
                            <li className="flex items-center gap-5">
                                <img src={"/Portfolio/emailIcon.png"} alt="Email Icon"/>
                                <a className="text-sm text-orange-500 hover:text-orange-300 transition-colors" href="mailto:yvoncocks@gmail.com">yvoncocks@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-5">
                                <img src={"/Portfolio/linkedinIcon.png"} alt="Linkedin Icon"/>
                                <a className="text-sm text-orange-500 hover:text-orange-300 transition-colors" href="https://www.linkedin.com/in/yvon-vincent-cocks-4751061ba/">Profil Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;