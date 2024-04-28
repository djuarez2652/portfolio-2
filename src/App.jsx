import Project from "./Project.jsx";
import ContactBar from "./ContactBar.jsx";
import projectData from "./ProjectData.js";
import './App.css'

export default function App() {

    const headerStyle = 'text-lg md:text-2xl font-medium'

    const projects = projectData.map((project) => {
        return <Project key={project.id} title={project.title} lang={project.lang} descr={project.descr} a={project.a}/>
    })


    return (
        <div
            className={'w-screen h-auto p-5 text-white font-montserrat bg-bg'}
        >
            <div
                className={'flex justify-between p-3'}
            >
                <div
                    className={'flex flex-col '}
                >
                    <p
                        className={'text-slate-400 text-sm md:text-md'}
                    >
                        Hi, my name is
                    </p>
                    <h1
                        className={'text-3xl md:text-5xl text-[#CBD6F3] font-medium'}
                    >
                        David Juarez
                    </h1>
                </div>
                <div
                    className={'flex items-center'}
                >
                    <ContactBar/>
                </div>
            </div>
            <div

            >
                <h2
                    className={ headerStyle }
                >
                    Bio
                </h2>
                <div
                    className={'p-3 h-fit flex gap-3'}
                >
                    <div
                        className={'w-[2px] h-auto bg-gradient-to-b from-light-pink via-light-purple to-light-blue'}
                    >
                    </div>
                    <p
                        className={'w-11/12 md:max-w-[500px]'}
                    >
                        I’m a sophomore in <span
                        className={'text-[#B9D9EB] font-medium'}>SEAS @ Columbia University ♔</span> majoring
                        in <span className={'font-code text-xl'}>Computer Science</span> with a minor in
                        Entrepreneurship and Innovation. <br/><br/>
                        I’m passionate about tackling real-world problems that meaningfully impact others’ lives.
                        I’m proficient in C/C++, Java, Python, Swift, and React. I’ve worked with git and GitHub, and
                        Google’s Firebase Database.
                    </p>
                </div>
                <div
                    className={''}
                >
                    <h2
                        className={ headerStyle }
                    >
                        Projects
                    </h2>
                    <div
                        className={'p-3 h-fit flex gap-3'}
                    >
                        <div
                            className={'w-[2px] h-auto bg-gradient-to-b from-light-pink via-light-purple to-light-blue'}
                        >
                        </div>
                        <div
                            className={'flex flex-col gap-5 md:flex-wrap md:flex-row'}
                        >
                            { projects }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}