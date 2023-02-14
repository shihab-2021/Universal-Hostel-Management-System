import Link from "next/link";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";

export default function Navbar() {
  const [menu, setMenu] = useState("left-full");
  const [menuIcon, setMenuIcon] = useState(true);
  const handleMenu = () => {
    menu == "left-0" ? setMenu("left-full") : setMenu("left-0");
    setMenuIcon(!menuIcon);
  };

  return (
    <div className="Navbar w-screen bg-color2 flex justify-center fixed top-0 z-30">
      {menuIcon && (
        <button onClick={handleMenu} className="absolute left-1 top-0 ">
          <MdOutlineMenu size={"40px"} />
        </button>
      )}
      {!menuIcon && (
        <button onClick={handleMenu} className="absolute left-1 top-0">
          <MdOutlineMenuOpen size={"40px"} />
        </button>
      )}
      <h1 className="my-auto py-2">Title</h1>
      <div
        className={`menu flex flex-col fixed top-10 h-screen bg-color2 ${menu} gap-2 p-2`}
      >
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/rooms"}>Rooms</Link>
        <Link href={"#"}>Meal Plan</Link>
        <Link href={"#"}>Laundry Time</Link>
        <Link href={"#"}>Payment</Link>
        <Link href={"#"}>Blog</Link>
        <Link href={"#"}>Log Out</Link>
      </div>
    </div>
  );
}
