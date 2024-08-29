function FloatBtnBox() {
    const goTopBtnClickHandler = () => {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
        // window.scrollTo(0, 0);
    }
    // 聊天室子組件
    function Chatroom() {
        return <>
            <div className="chatroom">
                <div class="chatroom__topbar">
                    <div class="chatroom__icon"></div>
                    <div class="chatroom__title">
                        <p>FunEvent 客服</p>
                    </div>
                </div>
                <div id="chatroom__body" class="chatroom__body">
                    <div class="chatroom__msg fromOther firstmsg">
                        <div class="avatar" style="background-image: url(./images/20200920\ bluehairgirl.png);"></div>
                        <div class="content--container">
                            <div class="name"><p>FunEvent 小幫手</p></div>
                            <div class="text"><p>您好，我是FunEvent小幫手。<br />您今天好嗎？<br />很明顯我是用來湊字數的。<br />對於湊字數我還是略有涉略的。</p></div>
                        </div>
                    </div>
                </div>
                <div class="chatroom__footer">
                    <div class="chatroom__plusicon"></div>
                    <textarea rows="1" id="chatroom__input" class="chatroom__input" placeholder="想問甚麼呢？"></textarea>
                    <button id="chatroom__btn" class="chatroom__btn" type="button">送出</button>
                </div>
            </div>
        </>
    }
    return <>
        <div className="float-btn-box">
            <button type="button" className="go-top-btn" onClick={goTopBtnClickHandler}></button>
            <button type="button" className="chatroom-btn"></button>
            {/* <Chatroom /> */}
        </div>
    </>
}