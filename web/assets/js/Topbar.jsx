function Topbar({ isAltColor, noLocationSelector }) {
    const { useState, useEffect } = React;
    const [logoEnUrl, setLogoEnUrl] = useState("./assets/images/logo-en.svg");
    const [logoTcUrl, setLogoTcUrl] = useState("./assets/images/logo-tc.svg");

    useEffect(() => {
        if (isAltColor) {
            setLogoEnUrl("./assets/images/logo-en-alt-color.svg");
            setLogoTcUrl("./assets/images/logo-tc-alt-color.svg");
        }
    }, [])

    function LocationSelector() {
        let result = (
            <div className="topbar__location">
                <figure className="topbar__map-pin-icon"><img src="./assets/images/map-pin-icon.svg" alt="地圖圖釘icon" />
                </figure>
                <p>雙北</p>
            </div>
        );
        if (noLocationSelector) {
            result = <></>;
        }
        return (
            result
        )
    }

    return <>
        <header id="topbar">
            <div className="topbar__start-box">
                <h1 className="logo">
                    <a href="./index.html">
                        <figure className="logo-en"><img src={logoEnUrl} alt="" /></figure>
                        <figure className="logo-tc"><img src={logoTcUrl} alt="" /></figure>
                    </a>
                </h1>
                <LocationSelector />
            </div>
            <div className="topbar__end-box">
                <nav className="navigation">
                    <ul className="topbar-menu">
                        <li className="topbar-menu__item">
                            <button type="button" className="topbar-menu__btn" id="topbar-search-btn">
                                <div className="topbar-menu__icon"><img src="./assets/images/search-icon.svg" alt="" /></div>
                                <p>找活動</p>
                            </button>
                        </li>
                        <li className="topbar-menu__item">
                            <button type="button" className="topbar-menu__btn" id="login-btn">
                                <div className="topbar-menu__icon"><img src="./assets/images/login-icon.svg" alt="" /></div>
                                <p>註冊/登入</p>
                            </button>
                        </li>
                        <li className="topbar-menu__item">
                            <button type="button" className="topbar-menu__btn" id="create-new-event-btn">
                                <div className="topbar-menu__icon"><img src="./assets/images/ticket-icon.svg" alt="" /></div>
                                <p>辦活動</p>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}