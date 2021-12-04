let accountList = [
	{
		"url": "https://passport.csdn.net/newlogin?code=mobile",
		"username": "3122094109@qq.com",
		"password": "tqw19970102"
	},
	{
		"url": "",
		"username": "de",
		"password": ""
	},
	{
		"url": "fg",
		"username": "",
		"password": ""
	},
	{
		"url": "h",
		"username": "",
		"password": ""
	}
]
// 发送账号密码到inject.js
function sendMessage() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		let taburl = tabs[0].url
		let id = tabs[0].id
		let username
		let password
		for (var i = 0; i < accountList.length; i++) {
			if (taburl.startsWith(accountList[i].url)) {
				username = accountList[i].username
				password = accountList[i].password
				break
			}
		}
		var message = { "username": username, "password": password }
		chrome.tabs.sendMessage(id, message, function (response) {
			if (!window.chrome.runtime.lastError) {
				console.log('来自content的回复：' + response);
			} else {
				console.log("you need refresh the website")
			}

		})
	})
}
chrome.contextMenus.create({
	title: "填充密码登录",
	onclick: sendMessage
})