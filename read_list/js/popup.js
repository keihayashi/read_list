$(function () {
    chrome.tabs.getSelected(null, function(tab) {
    	chrome.storage.local.get("list", function(items){
    		if (items.list == undefined) {
    			items.list = [];
    		}
    		items.list.push(tab.url);
    		chrome.storage.local.set(items);
    	});
    });
});