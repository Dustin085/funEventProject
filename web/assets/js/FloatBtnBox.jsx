function FloatBtnBox() {
    const { useState } = React;

    const goTopBtnClickHandler = () => {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
        // window.scrollTo(0, 0);
    }



    // 聊天室子組件
    function Chatroom() {
        const [inputText, setInputText] = useState("");
        const inputOnChangeHandler = (ev) => {
            setInputText(ev.target.value);
        };
        return <>
            <div className="chatroom">
                <div className="chatroom__topbar">
                    <div className="chatroom__icon"></div>
                    <div className="chatroom__title">
                        <p>FunEvent 客服</p>
                    </div>
                </div>
                <div id="chatroom__body" className="chatroom__body">
                    <div className="chatroom__msg fromOther firstmsg">
                        <div className="avatar" style={{ backgroundImage: "url(./assets/images/member-default-avatar.png)" }}></div>
                        <div className="content--container">
                            <div className="name"><p>FunEvent 小幫手</p></div>
                            <div className="text"><p>您好，我是FunEvent小幫手。<br />您今天好嗎？<br />很明顯我是用來湊字數的。<br />對於湊字數我還是略有涉略的。</p></div>
                        </div>
                    </div>
                </div>
                <div className="chatroom__footer">
                    <button type="button" className="chatroom__plusicon"></button>
                    <ChatroomInput inputText={inputText} inputOnChangeHandler={inputOnChangeHandler} />
                    <button id="chatroom__btn" className="chatroom__btn" type="button">送出</button>
                </div>
            </div>
        </>
    }

    // 聊天室輸入框，推測：必須與主要組件分隔開來才能獨自重新渲染
    function ChatroomInput({ inputText, inputOnChangeHandler }) {
        return <>
            <textarea rows="1" id="chatroom__input" className="chatroom__input" placeholder="想問甚麼呢？" value={inputText} onChange={inputOnChangeHandler}></textarea>
        </>
    }

    return <>
        <div className="float-btn-box">
            <button type="button" className="go-top-btn" onClick={goTopBtnClickHandler}></button>
            <button type="button" className="chatroom-btn"></button>
            <Chatroom />
        </div>
    </>
}