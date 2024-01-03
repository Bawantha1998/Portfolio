import React from 'react';

const About = () => {
  return (
    <>
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
        <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="relative font-bold">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">About me</h1>
        </div>
        <div className="text-slate-500">
            <p>Lorem ipsum dolor sit amet. e velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
            <p>Lorem ipsum dolor sit amet,labore et dolore magna aliqua.</p>
            <div>
                <a href="#" className="primary-btn inline-block my-6 mr-6">{''}Download Resume</a>
                <a href="+94762320104" className="outline-btn inline-block">{''}Contact</a>
            </div>
        </div>
        </div>
        </div>
    </section> 
    </>
  )
}

export default About
