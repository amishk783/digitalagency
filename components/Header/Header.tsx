import Image from "next/image";
import NavBar from "@/components/Header/NavBar";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <section className="flex flex-row-reverse md:flex-row justify-between items-center mx-10 text-primary">
      <NavBar />
      <Menu className="lg:hidden" />
      <Image
        className="h-20 my-5 xl:mr-52"
        src="/logo.png"
        alt="Logo"
        width={80}
        height={64}
      />
      <button className="px-5 lg:px-10 hidden md:block py-2 m-10 bg-purple-700 rounded-full text-lg  text-white ">
        Purchase Theme
      </button>
    </section>
  );
}
