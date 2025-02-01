import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p>TastyTable</p>
                <span className="footer-links">
                    <Link>Home</Link>
                    <Link>GitHub</Link>
                    <Link>Portfolio</Link>
                </span>
                <p>Copyright &copy; 2025 Ryan Cuthbert</p>

            </div>
        </footer>
    )
}

export default Footer