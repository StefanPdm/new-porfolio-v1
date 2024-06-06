//components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return <div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* text */}
        <div className="text-center lg:text-left flex flex-col xl:w-[30vw] mb-4 xl:mb-0">
          <motion.h2 variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit='hidden' className="h2 xl:mt-0">
            My services
            <span className="text-accent">.</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit='hidden' className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum ipsam dicta
            ullam doloremque debitis quidem quisquam ipsa reiciendis voluptates. Aliquam facere
            expedita inventore fugiat minus amet, suscipit a neque!
          </motion.p>
        </div>
        {/* slider */}
        <motion.div variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit='hidden' className="w-full xl:max-w-[65%] pr-0 xl:skills-pr" >
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;
