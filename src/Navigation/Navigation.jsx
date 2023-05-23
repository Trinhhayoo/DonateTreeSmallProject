import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




import "./Navigation.css";

function Navigation() {

 

  

  const menuItems = [
    'Chân Mày', 'Môi', 'Triệt Lông', 'Trị Mụn', 'Chăm Sóc Da', 'Về chúng tôi'
  ];
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const [HEADER, setHEADER] = useState("");
  useEffect(() => {
    if (splitLocation[1] === "") {
      setHEADER("PHƯƠNG UYÊN NGUYỄN SPA");
    } else if (splitLocation[1] === "chanmay") {
      setHEADER("PHUN XĂM CHÂN MÀY THẨM MỸ");

    }
    else if (splitLocation[1] === "moi") {
      setHEADER("PHUN XĂM MÔI THẨM MỸ");

    }

  }, [splitLocation[1]]);


  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }


  return (
    <div>
      <nav>
        <div className="Navigation-container">
          <div className="categories">
            <ul className="menu">

             
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/chanmay">AboutUs</Link>
              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/moi">Achievements</Link>

              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/trietlong">Projects</Link>

              </li>
              <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/trimun">SignUp</Link>

              </li>
            
              {/* <li className="left-menu">
                <Link activeStyle={{ color: '#5754a8' }} to="/chanmay">Về Chúng Tôi</Link>

              </li> */}
              <li className="left-menu border-tv">
                <Link activeStyle={{ color: '#5754a8' }} onClick={handleScroll}>Tư Vấn</Link>

              </li>
              
            </ul>
          </div>
          {/* </div> */}
          {/* </header> */}



        </div>

      </nav>
    
    
    </div>
  );
}

export default Navigation;