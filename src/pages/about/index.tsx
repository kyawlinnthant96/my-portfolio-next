"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import { cn } from "@/utils";
import { IconReact } from "@/icons/IconReact";
import { IconNest } from "@/icons/IconNest";
import { IconNext } from "@/icons/IconNext";
import { IconExpress } from "@/icons/IconExpress";
import { IconTailwind } from "@/icons/IconTailwind";
import { IconFramer } from "@/icons/IconFramer";
import { IconScss } from "@/icons/IconScss";
import CountUp from "react-countup";
import Image from "next/image";
import { fadeIn } from "@/utils/variants";

const aboutData = [
  {
    title: "Skill",
    info: [
      {
        title: "Web Development",
        stage: "",
        icons: [
          { icon: <IconReact /> },
          { icon: <IconNext /> },
          { icon: <IconTailwind /> },
          { icon: <IconScss /> },
          { icon: <IconFramer /> },
          { icon: <IconNest /> },
          { icon: <IconExpress /> },
        ],
      },
    ],
  },
  {
    title: "Experiences",
    info: [
      {
        title: "Frontend Developer - Myanmar High Society",
        stage: "2022-2023",
        icons: [],
      },
      { title: "Frontend Developer - ILBC", stage: "2023-2023", icons: [] },
    ],
  },
  {
    title: "Credentials",
    info: [
      {
        title: "BA(Economics) - Yadanabone University",
        stage: "2014-2019",
        icons: [],
      },
      { title: "PGDCS - Yangon University", stage: "2020-2021", icons: [] },
      {
        title: "Professional Web Developer - Fairway Technology",
        stage: "2021-2022",
        icons: [],
      },
      { title: "DWD - YMax University", stage: "2021-2022", icons: [] },
      { title: "DICT - YMax University", stage: "2021-2022", icons: [] },
    ],
  },
];
console.log(fadeIn("up", 0.3));

const About = () => {
  const [itemIndex, setItemIndex] = useState(0);
  return (
    <div className="h-full text-center xl:text-left py-36 overflow-y-scroll">
      <div className="container mx-auto flex flex-col  items-center xl:flex-row gap-x-6 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-1 flex-col py-8 xl:py-0 justify-center"
        >
          <div className="relative  w-96 ml-6 h-60 animate-pulse">
            <Image
              src="/about-me.svg"
              alt={"myphoto"}
              className="inline-block"
              fill
            />
          </div>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-12 xl:px-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            amet animi, at atque blanditiis corporis, cumque dolore doloremque
            exercitationem in obcaecati odit praesentium quo repudiandae saepe
            similique temporibus voluptatem voluptatibus.
          </p>
          <div className="hidden md:flex md:max-w-xl xl:max-w-none">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-primary mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs tracking-[1px] uppercase leading-[1.4] md:mx-0 mx-auto max-w-[100px]">
                  Year of experiences
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] ">
                <div className="text-2xl xl:text-4xl font-extrabold text-primary mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs tracking-[1px] uppercase leading-[1.4] md:mx-0 mx-auto max-w-[100px]">
                  Finished Project
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0",
                  index === itemIndex &&
                    "text-primary after:w-[100%] after:bg-primary after:transition-all after:duration-300",
                )}
                onClick={() => setItemIndex(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[itemIndex].info.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col gap-x-2 gap-y-2 md:flex-row max-w-max
                items-center text-white/60"
                >
                  <div className="">{item.title}</div>
                  <div className="md:flex hidden">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item?.icons?.map((icon) => (
                      <div className="text-2xl text-white">{icon.icon}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
