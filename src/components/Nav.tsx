import { IconAlignJustify } from "@/icons/IconAlignJustify";
import { IconChatSquare } from "@/icons/IconChatSquare";
import { IconEnvalope } from "@/icons/IconEnvalope";
import { IconHome } from "@/icons/IconHome";
import { IconUser } from "@/icons/iconUser";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData = [
  {
    name: "home",
    path: "/",
    icon: <IconHome className="w-6 h-6 " />,
  },
  { name: "about", path: "/about", icon: <IconUser className="w-6 h-6 " /> },
  /* {
    name: "services",
    path: "/services",
    icon: <IconServices className="w-6 h-6 " />,
  },*/
  {
    name: "work",
    path: "/work",
    icon: <IconAlignJustify className="w-6 h-6 " />,
  },
  /*{
    name: "testimonials",
    path: "/testimonials",
    icon: <IconChatSquare className="w-6 h-6 " />,
  },*/
  {
    name: "contact",
    path: "/contact",
    icon: <IconEnvalope className="w-6 h-6 " />,
  },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed mt-auto h-max bottom-0 xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 bg-secondary h-[80px] py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full xl:h-max">
        {navData.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={clsx(
              link.path === pathname && "text-primary",
              "relative flex group items-center hover:text-primary transition-all duration-300",
            )}
          >
            {/* tooltips */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-secondary relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/*  triangle */}
                <div className="border-solid border-l-secondary border-l-8 border-y-transparent border-y-[6px] absolute -right-2" />
              </div>
            </div>
            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
