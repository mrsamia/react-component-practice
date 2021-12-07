import React from "react";
import "../style/nav.css";

const Nav1 = [
  {
    link: "#",
    name: "Home",
  },
  {
    link: "#",
    name: "Contact",
  },
];

const Nav2 = [
  {
    link: "#",
    name: "Home",
  },
  {
    link: "#",
    name: "Contact",
  },
  {
    link: "#",
    name: "About",
  },
  {
    link: "#",
    name: "About",
  },
];

function Navbar({ type = "" }) {
  // const items = type === 'nav1' ? Nav1 : Nav2
  let items;
  if (type === "nav1") {
    items = Nav1;
  } else {
    items = Nav2;
  }
  return (
    <div>
      <ul>
        {items.map((nav_item) => (
          <li>
            <a href={nav_item.link}>{nav_item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
