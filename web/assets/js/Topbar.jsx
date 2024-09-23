function Topbar({ isAltColor, noLocationSelector, isSearchDrawerActiveProp = false, setIsSearchDrawerActiveProp = null }) {
    const { useState, useEffect } = React;
    const [logoEnUrl, setLogoEnUrl] = useState("./assets/images/logo-en.svg");
    const [logoTcUrl, setLogoTcUrl] = useState("./assets/images/logo-tc.svg");
    const [isLoginBoardActive, setIsLoginBoardActive] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isSearchDrawerActive, setIsSearchDrawerActive] = useState(isSearchDrawerActiveProp);
    useEffect(() => {
        // logo改換成另外色
        if (isAltColor) {
            setLogoEnUrl("./assets/images/logo-en-alt-color.svg");
            setLogoTcUrl("./assets/images/logo-tc-alt-color.svg");
        }

        // 判斷是否登入
        setIsLogin(localStorage.getItem("isLogin"));
    }, []);

    // 將props和內部的state同步
    useEffect(() => {
        setIsSearchDrawerActive(isSearchDrawerActiveProp);
    }, [isSearchDrawerActiveProp]);

    // 同步父元件的state
    useEffect(() => {
        if (setIsSearchDrawerActiveProp) {
            setIsSearchDrawerActiveProp(isSearchDrawerActive);
        }
    }, [isSearchDrawerActive]);

    // 登入按鈕事件處理
    const loginBtnClickHandler = () => {
        // location.href = "./member-center-my-ticket.html";
        setIsLoginBoardActive(true);
    };

    // 會員按鈕處理
    const memberCenterBtnClickHandler = () => {
        location.href = "./member-center-account-manage.html";
    };

    // 抽屜開啟時必定是白色logo，否則就依照isAltColor做判斷
    const checkLogoColor = () => {
        if (!isSearchDrawerActive) {
            setLogoEnUrl("./assets/images/logo-en.svg");
            setLogoTcUrl("./assets/images/logo-tc.svg");
        } else {
            if (isAltColor) {
                setLogoEnUrl("./assets/images/logo-en-alt-color.svg");
                setLogoTcUrl("./assets/images/logo-tc-alt-color.svg");
            }
        }
    };

    // 搜尋按鈕事件處理
    const searchBtnClickHandler = () => {
        setIsSearchDrawerActive(!isSearchDrawerActive);
        checkLogoColor();
        // location.href = "./search.html";
    };

    // 關閉搜尋抽屜
    const closeSearchDrawerHandler = () => {
        setIsSearchDrawerActive(false);
        checkLogoColor();
    };

    // 處理漂浮按鈕盒子的顯示與否
    useEffect(() => {
        if (isSearchDrawerActive) {
            hideFloatBtnBox();
        } else {
            showFloatBtnBox();
        }
    }, [isSearchDrawerActive]);

    const showFloatBtnBox = () => {
        $(".float-btn-box").stop().fadeIn();
    };

    const hideFloatBtnBox = () => {
        $(".float-btn-box").stop().fadeOut();
    };

    // 關閉overlay處理
    const closeOverlayHandler = (ev) => {
        // console.log(ev);
        setIsLoginBoardActive(false);
    }


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
            <SearchDrawer isActive={isSearchDrawerActive} closeSearchDrawerHandler={closeSearchDrawerHandler} />
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
                            <button type="button" className="topbar-menu__btn" id="topbar-search-btn" onClick={searchBtnClickHandler}>
                                <div className="topbar-menu__icon"><img src="./assets/images/search-icon.svg" alt="" /></div>
                                <p>找活動</p>
                            </button>
                        </li>
                        <li className="topbar-menu__item">
                            {
                                isLogin ? <MemberCenterBtn memberCenterBtnClickHandler={memberCenterBtnClickHandler} /> : <LoginBtn loginBtnClickHandler={loginBtnClickHandler} />
                            }
                            {/* <button type="button" className="topbar-menu__btn" id="login-btn" onClick={loginBtnClickHandler}>
                                <div className="topbar-menu__icon"><img src="./assets/images/login-icon.svg" alt="" /></div>
                                <p>註冊/登入</p>
                            </button> */}
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
            <LoginOverlay isActive={isLoginBoardActive} closeOverlayHandler={closeOverlayHandler} />

        </header>
    </>
}

function LoginBtn({ loginBtnClickHandler }) {
    return <>
        <button type="button" className="topbar-menu__btn" id="login-btn" onClick={loginBtnClickHandler} >
            <div className="topbar-menu__icon"><img src="./assets/images/login-icon.svg" alt="" /></div>
            <p>註冊/登入</p>
        </button>
    </>
}

function MemberCenterBtn({ memberCenterBtnClickHandler }) {
    return <>
        <button type="button" className="topbar-menu__btn" id="member-center-btn" onClick={memberCenterBtnClickHandler} >
            <div className="topbar-menu__icon"><img src="./assets/images/login-icon.svg" alt="" /></div>
            <p>你好，王曉明</p>
        </button>
    </>
}

function LoginOverlay({ isActive = false, closeOverlayHandler }) {
    // 登入按鈕處理程式，暫時先直接進入會員中心
    const loginBtnHandler = () => {
        // 登入，目前未有判斷
        localStorage.setItem("isLogin", "true");
        // 重新整理
        location.reload();
        // closeOverlayHandler();
        // location.href = "./member-center-account-manage.html";
    };
    const inputRef = useRef(null);

    useEffect(() => {
        $(inputRef.current).focus();
    }, []);

    if (!isActive) {
        return <></>;
    }
    return <>
        <div className="login-overlay" onClick={closeOverlayHandler}></div>
        <div className="login-board">
            <button type="button" className="close-btn" onClick={closeOverlayHandler}></button>
            <form className="login">
                <div className="login-text-all">
                    <h3 className="login-text">登入/註冊</h3>
                    <p className="login-text">立即登入，隨時收到獨家優惠</p>
                </div>
                <div className="email-and-phone">
                    <p style={{ color: "var(--primary-2)", fontWeight: "bold" }}><a href="#"></a>電子信箱</p>
                    <p><a href="#"></a>手機號碼</p>
                </div>
            </form>
            <div className="split-line-row-hr"></div>
            <form className="login">
                <div className="email-icon-input">
                    <input className="email-input" type="text" placeholder="請輸入電子信箱" ref={inputRef} onKeyUp={(ev) => { ev.key === "Enter" ? loginBtnHandler() : null }} />
                    <div className="e-mail"></div>
                </div>
                <button type="button" className="login-btn" onClick={loginBtnHandler}>傳送驗證碼</button>
                <small> <a href="#"></a>或使用手機號碼登入</small>
            </form>

            <div className="quick-login-all">
                <div className="quick-login">
                    <hr /><span>快速登入</span>
                    <hr />
                </div>
                <div className="social-media">
                    <div className="google"></div>
                    <div className="line"></div>
                    <div className="apple"></div>
                    <div className="facebook"></div>
                </div>
            </div>
            <small className="social-media-info">註冊或登入即表示您了解並同意FunEvent服務條款與隱私權政策</small>
        </div>

    </>
}

function SearchDrawer({
    isActive,
    tags = ["吉他", "游泳", "程式設計", "AI新技術", "戶外教學", "親子同樂", "夏日營隊", "森林探險", "益智動腦", "周末限定", "小小職人", "語言學習", "水上活動"],
    closeSearchDrawerHandler }) {
    const { useState, useEffect, useRef } = React;
    const [userSearchText, setUserSearchText] = useState("");
    const searchDrawerRef = useRef(null);
    const searchInputRef = useRef(null);
    useEffect(() => {
        let transitionTime = 350;
        if (isActive) {
            $(searchDrawerRef.current).show();
            $(searchDrawerRef.current).animate({ left: 0, borderRadius: "0%" }, transitionTime);
            $(searchInputRef.current).focus();
        } else {
            $(searchDrawerRef.current).animate({ left: "100%", borderRadius: "50%" }, transitionTime);
            setTimeout(() => {
                $(searchDrawerRef.current).hide();
            }, transitionTime);
        }
    }, [isActive]);
    // 搜尋處理程式，放置到要搜尋的地方就可以直接用了，會使用userSearchText做搜尋
    const onSearchHandler = () => {
        // 挑轉到搜尋頁
        location.href = "./search.html?" + "search_query=" + userSearchText;
    };

    return <>
        <div className="search-drawer" ref={searchDrawerRef}>
            <div className="wrap">
                <div className="input-box">
                    <input type="text" className="search-drawer-search-bar" placeholder="推薦活動名字"
                        value={userSearchText}
                        onChange={(ev) => { setUserSearchText(ev.target.value) }}
                        onKeyUp={(ev) => { ev.key === "Enter" ? onSearchHandler() : null }}
                        ref={searchInputRef}
                    />
                    <button type="button" className="close-search-drawer-btn" onClick={closeSearchDrawerHandler}></button>
                </div>
                <div className="tag-box">
                    {
                        tags.map((tagText, index) => {
                            return <FuneventTag key={index} tagText={tagText} />
                        })
                    }
                </div>
            </div>
        </div>
    </>
}