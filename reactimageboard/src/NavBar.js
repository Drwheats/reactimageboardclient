import {Link, useMatch, useResolvedPath} from "react-router-dom";


export default function NavigationBar() {


    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img className="logoBen" alt="bdplogo" src={"/bendotplace.png"} /> </Link>
            <ul className="navIconHolder">
                <CustomLink to="/"><img className="navIcon" alt="homelogo" src="/homeicon.png" /> </CustomLink>
                {/*<CustomLink to="/Mons"><img className="navIcon" alt="moguslogo" src="/amoguscircle.png" /></CustomLink>*/}
                {/*<CustomLink to="/calendar"><img className="navIcon" alt="userLogo" src="/cameraicon.png" /> </CustomLink>*/}
                <CustomLink to="/about"><img className="navIcon" alt="questionlogo" src="/questionmark.png" /> </CustomLink>
                {/*<a href={"https://github.com/drwheats/" }><img className="navIcon" alt="githublogo" src="/gitcat.png" /> </a>*/}

                {/*<CustomLink to="/scores">HighScores</CustomLink>*/}
            </ul>
        </nav>)
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>

        </li>
    )
}

