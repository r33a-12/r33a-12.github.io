window.onload = function () {

    const audio = document.getElementById("muzica-fundal");
    const message = document.createElement("div");
    const naviElement = document.querySelector(".navi");
    const source = document.querySelector(".about-info");
    const sourceStyle = getComputedStyle(source);
    const volumeControl = document.getElementById("volumeControl");

    volumeControl.addEventListener("input", function () {
        audio.volume = volumeControl.value;
    });

    message.textContent = "music is paused";
    message.style.fontFamily = sourceStyle.fontFamily;
    message.style.color = sourceStyle.color;
    message.style.fontSize = "x-large";
    message.style.marginTop = "10px";
    message.style.placeSelf = "center";
    naviElement.insertAdjacentElement("afterend", message);

    localStorage.setItem("theme", "dark");
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);

    alert("type ~p~ to play/pause the background music");
    let currentVol;

    playMusic();

    if (!document.getElementById("newsletter-popup")) {
        document.body.insertAdjacentHTML("beforeend", popupHTML);
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    function showPopup() {
        document.getElementById('newsletter-popup').style.display = 'block';
        document.getElementById('popup-overlay').style.display = 'block';
    }
    
    function hidePopup() {
        document.getElementById('newsletter-popup').style.display = 'none';
        document.getElementById('popup-overlay').style.display = 'none';
        document.getElementById('form-message').style.display = 'none';
    }
    
    document.getElementById('close-popup').addEventListener('click', hidePopup);
    document.getElementById('popup-overlay').addEventListener('click', hidePopup);
    
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('email').value;
    
        if (!emailRegex.test(emailInput)) {
            document.getElementById('form-message').style.fontFamily = sourceStyle.fontFamily;
            document.getElementById('form-message').style.fontSize = "x-large";
            document.getElementById('form-message').textContent = 'Please enter a valid email address.';
            document.getElementById('form-message').style.display = 'block';
            return;
        }
    
        const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];

    if (subscribers.includes(emailInput)) {
        document.getElementById('form-message').style.fontFamily = sourceStyle.fontFamily;
        document.getElementById('form-message').style.fontSize = "x-large";
        document.getElementById('form-message').textContent = 'You are already subscribed!';
        document.getElementById('form-message').style.color = 'rgb(93, 118, 166)';
        document.getElementById('form-message').style.display = 'block';
        return;
    }

    subscribers.push(emailInput);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));

    document.getElementById('form-message').style.fontFamily = sourceStyle.fontFamily;
    document.getElementById('form-message').style.fontSize = "x-large";
    document.getElementById('form-message').textContent = 'Thank you for subscribing!';
    document.getElementById('form-message').style.color = 'rgb(93, 166, 129)';
    document.getElementById('form-message').style.display = 'block';
    setTimeout(hidePopup, 2000);
});

    setTimeout(showPopup, 3000);

    function playMusic() {


        document.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === "p") {
                if (audio.paused) {
                    audio.play();
                    volumeControl.value = currentVol;
                    message.textContent = "music is playing!";
                    naviElement.insertAdjacentElement("afterend", message);
                } else {
                    audio.pause();
                    message.textContent = "music is paused";
                    currentVol = volumeControl.value;
                    volumeControl.value = 0;
                    naviElement.insertAdjacentElement("afterend", message);
                }
            }
        });

    }

    const url = 'undertale.json';
    let possanswers;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text();
        })
        .then(function (text) {
            try {
                possanswers = JSON.parse(text);
            } catch (error) {
                throw new Error('Error parsing JSON: ' + error.message);
            }
        })
        .catch(function (err) {
            alert('An error occurred: ' + err.message);
        });


    const flowey = document.querySelector(".flowey");
    flowey.addEventListener("click", answerFlowey);

    function answerFlowey() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("flowey-info");
        infodiv.textContent = possanswers[ans].flowey;
    }

    const frisk = document.querySelector(".frisk");
    frisk.addEventListener("click", answerFrisk);

    function answerFrisk() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("frisk-info");
        infodiv.textContent = possanswers[ans].frisk;
    }

    const toriel = document.querySelector(".toriel");
    toriel.addEventListener("click", answerToriel);

    function answerToriel() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("toriel-info");
        infodiv.textContent = possanswers[ans].toriel;
    }

    const sans = document.querySelector(".sans");
    sans.addEventListener("click", answerSans);

    function answerSans() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("sans-info");
        infodiv.textContent = possanswers[ans].sans;
    }

    const papyrus = document.querySelector(".papyrus");
    papyrus.addEventListener("click", answerPapyrus);

    function answerPapyrus() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("papyrus-info");
        infodiv.textContent = possanswers[ans].papyrus;
    }

    const undyne = document.querySelector(".undyne");
    undyne.addEventListener("click", answerUndyne);

    function answerUndyne() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("undyne-info");
        infodiv.textContent = possanswers[ans].undyne;
    }

    const alphys = document.querySelector(".alphys");
    alphys.addEventListener("click", answerAlphys);

    function answerAlphys() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("alphys-info");
        infodiv.textContent = possanswers[ans].alphys;
    }

    const mettaton = document.querySelector(".mettaton");
    mettaton.addEventListener("click", answerMettaton);

    function answerMettaton() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("mettaton-info");
        infodiv.textContent = possanswers[ans].mettaton;
    }

    const asgore = document.querySelector(".asgore");
    asgore.addEventListener("click", answerAsgore);

    function answerAsgore() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("asgore-info");
        infodiv.textContent = possanswers[ans].asgore;
    }

    const asriel = document.querySelector(".asriel");
    asriel.addEventListener("click", answerAsriel);

    function answerAsriel() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("asriel-info");
        infodiv.textContent = possanswers[ans].asriel;
    }

    const chara = document.querySelector(".chara");
    chara.addEventListener("click", answerChara);

    function answerChara() {
        let max = possanswers.length;
        let ans = Math.floor(Math.random() * max);
        let infodiv = document.getElementById("chara-info");
        infodiv.textContent = possanswers[ans].chara;
    }
}
