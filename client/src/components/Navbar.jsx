

// export default Navbar
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <header>
            <nav>
                <span className="nav-title">
                    <Link to="/">
                        <p>TastyTable</p>
                    </Link>
                </span>
                <span className="nav-links">
                    <Link to={`/recipe?category=${encodeURIComponent('breakfast')}`}>Breakfast</Link>
                    <Link to={`/recipe?category=${encodeURIComponent('beef')}`}>Beef</Link>
                    <Link to={`/recipe?category=${encodeURIComponent('chicken')}`}>Chicken</Link>
                    <Link to={`/recipe?category=${encodeURIComponent('dessert')}`}>Dessert</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar

