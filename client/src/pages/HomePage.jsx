import { Link } from "react-router-dom"
function HomePage() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <article className="main-content">
                    <h1>Discover Delicious <br /> Recipes in Seconds!</h1>
                    <p>Search recipes, filter by category, or let us surprise you!</p>
                    <span className="main-buttons">
                        <Link>Find Recipes</Link>
                        <Link>Surpise Me</Link>
                    </span>
                </article>
            </div>
        </section>
    )
}

export default HomePage