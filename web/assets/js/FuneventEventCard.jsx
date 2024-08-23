// funevent活動卡片元件
// TODO => 使用props來控制活動資訊
function FuneventEventCard(props) {
    {/*所需的props有：tnImgUrl, */ }
    let tnImgUrl = props.tnImgUrl;
    let stateTag = <></>;

    return <>
        <div className="funevent-event-card">
            <a href="./event/event.html" className="event-pic"
                style={{ backgroundImage: `url(${tnImgUrl})` }}>
                <div className="inner-card">
                    <div className="start-box">
                        <div className="tag tag--hot">熱門</div>
                        <button type="button" className="fav-btn"></button>
                    </div>
                    <div className="date">
                        <p>2024.08.11(六) 10:00</p>
                    </div>
                </div>
            </a>
            <div className="main-content">
                <p className="category">戶外運動</p>
                <h2 className="event-title"><a href="./event/event.html">【夏日營隊】戶外平衡競走大挑戰，四大主題等你來挑戰！</a></h2>
                <div className="location">
                    <div className="map-pin-icon"></div>
                    <p className="location-text">新北 · 板橋區</p>
                </div>
            </div>
            <div className="tag-rating-box">
                <ul className="tag-list">
                    <li className="tag">#競賽</li>
                    <li className="tag">#團體合作</li>
                </ul>
                <p className="rating-score">4.5(151)</p>
            </div>
            <button className="funevent-btn sign-up-btn" type="button">我要報名</button>
        </div>
    </>
}