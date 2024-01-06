import { IconArrowRight } from "@/icons/IconArrowRight";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto py-36 text-center xl:text-left flex justify-center items-center h-full">
        <div className="flex flex-col w-full  max-w-[700px]">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 2 }}
            className="h2 text-center mb-12"
          >
            Let's <span className="text-primary">connect.</span>
          </motion.h2>
          <motion.form
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 4 }}
            action=""
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="input" className="input" />
              <input type="text" placeholder="input" className="input" />
            </div>
            <input type="text" placeholder="input" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-primary group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                let's talk
              </span>
              <IconArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
