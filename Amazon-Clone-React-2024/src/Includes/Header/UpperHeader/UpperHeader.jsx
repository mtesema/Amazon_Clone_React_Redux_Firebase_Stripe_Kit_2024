import React, { useContext, useState } from "react";
import { useGeolocated } from "react-geolocated";
import "./Stytle/UppperHeader.css";
import images from "../../../Resource/images";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../Utility/StateProvider";

function Header() {
  const Navigate = useNavigate();
  const [location, setLocation] = useState(null);



  const [{ basket }, dispatch] = useContext(StateContext);
  console.log(basket);

  const HomePageClickHandle = () => {
    Navigate("/");
  };

  const CartPageClickHandle = () => {
    Navigate("/cart");
  };

  const profilePageClickHandle = () => {
    Navigate("/signup");
  };

  return (
    <>
      <section>
        {/* Top Nav */}
        {/* Right Side */}
        <div className="nav-strip-wrapper text-white">
          <div className="nav_right_side">
            <div className="nav_logo">
              <img
                onClick={HomePageClickHandle}
                src={images.amazon_header_log}
                alt="Amazon Logo"
              />
            </div>
            <div className="nav_delivery_wrapper">
              <div>
                <GrLocation className="nav_delivery_icon" />
              </div>
              <div className="nav_delivery text-white">
                <p className="nav_user_name ">Deliver to Michael</p>
                <p className="nav_user_address ">Lorton 22079</p>
              </div>
            </div>
          </div>

          {/* Middle portion */}
          <div className="nav_middle_section">
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" placeholder="Search Amazon" />
            <div className="nav_search_icon">
              <FaSearch size={20} />
            </div>
          </div>

          {/* Left side */}
          <div className="nav_left_side">
            <div className="nav_launuage_choice">
              <img src={images.Flag_icon} alt="" />
              <select className="lanuage_list" name="" id="">
                <option value="">EN</option>
              </select>
            </div>
            <div className="account_list_wrapper">
              <div className="nav_top_discription px-1 text-white">
                Hello, Name
              </div>
              <select
                onClick={profilePageClickHandle}
                className="nav_account_list"
                name=""
                id=""
              >
                <option value="">Account&List</option>
              </select>
            </div>
            <div className="account_list_wrapper">
              <div className="nav_top_discription text-white">Returns </div>
              <div className="nav_bottom_discription">& Orders</div>
            </div>

            <div onClick={CartPageClickHandle} className="nav_cart">
              <div className="nav_cart_count_section">
                <span className="nav_cart_count">{basket.length}</span>
                <PiShoppingCartSimpleBold className="nav_cart_icon" />
              </div>
              <span>cart</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
