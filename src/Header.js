
function Header() {
    return (
      <div className="navbar-header">
        <nav className="navbar navbar-expand-md navbar-light bg-light navbar-home">
          <a className="navbar-brand" href="#">Pizzamania</a>
  
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> AboutPizza</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PizzaTypes</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;