import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from "../logo.svg";
import { routes } from "./routes";
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo" />
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" className={({ isActive }) => isActive ? "nav-active" : ""}>Users</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<ShoppingPage />} />
                        <Route path="/about" element={<div>About</div>} />
                        <Route path="/users" element={<div>Users</div>} />

                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

/*

<Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo" />
                        <ul>
                            {
                                routes.map(route => (
                                    <li>
                                        <NavLink to={route.to} className={({ isActive }) => isActive ? "nav-active" : ""}>{route.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ path, Component }) => (
                                <Route path={path} element={<Component />} />
                            ))
                        }

                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>

*/