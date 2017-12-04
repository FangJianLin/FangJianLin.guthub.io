(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            if(clientWidth/750 <= 0.467){return docEl.style.fontSize = 42.67 + "px"}
            if(clientWidth/750 >= 1){return docEl.style.fontSize = 100 + "px"}
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            //750是设计图的宽度,50是一个基准宽度(html的font-size值)
            console.log(docEl.style.fontSize)
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);