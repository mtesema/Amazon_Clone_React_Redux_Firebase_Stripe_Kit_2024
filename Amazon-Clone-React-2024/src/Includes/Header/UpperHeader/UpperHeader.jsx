import React, { useContext } from "react";
import "./Stytle/UppperHeader.css";
import images from "../../../Resource/images";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../../Utility/StateProvider";
import { auth } from "../../../Utility/firebase/firebase";

function Header() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useContext(StateContext);

  const firstName = user?.displayName
    ? user.displayName.split(" ")[0]
    : "Sign in";

  const HomePageClickHandle = () => {
    navigate("/");
  };

  const CartPageClickHandle = () => {
    navigate("/cart");
  };

  const OrderPageClickHandler = () =>{
    navigate("/orders")
  }

 const handleSelectChange = (event) => {
   const selectedOption = event.target.value;

   if (selectedOption === "profile") {
     navigate("/signup");
   } else if (selectedOption === "login") {
     navigate("/login");
   } else if (selectedOption === "logout") {
     auth
       .signOut()
       .then(() => {
         dispatch({
           type: "EMPTY_BASKET",
         });
         dispatch({
           type: "SET_USER",
           user: null,
         });
         navigate("/signup");
       })
       .catch((error) => {
         console.error("Error signing out:", error.message);
       });
   }
 };

  return (
    <section>
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
              <p className="nav_user_name">Deliver to {firstName}</p>
              <p className="nav_user_address">Lorton 22079</p>
            </div>
          </div>
        </div>

        <div className="nav_middle_section">
          <select name="" id="">
            <option value="">All</option>
          </select>
      
          <input type="text" placeholder="Search Amazon" />
          <div className="nav_search_icon">
            <FaSearch size={20} />
          </div>
        </div>

        <div className="nav_left_side">
          <div className="nav_launuage_choice">
            <img src={images.Flag_icon} alt="" />
            <select className="lanuage_list" name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          <div className="account_list_wrapper">
            <div className="nav_top_discription px-1 text-white">
              Hello, {firstName}
            </div>
            <select
              className="nav_account_list"
              onChange={handleSelectChange}
              name=""
              id=""
            >
              <option value="">Account & List</option>
              <option value="login">Login</option>
              <option value="profile">Profile</option>
              <option value="logout">Logout</option>
            </select>
          </div>

          <div onClick={OrderPageClickHandler} className="account_list_wrapper">
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
  );
}

export default Header;
