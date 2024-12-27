browser.webNavigation.onCompleted.addListener((details) => {
    if (details.frameId !== 0) {
        return;
    }
}, { url: [{ schemes: ['http', 'https'] }] });