Header(()=> {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
 
  }
 );
const root = document.getElementById("root");
ReactDOM.render(<Header />, root);

export default Header;