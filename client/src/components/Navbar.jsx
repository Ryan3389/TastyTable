// import { Link } from "react-router-dom"
// function Navbar() {
//     return (
<select name="categories" id="categories">
    <optgroup label="categories">
        <option value="Breakfast">Breakfast</option>
        <option value="Chicken">Chicken</option>
        <option value="Beef">Beef</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Dessert">Dessert</option>
    </optgroup>
</select>
//     )
// }

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
                    <Link to="/category">Categories</Link>
                    <Link to="/random">Random Recipe</Link>
                    <input type="search" aria-label="search" />
                    <button className="nav-search-btn">Search</button>
                </span>
            </nav>
        </header>
    )
}

export default Navbar