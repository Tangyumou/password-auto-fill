chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(JSON.stringify(request))
    fillAndLogin(request.username, request.password)
    sendResponse('我收到了你的消息！')
})

function fillAndLogin(username, password) {
    var first = document.getElementsByTagName("input")[2]
    var second = document.getElementsByTagName("input")[3]
    window.inputValue(first,username)
    window.inputValue(second,password)
    setTimeout(()=>{
        document.getElementsByTagName("button")[1].click()
    }, 200)
    
}
window.inputValue = function (dom, st) {
    var evt = new InputEvent('input', {
        inputType: 'insertText',
        data: st,
        dataTransfer: null,
        isComposing: false
    });
    dom.value = st;
    dom.dispatchEvent(evt);
}