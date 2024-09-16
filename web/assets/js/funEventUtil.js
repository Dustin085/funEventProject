// funEvent需要用到的通用含式會放在這裡

// 跳轉到活動頁的處理程式，參數為活動id，在event.html透過活動id來代入不同的活動
function toEventPageHandler(eventId = "1") {
    location.href = "./event.html?" + "event_id=" + eventId;
}

// 切換active元素
function switchActive(arrToSwitch, targetIndex) {
    arrToSwitch.forEach((arrEle) => {
        arrEle.classList.remove('active');
    });
    arrToSwitch[targetIndex].classList.add('active');
    // console.log("switched");
}

// 循環botNum-topNum，用來循環輪播次頁前頁按鈕
// 1. 要移動的步數diff % 區間長度 = 真正要移動的步數
// 2. 從fromNum開始移動，移動到超出區間範圍就要回到另一端
// 3. 做序數修正
// 參數名稱 => fromNum: 開始數字，diff: 要移動的步數，topNum, botNum: 循環區間最大(小)值
function cyclingNum(fromNum, diff, topNum, botNum = 0) {
    // 循環數字的區間長度，大減小後+1才會是正確的長度
    let numLength = topNum - botNum + 1;
    let result = 0;
    // 當result超過範圍的時候應該要立刻回到另一端並算做一次計數，然而在我們的計算過程中這個計數被忽略了，所以要校正
    // 例如，假設現在區間範圍是-1~4，當從4再往上加1的時候應該要直接變成-1，但我們的計算會將他算成4+1=5，所以要-1做校正
    const ordinalCorrect = 1;
    // 往前或後移動的步數
    let move = diff % numLength;
    result = fromNum + move;
    // 超出移動範圍就循環
    if (result > topNum) {
        result = botNum + (result - topNum) - ordinalCorrect;
    } else if (result < botNum) {
        result = topNum - (botNum - result) + ordinalCorrect;
    }
    return result;
}