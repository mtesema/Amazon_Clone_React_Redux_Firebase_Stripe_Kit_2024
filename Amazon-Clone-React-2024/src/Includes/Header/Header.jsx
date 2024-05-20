import React from "react";
import UpperHeader from "./UpperHeader/UpperHeader";
import LowerHeader from "./LowerHeader/LowerHeader";

import "./Style/Header.css";

function Header() {
  return (
    <>
      <section className="upper-header">
        {/* Upper Header  */}
        <UpperHeader />
      </section>

      <section className="lower-headern">
        {/* Lower Header */}
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
