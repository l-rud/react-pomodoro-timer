import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="app">
      {/* Header with text */}
      <header className="header">
        <h1>Pomodoro Timer</h1>
      </header>

      {/* Top menu items */}
      <nav className="top-menu">
        <ul>
        <li><Link to="/">Pomodoro work session</Link></li>
        <li><Link to="/short-break">Short break </Link></li>
        <li><Link to="/long-break">Long break</Link></li>
        </ul>
      </nav>

      {/* Main content area (centered outlet with left-aligned content) */}
      <main className="main-content">
        <div className="content">
          <Outlet/>
        </div>
      </main>
    </div>
    </>
  )
};

export default Layout;