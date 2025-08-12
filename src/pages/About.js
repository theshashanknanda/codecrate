import HighlightedText from "../components/HighlightedText";
import aboutus1 from "../assets/Images/aboutus1.webp";
import aboutus2 from "../assets/Images/aboutus2.webp";
import aboutus3 from "../assets/Images/aboutus3.webp";
import FoundingStory from "../assets/Images/FoundingStory.png"
import Footer from "../components/Footer";
import BoldText from "../components/BoldText";
import PrimaryButton from "../components/PrimaryButton";

let About = () => {
    const learningGridArray = [
        {
          order: -1,
          heading: "Code Crate",
          highlightText: "Showcase",
          description:
            "This platform was developed as a college project to demonstrate full-stack web development skills using the MERN stack (MongoDB, Express.js, React, and Node.js).",
          BtnText: "View Project",
          BtnLink: "/",
        },
        {
          order: 1,
          heading: "Project Goals",
          description:
            "To create a fully functional e-learning platform that demonstrates proficiency in modern web development technologies and best practices.",
        },
        {
          order: 2,
          heading: "Technical Stack",
          description:
            "Built with MERN stack, featuring user authentication, course management, and responsive design principles.",
        },
        {
          order: 3,
          heading: "Key Features",
          description:
            "User authentication, course enrollment, progress tracking, and responsive design for all devices.",
        },
        {
          order: 4,
          heading: "Learning Outcomes",
          description:
            "Gained hands-on experience with full-stack development, database design, and deployment.",
        },
        {
          order: 5,
          heading: "Future Enhancements",
          description:
            "Potential future improvements include additional course content, interactive elements, and performance optimizations.",
        },
      ];

    return (
        <div className="bg-richblack-900 text-white min-h-screen">
            {/* Hero Section */}
            <section className="hero-section px-4 mt-8 h-auto md:h-[50vh] flex flex-col justify-center">
                <div className="text-center my-8">
                    <button className="bg-[#161D29] py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold text-sm md:text-base hover:scale-95 transition-all duration-200">
                        Become an Instructor
                    </button>
                </div>

                <div className="m-4 md:m-6 text-center">
                    <BoldText>Code Crate</BoldText><br/>
                    <HighlightedText>E-Learning Platform</HighlightedText>
                </div>

                <p className="text-[#838894] font-bold p-4 w-full md:w-[80%] mx-auto text-base md:text-xl text-center">
                    This platform was developed as part of an academic project to demonstrate full-stack web development skills using modern technologies including React, Node.js, Express, and MongoDB.
                </p>

                <div className="flex flex-col md:flex-row w-fit mx-auto gap-4 md:gap-8 m-4">
                    <PrimaryButton color="#FED608" textColor="#111111">View Courses</PrimaryButton>
                    <PrimaryButton color="#161D29" textColor="#FFFFFF">GitHub Repo</PrimaryButton>
                </div>
            </section>

            {/* Driving Innovation Section */}
            <section className="py-12">
                <div className="bg-[#161D29] min-h-[40vh] py-8 md:py-12 flex flex-col justify-center items-center">
                    <div className="w-[90%] md:w-[80vw] mx-auto flex flex-col gap-4 text-center">
                        <div className="flex flex-col gap-2">
                            <div className="text-2xl md:text-4xl font-bold px-4 md:px-0">Academic Project Showcasing</div>
                            <HighlightedText className="text-blue-500 text-2xl md:text-4xl">Full-Stack Development</HighlightedText>
                        </div>
                        <p className="py-4 opacity-60 text-sm md:text-base w-full md:w-[70%] mx-auto px-4 md:px-0">This project demonstrates proficiency in full-stack web development, featuring user authentication, course management, and responsive design. Built with the MERN stack (MongoDB, Express.js, React, and Node.js).</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap w-[90%] md:w-[90vw] mx-auto gap-4 mt-4 md:mt-[-10%] justify-center px-4 md:px-0">
                    <img src={aboutus1} alt="About Us 1" className="w-full md:w-[32%]" />
                    <img src={aboutus2} alt="About Us 2" className="w-full md:w-[32%]" />
                    <img src={aboutus3} alt="About Us 3" className="w-full md:w-[32%]" />
                </div>
                <div className="text-lg md:text-2xl font-semibold w-[90%] md:w-[60vw] mx-auto mt-8 md:mt-20 text-center">
                    "This academic project showcases the application of <span className="text-[#15D7FA]">modern web technologies</span> to create a <span className="text-[#BA5F1F]">fully functional e-learning platform</span>, demonstrating skills in both <span className="text-[#F4B81C]">frontend and backend development.</span>"
                </div>
            </section>

            <hr className="my-8 opacity-40 mx-auto w-[80%]"></hr>

            {/* Founding Story Section */}
            <section className="w-[90%] md:w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 my-12">
                <div className="flex flex-col gap-6 w-full md:w-[45%]">
                    <h1 className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent text-3xl md:text-4xl font-bold text-center md:text-left">Project Overview</h1>
                    <p className="opacity-70 text-center md:text-left text-base">This e-learning platform was developed as a college project to demonstrate full-stack web development skills. The project was undertaken to showcase proficiency in building modern web applications using the MERN stack (MongoDB, Express.js, React, and Node.js).</p>
                    <p className="opacity-70 text-center md:text-left text-base">The goal was to create a fully functional platform that includes user authentication, course management, and responsive design, while following best practices in web development and software engineering.</p>
                </div>
                <div className="w-full md:w-[45%]">
                    <img src={FoundingStory} alt="Founding Story" className="w-full h-auto shadow-lg rounded-lg" />
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="w-[90%] md:w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 my-12">
                <div className="flex flex-col gap-6 w-full md:w-[45%]">
                    <h1 className="text-[#E65C00] text-3xl md:text-4xl font-bold text-center md:text-left">Project Vision</h1>
                    <p className="opacity-70 text-center md:text-left text-base">The vision for this project was to demonstrate comprehensive full-stack development skills by building a complete, production-ready web application. The focus was on creating a clean, intuitive user interface while implementing robust backend functionality and following modern development practices.</p>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-[45%]">
                    <h1 className="text-[#15D7FA] text-3xl md:text-4xl font-bold text-center md:text-left">Technical Implementation</h1>
                    <p className="opacity-70 text-center md:text-left text-base">The platform was built using the MERN stack, with a focus on clean code architecture and best practices. Key features include JWT authentication, responsive design, and a RESTful API. The project follows the MVC pattern and includes proper error handling, input validation, and security measures.</p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#161D29] py-12">
                <div className="w-[80vw] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black">3</h1>
                        <p className="text-sm opacity-60">Sample Courses</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black">1</h1>
                        <p className="text-sm opacity-60">Developer</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black">MERN</h1>
                        <p className="text-sm opacity-60">Tech Stack</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-black">2024</h1>
                        <p className="text-sm opacity-60">Project Year</p>
                    </div>
                </div>
            </section>

            {/* Learning Grid Section */}
            <section className="mt-8 md:mt-12 pb-8 md:pb-12 px-4 md:px-0">
                <div className="w-[90%] md:w-[80vw] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-0">
                    {
                        learningGridArray.map((item, index) => {
                            return (
                                <div key={index} className={`
                                    ${item.order === -1 && "lg:col-span-2 bg-transparent"}
                                    ${item.order % 2 === 0 && "bg-[#2B333F]"}
                                    ${item.order % 2 !== 0 && "bg-[#161D29]"}
                                    ${item.order === 3 && "lg:col-start-2"}
                                    rounded-lg lg:rounded-none`}>
                                    {
                                        index === 0 ?
                                        (<div className="min-h-[300px] text-center md:text-left flex flex-col gap-4 p-6">
                                            <div>
                                                <div>
                                                    <h1 className="text-white font-medium text-2xl md:text-4xl">{item.heading}</h1>
                                                    <HighlightedText>{item.highlightText}</HighlightedText>
                                                </div>
                                                <p className="text-white opacity-70 font-medium w-full md:w-[80%] mt-4 text-sm md:text-base">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <button className="bg-[#CBAA0B] w-full md:w-[30%] p-2 mb-2 rounded-md text-black hover:opacity-60 text-sm md:text-base">{item.BtnText}</button>
                                        </div>) :
                                        (<div className="min-h-[250px] md:h-[300px] flex flex-col justify-start gap-4 p-6">
                                            <div className="font-semibold text-center md:text-left pt-4 text-lg md:text-xl">
                                                {item.heading}
                                            </div>
                                            <div className="font-medium opacity-70 text-sm text-center md:text-left">
                                                {item.description}
                                            </div>
                                        </div>)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About;