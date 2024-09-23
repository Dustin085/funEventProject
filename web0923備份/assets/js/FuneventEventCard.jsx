// funevent活動卡片元件
function FuneventEventCard(props) {
    const { id, eventImgUrl, eventState, date, category, title, location, tags, ratingScore } = props.data;
    const eventUrl = `./event.html?event_id=${id}`;

    // 報名handler，暫時先只是跳轉到活動頁，之後寫判斷就可以真正進入套好的活動頁
    const onSignUpHandler = (ev) => {
        ev.preventDefault();
        location.href = eventUrl;
    };

    // 按下tag把data-tagName取出來放到localStorage的userSearchText，之後進入搜尋頁
    // const tagOnClickHandler = (ev) => {
    //     ev.preventDefault();
    //     let tagName = ev.target.dataset.tagName;
    //     tagName = tagName.replace("#", "");
    //     console.log(tagName);
    //     // 挑轉到搜尋頁
    //     location.href = "./search.html?" + "search_query=" + tagName;
    // };
    return <>
        <div className="funevent-event-card">
            <a href={eventUrl} className="event-pic"
                style={{ backgroundImage: `url(${eventImgUrl})` }}>
                <div className="inner-card">
                    <div className="start-box">
                        <StateTag />
                        <button type="button" className="fav-btn"></button>
                    </div>
                    <div className="date">
                        <p>{date}</p>
                    </div>
                </div>
            </a>
            <div className="main-content">
                <p className="category">{category}</p>
                <h2 className="event-title"><a href={eventUrl}>{title}</a></h2>
                <div className="location">
                    <div className="map-pin-icon"></div>
                    <p className="location-text">{location}</p>
                </div>
            </div>
            <div className="tag-rating-box">
                <ul className="tag-list">
                    {/* 迴圈製造tag */}
                    {
                        tags.map((tagText, index) => {
                            return <li key={index}>
                                <FuneventTag tagText={tagText} />
                                {/* <a href="#"
                                    className="tag link"
                                    data-tag-name={tagText}
                                    onClick={tagOnClickHandler}
                                >{tagText}</a> */}
                            </li>;
                        })
                    }
                </ul>
                <p className="rating-score">{ratingScore}</p>
            </div>
            <button className="funevent-btn sign-up-btn" type="button" onClick={onSignUpHandler}>我要報名</button>
        </div >
    </>

    // 活動狀態tag，有最新和熱門兩種
    function StateTag() {
        // eventState可以是new 或是 hot
        let stateTag = <></>;
        if (eventState == "new") {
            stateTag = <><div className="tag tag--new">最新</div></>;
        } else if (eventState == "hot") {
            stateTag = <><div className="tag tag--hot">熱門</div></>;
        } else {
            stateTag = <><div className="tag tag--new">未知</div></>;
        }
        return stateTag;
    }
    {/*
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
    */}
}