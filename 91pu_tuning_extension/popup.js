var element = document.createElement('script');
element.type = "text/javascript";
element.src = chrome.runtime.getURL("jquery.min.js");;
document.body.appendChild(element);
$(document).ready(function () {
    $("#pass").click();
});

var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (
        messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    $("#up_key").click(function (e) {
        sendMessage({ action: 'up' })
    });
    $("#don_key").click(function (e) {
        sendMessage({ action: 'don' })
    });
    $("#pass").click(function (e) {
        sendMessage({ action: 'pass' })
    });
  }

  chrome.tabs.getSelected(null, getSelectedTab);