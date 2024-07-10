import bawanthapdf from "../../assets/Bawantha.pdf";
import download from "downloadjs";

const About = () => {
  const handleDownload = () => {
    // Trigger the download using downloadjs
    download(bawanthapdf);
    console.log(bawanthapdf);
  };

  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="relative font-bold">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
              As a Full Stack Web Developer, I specialize in creating seamless
              and user-friendly web applications. My expertise spans both
              front-end and back-end technologies, allowing me to design and
              implement robust solutions. With a keen eye for detail and a
              passion for innovation, I bring a dynamic approach to every
              project.
            </p>
            <br />
            <p>
              Explore my portfolio to see how I blend creativity with technical
              proficiency to deliver impactful digital experiences.
            </p>
            <div>
              {/* <a href="" className="primary-btn inline-block my-6 mr-6">{''}Download Resume</a> */}
              <button
                className="primary-btn inline-block my-6 mr-6"
                onClick={handleDownload}
              >
                Download Resume
              </button>
              <a href="+94762320104" className="outline-btn inline-block">
                {""}Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
