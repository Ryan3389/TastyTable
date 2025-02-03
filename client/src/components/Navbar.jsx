

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
                    <Link to='/breakfast'>Breakfast</Link>
                    <Link to='/beef'>Beef</Link>
                    <Link to='/chicken'>Chicken</Link>
                    <Link to='/dessert'>Dessert</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar

