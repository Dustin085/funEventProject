function SearchFilterBoard({ title = "面板標題", filterNames = [], searchHandler, boardId = "eventCategory", searchBtnTitle = "搜尋" }) {
    const { useState, useRef } = React;
    const filterInputBox = useRef(null);
    if (!searchHandler) {
        // 以const fnName = ()=>{}的函式不會被hoisting
        const searchHandlerDefault = () => {
            console.log("didn't get search handler");
        }
        searchHandler = searchHandlerDefault;
    }
    // 收合按鈕
    const foldBtnClickHandler = (ev) => {
        $(filterInputBox.current).fadeToggle();
        $(ev.target).toggleClass("active");
    };
    return <>
        <div className="search-filter-board funevent-shadow">
            <div className="title-box">
                <h3 className="title">{title}</h3>
                <button type="button" className="fold-btn" onClick={foldBtnClickHandler}></button>
            </div>
            <div className="filter-input-box" ref={filterInputBox}>
                {
                    filterNames.map((filterName, index) => {
                        return (
                            <div className="filter-item" key={index}>
                                <input type="checkbox" id={`${boardId}-${index}`} value={filterName} />
                                <label htmlFor={`${boardId}-${index}`}>{filterName}</label>
                            </div>
                        )
                    })
                }
            </div>
            {/* {console.log("side-board render")} */}
            <button className="funevent-btn funevent-btn--light" type="button" onClick={searchHandler}>{searchBtnTitle}</button>
        </div>
    </>
}