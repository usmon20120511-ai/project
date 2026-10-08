import logo from "../../assets/Logo (2).svg";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="container flex justify-between items-center text-center px-5">
      <NavLink to={"/"}>
        <img className="hover:bg-[#F58A07]" src={logo} alt="" />
      </NavLink>
      <nav className="flex gap-5 items-center">
        <NavLink to={"/about"}>
          <h2 className="hover:text-[#F58A07]">About</h2>
        </NavLink>
        <NavLink to={"/careers"}>
          <h2 className="hover:text-[#F58A07]">Careers</h2>
        </NavLink>
        <NavLink to={"/service"}>
          <h2 className="hover:text-[#F58A07]">Service</h2>
        </NavLink>
        <NavLink to={"/blog"}>
          <h2 className="hover:text-[#F58A07]">Blog</h2>
        </NavLink>
        <NavLink to={"/contactus"}>
          <h2 className="hover:text-[#F58A07]">Contact Us</h2>
        </NavLink>

        <NavLink to={"/cloneproject"}>
          <button className="bg-[#F58A071A] hover:bg-[#F58A07] text-[#F58A07] w-43 h-13 rounded-[31px]">
            Clone project
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
