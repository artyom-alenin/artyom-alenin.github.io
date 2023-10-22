var items = [
    "a",
    "b",
    "c",
    "d"
];

function nextCrocoWord() {
    var randomIndex = Math.floor(Math.random() * items.length);
    var randomItem = items.splice(randomIndex, 1)[0];

    document.getElementById('croco-word').innerHTML = randomItem;
}