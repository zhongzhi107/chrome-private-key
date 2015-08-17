
function onClick(event) {
	chrome.tabs.executeScript(null, {file: "content_script.js"});
}

function checkForValidUrl(tabId, changeInfo, tab) {
	 if(/build|process/.test(tab.url)) {
          chrome.pageAction.show(tabId);
     }
}

chrome.pageAction.onClicked.addListener(onClick);
chrome.tabs.onUpdated.addListener(checkForValidUrl);
