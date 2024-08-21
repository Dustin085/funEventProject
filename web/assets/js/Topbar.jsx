function Topbar() {
    return <>
        <header id="topbar">
            <div className="topbar__start-box">
                <h1 className="logo">
                    <a href="./index.html">
                        <figure className="logo-en"><img src="./assets/images/logo-en.svg" alt="" /></figure>
                        <figure className="logo-tc"><img src="./assets/images/logo-tc.svg" alt="" /></figure>
                    </a>
                </h1>
                <div className="topbar__location">
                    <figure className="topbar__map-pin-icon"><img src="./assets/images/map-pin-icon.svg" alt="地圖圖釘icon" />
                    </figure>
                    <p>雙北</p>
                </div>
            </div>
            <div className="topbar__end-box">
                <nav className="navigation">
                    <ul className="topbar-menu">
                        <li className="topbar-menu__item">
                            <div className="topbar-menu__icon"><img src="./assets/images/search-icon.svg" alt="" /></div>
                            <p>找活動</p>
                        </li>
                        <li className="topbar-menu__item">
                            <div className="topbar-menu__icon"><img src="./assets/images/login-icon.svg" alt="" /></div>
                            <p>註冊/登入</p>
                        </li>
                        <li className="topbar-menu__item">
                            <div className="topbar-menu__icon"><img src="./assets/images/ticket-icon.svg" alt="" /></div>
                            <p>辦活動</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}