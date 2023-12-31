import React from "react";
import logo from "./logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="hidden font-bold lg:flex gap-x-4">
            <Link to={"/"} className="text-black hover:text-darkBlue">
              Tổng quan
            </Link>
            <Link to={"/search"} className="text-black hover:text-darkBlue">
              Tìm kiếm
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-black">
          <a href="." className="hover:text-darkBlue">
            Đăng nhập
          </a>
          <a
            href="."
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Đăng ký
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
