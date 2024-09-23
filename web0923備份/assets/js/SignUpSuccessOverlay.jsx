function SignUpSuccessOverlay({ isActive = false }) {
    const { useState, useEffect } = React;
    const [countDown, setCountDown] = useState(3);
    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                location.href = "./member-center-my-ticket.html";
            }, 3500);
        }
    }, [isActive]);
    useEffect(() => {
        if (countDown > 0 && isActive) {
            setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000);
        }
    }, [isActive, countDown]);
    if (!isActive) {
        return <></>;
    }
    return <>
        <div className="signup-overlay" ></div>
        <div className="successful-overlay">
            <div className="login">
                <div className="successful-all">
                    <div className="successful-correcct"></div>
                    <h3 className="login-text">已報名成功</h3>
                    <p className="login-text">訂單編號:TEST20240920</p>
                </div>
            </div>
            <div className="timer"><p><span className="count-down-text">{countDown}</span>秒後將跳轉到我的票卷</p></div>
            <div className="split-line-row-hr"></div>
            <div className="successful-text">
                <p className="successful">如要確認訂單明細，請至會員中心</p>

                <div className="successful-one">
                    <p><a href="./member-center-my-ticket.html" className="successful-link">我的票卷</a></p>
                    <p>查看</p>
                </div>
            </div>
            <button className="SignUp-successful" onClick={() => { location.href = "./member-center-my-ticket.html" }}>取得電子票</button>
        </div>
    </>
}