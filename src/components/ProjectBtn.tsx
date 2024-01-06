"use client";
import React from "react";
import { IconArrowRight } from "@/icons/IconArrowRight";
import { useRouter } from "next/navigation";

const ProjectBtn = () => {
  const router = useRouter();
  return (
    <div className="mx-auto xl:mx-0">
      <div
        className="w-[240px] group flex items-center rounded-xl custom-shadow justify-center py-[10px] px-[20px] bg-white cursor-pointer text-secondary"
        onClick={() => router.push("/work")}
      >
        <h3 className="font-semibold text-xl">My Work</h3>
        <IconArrowRight className="text-4xl  group-hover:translate-x-2 transition-all duration-300 " />
      </div>
    </div>
  );
};
export default ProjectBtn;
