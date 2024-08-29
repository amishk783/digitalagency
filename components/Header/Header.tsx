import Image from "next/image";
import NavBar from "@/components/Header/NavBar";

export default function Header() {
  return (
    <section className="flex flex-row justify-between items-center mx-10 text-primary">
      <NavBar />
      <Image
        className="h-20 my-5 mr-52"
        src="/logo.png"
        alt="Logo"
        width={80}
        height={64}
      />
      <button className="px-10 py-2 m-10 bg-purple-700 rounded-full text-lg  text-white ">
        Purchase Theme
      </button>
    </section>
  );
}
