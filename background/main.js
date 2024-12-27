browser.webNavigation.onCompleted.addListener((details) => {
    if (details.frameId !== 0) {
        return;
    }

    browser.tabs.executeScript(details.tabId, {
        file: "content/main.js"
    });
}, { urls: ["*://*/*"] });