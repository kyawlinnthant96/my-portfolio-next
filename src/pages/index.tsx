import ParticlesContainer from "@/components/ParticlesContaier";
import ProjectBtn from "@/components/ProjectBtn";
import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full mx-auto container">
          <h1 className="h1">
            Transforming Ideas <br /> Into{" "}
            <span className="text-primary">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            dignissimos doloremque labore laborum, minima nihil non quaerat
            vitae? Aliquam aliquid et, ex facilis natus perspiciatis
            repellendus. Accusantium ducimus non placeat!
          </p>
          <div className="flex z-20 justify-center xl:hidden">
            <ProjectBtn />
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 2 }}
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 2 }}
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-[50vw] bottom-0 right-4 h-[600px] absolute mix-blend-color-dodge translate-z-0"
        />
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
