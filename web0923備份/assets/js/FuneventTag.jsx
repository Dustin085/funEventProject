function FuneventTag(props) {
    const {
        tagText,
    } = props;

    // 按下tag把data-tagName取出來放到localStorage的userSearchText，之後進入搜尋頁
    // const tagOnClickHandler = (ev) => {
    //     ev.preventDefault();
    //     let tagName = ev.target.dataset.tagName;
    //     tagName = tagName.replace("#", "");
    //     // 挑轉到搜尋頁
    //     location.href = "./search.html?" + "search_query=" + tagName;
    // };

    return <>
        <a href={"./search.html?" + "search_query=" + tagText.replace("#", "")}
            className="tag link"
            data-tag-name={tagText}
            // onClick={tagOnClickHandler}
        >{tagText}</a>
    </>
}