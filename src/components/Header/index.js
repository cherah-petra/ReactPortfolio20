import React from 'react';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <div class="col-12 d-flex justify-content-center align-items-center h-100"><h1 class="text-center p-3">cheryl</h1></div>
      
      {props.children}
    </header>
  );
}

export default Header;
