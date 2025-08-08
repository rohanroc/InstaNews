
const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" role="button" onClick={() => setCategory("general")}><span className="badge bg-light text-dark fs-5 p-1">InstaNews</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("technology")} role="button">Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("business")} role="button">Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("health")} role="button">Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("sports")} role="button">Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("science")} role="button">Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("entertainment")} role="button">Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
