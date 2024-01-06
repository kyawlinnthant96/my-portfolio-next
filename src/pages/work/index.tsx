import { motion } from "framer-motion";
import WorkSlider from "@/components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full  py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex xl:flex-row py-36 flex-col gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="h2 xl:mt-8"
            >
              My work<span className="text-primary">.</span>
            </motion.h2>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 2 }}
              className="mb-4 duration-400 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto assumenda deleniti dignissimos dolorum eaque enim est
              et illum, molestiae mollitia, placeat, saepe sed similique veniam
              veritatis! Eum necessitatibus quod vel.
            </motion.h2>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 2 }}
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
