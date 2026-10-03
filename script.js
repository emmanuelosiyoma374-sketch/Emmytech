function showMessage() {
    alert("Welcome to Emmatech! Contact us to get started.");
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("Emmatech service worker registered.");
            })
            .catch((error) => {
                console.log("Service worker registration failed:", error);
            });
    });
}