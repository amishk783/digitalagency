import Link from "next/link";

interface LinkItem {
  name: string;
  navlink: string;
}

const links: LinkItem[] = [
  { name: "demos", navlink: "./demos" },
  { name: "Features", navlink: "./demos" },
  { name: "Documentation", navlink: "./demos" },
  { name: "Support", navlink: "./demos" },
];

export default function NavBar() {
  return (
    <div className=" text-lg text-primary">
      <ul className="flex md:flex-row p-5 m-2">
        {links.map((link) => (
          <li className="px-3 py-3" key={link.name}>
            <Link key={link.name} href={link.navlink}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
