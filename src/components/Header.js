import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                    {/* Link 는 html의 a 태그와 같다 to 는 href 와 같다. */}
                    <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        로고
                    </NavLink>

                    <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                        {/* NavLink 는 a 태그와 같으며 isActive 가 있어서 css 포커스가 적용되는 방식 */}
                        {/* isActive 는 URL를  비교하여 Reutes 의 path 경로와 같으면 isActive 가 treu */}
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-white";
                                }}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-white";
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/member"
                                className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-white";
                                }}
                            >
                                Mamber
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/songlist"
                                className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-white";
                                }}
                            >
                                SongList
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/songbird"
                                className={({ isActive }) => {
                                    return isActive ? "nav-link px-2 text-warning" : "nav-link px-2 text-white";
                                }}
                            >
                                Index
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
