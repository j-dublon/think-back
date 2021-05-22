import React from "react";
import useData from '../../data/useData';

const NavBar = () => {
  // ** ** ** ** HOOKS ** ** ** **
  const { currentPage } = useData();

  // ** ** ** ** LOCAL ** ** ** **
  const text = (currentPage === 'intro') ? 'SKIP INTRO' : 'END TASK';
  const link = (currentPage === 'intro') ? '/task' : '/end';

  // ** ** ** ** LOGIC ** ** ** **

  // ** ** ** ** RENDER ** ** ** **
  if (currentPage === 'home' || currentPage === 'end') return null;

  return (
    <nav>
      <a href={link} className="nav__button">{ text }</a>
    </nav>
  )
}

export default NavBar;
