// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      {/* text */}
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)} // direction, delay
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1">
            Transforming Ideas <br />
            Into <span className="text-accent"> Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)} // direction, delay
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-xs md:text-base text-balance">
            Hi, ich bin Stefan aus Potsdam, ein leidenschaftlicher Web-Entwickler spezialisiert auf React [Next.js] und Angular.<br /><br />
            Mit Kreativität und Präzision entwickle ich benutzerfreundliche und ansprechende Webanwendungen.
            Lass uns gemeinsam dein nächstes Projekt verwirklichen!
          </motion.p>

          {/* projects btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)} // direction, delay
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex z-10">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-full max-w-[1300px] h-full absolute right-0 bottom-0">

        {/* bg image */}
        <div className="bg-explosion bg-contain xl:bg-cover bg-right-bottom bg-no-repeat 
         w-full h-full absolute bottom-0 mix-blend-color-dodge translate-z-0" style={{ maxHeight: '1000px' }}>
        </div>

        {/* particles */}
        <ParticlesContainer />

        {/* avatar img*/}
        <motion.div
          variants={fadeIn('up', 0.5)} // direction, delay
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'ease-in-out' }}
          className="w-full h-full max-w-[773px] max-h-[773px] absolute -bottom-32 lg:bottom-0
           lg:right-[2%] 2xl:right-[7%] grayscale-[20%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
