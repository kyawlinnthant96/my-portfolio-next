import Link from "next/link";
import Image from "next/image";
import Social from "./Socials";

const Header = () => {
  return (
    <header className="absolute md:bg-none bg-site bg-no-repeat bg-cover bg-center z-20 w-full flex items-center xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-6 py-8">
          <Link href="/">
            <Image
              src="/mylogo.png"
              alt="logo"
              width={220}
              height={48}
              priority={true}
            />
          </Link>
          {/* Social */}
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
