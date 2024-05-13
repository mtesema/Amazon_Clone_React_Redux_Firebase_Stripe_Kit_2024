import React from "react";
import { IoMenu } from "react-icons/io5";
import "./Stytle/LowerHeader.css";
function LowerHeader() {
  return (
    <div className="lower_container">
      <div className="nav_menu">
        <IoMenu />
        <p>All</p>
      </div>
      <ul>
        <li>
          <a href="">Same-day Delivery</a>
        </li>
        <li>
          <select name="" id="">
            <option value="">Medical Care</option>
          </select>
        </li>
        <li>
          <a href="">Prime Video</a>
        </li>

        <li>
          <a href=""> Householdm Health & Baby Care</a>
        </li>
        <li>
          <a href="">Pharmacy</a>
        </li>
        <li>
          <a href="">Livestreams</a>
        </li>
        <li>
          <a href="">Buy Again</a>
        </li>
        <li>
          <a href="">Coupons</a>
        </li>
        <li>
          <a href="">Subscribe & Save</a>
        </li>
        <li>
          <a href="">User's Choice</a>
        </li>
        <li>
          <a href="">Amazon Basic</a>
        </li>
        <li>
          <a href="">Amazon Home</a>
        </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
