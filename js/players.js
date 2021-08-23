function setPlayersStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px'
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const competitor = document.getElementsByClassName('player');
for (const player of competitor) {
    setPlayersStyle(player);
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>I am a sports fan.I like all kinds of outdoor games.Of all enchanting games and sports, I like cricket most.So it is obvious that my favorite sportsman will be a cricketer.Among the cricket players I like Shakib Al Hasan of Bangladesh.He is a talented left - hand batsman and left - arm spinner.</p>
    `;
    setPlayersStyle(player);
    playersContainer.appendChild(player);
}
document.getElementById('players').addEventListener('click', function (event) {
    // console.log(event.target)
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'pink';
    } else {
        event.target.parentNode.style.backgroundColor = 'pink';
    }
})