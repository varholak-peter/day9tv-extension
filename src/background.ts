const showExtension = (
  tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo,
  _tab: chrome.tabs.Tab
) => {
  console.log("bbbbb", tabId);

  if (changeInfo.url) {
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(showExtension);
