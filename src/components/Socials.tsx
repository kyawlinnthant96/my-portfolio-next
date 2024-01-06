import React from "react";
import Link from "next/link";
import { IconLinkedIn } from "@/icons/IconLinkedIn";
import { IconFacecbook } from "@/icons/IconFacecbook";
import { IconGithub } from "@/icons/IconGithub";

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.linkedin.com/in/kyaw-linn-thant-336670198/"
        target="_blank"
        className="hover:text-primary transition-all duration-300"
      >
        <IconLinkedIn className="w-5 h-5" />
      </Link>{" "}
      <Link
        href="https://www.facebook.com/falcon.6/"
        target="_blank"
        className="hover:text-primary transition-all duration-300"
      >
        <IconFacecbook className="w-5 h-5" />
      </Link>
      <Link
        href="https://github.com/kyawlinnthant96"
        target="_blank"
        className="hover:text-primary transition-all duration-300"
      >
        <IconGithub className="w-5 h-5" />
      </Link>
    </div>
  );
};
export default Social;
