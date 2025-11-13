import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="" className="text-white text-2xl xl:text-3xl font-bold flex items-center uppercase">
      <Image src="/assets/logo-lightgreen.png" alt="Logo" width={55} height={48} />
      <span className="font-light ml-2 text-xl xl:text-2xl">autoservis</span>
      <span className="text-accent text-xl xl:text-2xl">jablonec</span>
    </Link>
  );
};

export default Logo;
