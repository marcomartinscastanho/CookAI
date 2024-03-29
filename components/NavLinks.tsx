import Link from "next/link";
import React from "react";

const links = [
  { href: "/recipes", label: "recipes" },
  { href: "/new-ai-recipe", label: "new AI recipe" },
];

const NavLinks = () => {
  return (
    <ul className="menu text-base-content gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="capitalize text-lg">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
