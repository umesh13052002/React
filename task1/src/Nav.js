import "./app.css"
function Nav() {
  return (
    <div>
      <nav className="navBar">
        <img src="brand_logo.png" alt="logo" width={90} height={50}></img>
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button type="button">LogIn</button>
      </nav>
    </div>
  );
}

export default Nav;
