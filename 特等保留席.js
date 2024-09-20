const data = {
    id: 1,
    title: "流行音樂與民謠吉他-第一堂吉他課的首選",
    introduction: [
        {
            title: "活動介紹",
            content: "民謠吉他，是近幾十年來最流行的樂器之一，具有便宜好學且方便攜帶的特性，是孩子們探索音樂、創造音樂最好的一條途徑。想讓孩子們接觸音樂，但又怕孩子們三分鐘熱度無法堅持太久，趕緊趁現在來參加我們的吉他體驗課吧！<br /><br />不用小提琴或國樂器的昂貴價格，也不用鋼琴的超大佔位，一把吉他，揹著就可以到處彈到處唱，同時，您在課程中也可以和孩子們一同學習，創造屬於親子間的特別回憶。<br /><br />專屬FunEvent會員優惠！蘭響當天會帶著數款適合初學者的木吉他讓同學們可以當場選購。憑電子票卷證明亦可到蘭響音樂教室用折扣價購買精選木吉他。"
        },
        {
            title: "師資介紹",
            content: "蘭響音樂教室的師資都是已從業多年的音樂教師，大多老師也同時是樂團樂手或是音樂製作人。蘭響音樂教室一定會給您帶來最佳的活動體驗。"
        },
        {
            title: "活動流程",
            content: "民謠吉他的特色 => 經典四和弦 => 簡單樂理 => 彈唱練習"
        }
    ],
    breadcrumbData: [
        {
            title: "首頁",
            link: "./index.html"
        },
        {
            title: "雙北",
            link: "./search.html?search_query=雙北"
        },
        {
            title: "音樂律動",
            link: "./search.html?search_query=音樂律動"
        }
    ],
    slideUrls: [
        "./assets/images/event01/event1-pic01.jpg",
        "./assets/images/event01/event1-pic02.jpg",
        "./assets/images/event01/event1-pic03.jpg",
        "./assets/images/event01/event1-pic04.jpg",
        "./assets/images/event01/event1-pic05.jpg"
    ],
    rating: {
        score: 4.5,
        amount: 115
    },
    date: "2024.10.06(三)",
    address: {
        main: "臺北市中山區搖滾路一段搖滾弄321號",
        sub: "承曦樓六樓607教室"
    },
    founder: {
        name: "蘭響音樂教室",
        intro: "蘭響音樂教室是甜美號樂團的吉他手小黑於1994年成立的一個音樂教室，<br />長年以來一直致力於樂手培養、音樂製作等業務<br />蘭響今年即將邁入第三十個年頭，<br />希望在這而立之年使用更多元的方向做搖滾音樂的推廣與教學。<br />請大家多多指教！<br />",
        links: [
            {
                title: "蘭響音樂IG",
                link: "#"
            }
        ]
    },
    tags: [
        "#國小",
        "#國中",
        "#高中",
        "#吉他",
        "#流行音樂",
    ],
    plans: [
        {
            title: "親子一同彈",
            content: "為親子提供兩把吉他，可以一同學習。",
            price: 500
        },
        {
            title: "孩子獨奏",
            content: "提供專業吉他，手把手指導孩子。",
            price: 300
        }
    ],
    timeSlots: [
        "上午場",
        "下午場"
    ],
    ticketTypes: [
        {
            title: "票卷",
            sub: "(8 - 99歲)"
        },
    ],
    warningContent: {
        title: "注意事項",
        content: "注意事項：<br />1. 活動當天會提供木吉他進行練習，請同學們愛惜使用<br />2. 若您自己有木吉他，歡迎直接帶來體驗課程<br />3. 為維護講師權益，請勿在上課中錄影<br />4. 親子一同彈方案會提供兩把木吉他<br />"
    },
    commentItems: [
        {
            userName: "Lily Thompson",
            userAvatarUrl: "./assets/images/event01/comment01-user-avatar.png",
            date: "2024.04.16",
            ratingScore: 5,
            content: "講師是我高中時期最愛樂團甜美號的吉他手小黑，不來實在說不過去了呀！我選擇的方案是親子一同彈，在彈唱的過程中，我和孩子互相分享了自己喜歡的音樂，謝謝蘭響為我創造了獨一無二的親子回憶",
            picArr: [
                "./assets/images/event01/comment01-pic01.png",
                "./assets/images/event01/comment01-pic01.png",
                "./assets/images/event01/comment01-pic01.png"
            ]
        },
        {
            userName: "Ethan Parker",
            userAvatarUrl: "./assets/images/event01/comment02-user-avatar.png",
            date: "2024.01.10",
            ratingScore: 4,
            content: " 參加這次的吉他課程真是太棒了！從一開始連基本的和弦都彈不出來，到現在能彈奏一些簡單的曲子，這段學習過程真的很有趣。老師非常耐心，一步步地教我如何正確地按弦、彈奏，讓我逐漸克服了最初的困難。",
            picArr: [
                "./assets/images/event01/comment02-pic01.png",
                "./assets/images/event01/comment02-pic01.png",
                "./assets/images/event01/comment02-pic01.png"
            ]
        }
    ]
}

{
    eventInfoHot.map((event) => {
        const { id, eventImgUrl, eventState, date, category, title, location, tags, ratingScore } = event
        return <li key={id}> <FuneventEventCard
            key={id}
            eventImgUrl={eventImgUrl}
            eventState={eventState}
            date={date}
            category={category}
            title={title}
            location={location}
            tags={tags}
            ratingScore={ratingScore} /> </li>
    })
}