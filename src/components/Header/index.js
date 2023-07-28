import React from 'react';
import coverImage from '../../assets/cover/pexels-free-nature-stock-567584.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1 class="px-1">Cheryl</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
