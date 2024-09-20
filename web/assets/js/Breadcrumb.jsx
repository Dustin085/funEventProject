function Breadcrumb(props) {
    const {
        data = [
            {
                title: "首頁",
                link: "./index.html"
            },
            {
                title: "活動地區",
                link: "./search.html"
            },
            {
                title: "活動分類",
                link: "./search.html"
            }
        ]
    } = props;
    return <>
        <div className="breadcrumb">
            {
                data.map((item, index, arr) => {
                    let isLast = index === (arr.length - 1);
                    return <BreadcrumbPart
                        key={index}
                        isLast={isLast}
                        title={item.title}
                        link={item.link}
                    />
                })
            }
        </div>
        {/* <div class="breadcrumb">
            <a href="../index.html">首頁</a>
            <span class="divider"> / </span>
            <a href="#">台北</a>
            <span class="divider"> / </span>
            <a href="#">室內活動</a>
        </div> */}
    </>
}

function BreadcrumbPart(props) {
    const {
        isLast = false,
        title = "標題",
        link = "./index.html"
    } = props
    let divider = !isLast ? <span className="divider"> / </span> : null;
    return <>
        <a href={link}>{title}</a>
        {divider}
    </>
}