// https://zenquotes.io/

const getDailyMotivation = async () => {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const motivationElement = document.getElementById("motivation");
        motivationElement.innerHTML = data[randomIndex].text;
    } catch (e) {
        console.error("Error fetching daily motivation:", e);
    }
}

window.addEventListener("load", () => {
    getDailyMotivation();
});
