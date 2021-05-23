import React from "react";
import useData from '../../data/useData';

const NavBar = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { currentPage } = useData();

  // ** ** ** ** LOCAL ** ** ** **
  const text = (currentPage === 'intro') ? 'START AGAIN' : 'END TASK';

  // ** ** ** ** LOGIC ** ** ** **

  // ** ** ** ** RENDER ** ** ** **
  if (currentPage === 'home' || currentPage === 'end') return null;

  return (
    <nav>
      <a href='/' className="nav__button">{ text }</a>
    </nav>
  )
}

export default NavBar;
