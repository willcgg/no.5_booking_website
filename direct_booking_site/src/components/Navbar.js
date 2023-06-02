import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="dark:bg-cyan-900">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="flex items-center mx-auto">
          <Image
            priority={true}
            className="w-24 p-1 md:w-28 lg:w-36"
            src={Logo}
            alt="Logo"
          />
          <span className="font-extrabold p-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 text-xl ... md:text-3xl lg:text-5xl">
            Castleman Retreats
          </span>
        </div>
        <div className="flex place-content-center">
          <Link
            className="text-l p-3 hover:text-blue-400 md:text-xl lg:text-2xl"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-l p-3 hover:text-blue-400 md:text-xl lg:text-2xl"
            href="/about"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
