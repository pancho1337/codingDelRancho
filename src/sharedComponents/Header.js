import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/">Home</Link> <br />
                <Link to="/module">Module</Link> <br />
                <Link to="/module/quiz">Quiz</Link> <br />
                <Link to="/module/toy-problem">Toy Problem</Link> <br />
                <Link to="/module/lecture">Lecture</Link> <br />
                <Link to="/module/project">Project</Link> <br />
            </nav>
            <div className="header__item">
                login
            </div>
        </header>
    )
};

export default Header;