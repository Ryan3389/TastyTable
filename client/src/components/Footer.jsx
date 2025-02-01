import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p>TastyTable</p>
                <span className="footer-links">
                    <Link to="/">Home</Link>
                    <Link target="_blank" to="https://github.com/Ryan3389">GitHub</Link>
                    <Link target="_blank" to="https://ryancuthbert.netlify.app/">Portfolio</Link>
                </span>
                <p>Copyright &copy; 2025 Ryan Cuthbert</p>

            </div>
        </footer>
    )
}

export default Footer