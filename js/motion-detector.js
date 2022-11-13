function initSuccess() {
	DiffCamEngine.start();
}

function initError() {
	alert('Something went wrong.');
}

function capture(payload) {
    if (payload.hasMotion) {
        document.getElementById("motion-score").innerHTML = payload.score;
    } else {
        document.getElementById("motion-score").innerHTML = "No motion";
    }
}

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
