var showItems = document.getElementById('showEmojis')
var emojiData;
var emojistring = "";
async function getEmojis(){
    try {
        const result = await fetch('https://unpkg.com/emoji.json/emoji.json');
        const data = await result.json();
        emojiData = data
        showAll()

    } catch (error) {
        alert(error)
    }
}
getEmojis();

function showAll(){
    var main = document.getElementsByClassName('main')[0];
    for (let i = 0; i < emojiData.length; i++) {
        var emojiDiv = document.createElement('div');
        emojiDiv.className = "emojiItem";
        var emoji = document.createElement('h1');
        emoji.innerHTML = emojiData[i].char;
        var emojiName = document.createElement('h2');
        emojiName.innerHTML = emojiData[i].name.toUpperCase()
        main.appendChild(emojiDiv);
        emojiDiv.appendChild(emoji);
        emojiDiv.appendChild(emojiName);
        emojistring += emojiData[i].char;
    }
}

function showSelected(){
    
}