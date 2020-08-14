import React from "react";
import "./Header.css";
import AlbumTitle from "../../components/album-title/AlbumTitle";

function Header(props) {
  return (
    <div className="Header">
      <div>
        <AlbumTitle />
        <h2>The new release from Beasley the Bard</h2>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/beasley.png"
          alt="Beasley the Bard"
        ></img>
      </div>
    </div>
  );
}

export default Header;
