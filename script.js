document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('get-player').addEventListener('click', getPlayer);

document.getElementById('begin-button').addEventListener('click', function() {
    document.getElementById('description-box').style.display = 'none';
    document.querySelector('.input-names').classList.remove('hidden');
    document.querySelector('.header').classList.remove('hidden');
    document.querySelector('.attempt').classList.remove('hidden');
});

// Initially hide the game area and input names section until the description box is dismissed
window.onload = function() {
    document.getElementById('game-area').classList.add('hidden');
    document.querySelector('.input-names').classList.add('hidden');
    document.querySelector('.header').classList.add('hidden');
    document.querySelector('.attempt').classList.add('hidden');
};


const players = [
    // Players Name
    // Batsmen
    { name: 'V.Kohli', type: 'batsman', points: 10 },
    { name: 'R.Sharma', type: 'batsman', points: 10 },
    { name: 'S.Tendulkar', type: 'batsman', points: 10 },
    { name: 'J.Buttler', type: 'batsman', points: 10 },
    { name: 'B.McCullum', type: 'batsman', points: 10 },
    { name: 'C.Gayle', type: 'batsman', points: 10 },//6
    { name: 'S.Dhawan', type: 'batsman', points: 9 },
    { name: 'S.Raina', type: 'batsman', points: 9 },
    { name: 'D.Warner', type: 'batsman', points: 9 },
    { name: 'A.Finch', type: 'batsman', points: 9 },
    { name: 'Y.Singh', type: 'batsman', points: 9 },
    { name: 'D.Miller', type: 'batsman', points: 9 },
    { name: 'K.Pietersen', type: 'batsman', points: 9 },
    { name: 'A.Markram', type: 'batsman', points: 9 },
    { name: 'D.Conway', type: 'batsman', points: 9 },
    { name: 'Q.D.kock', type: 'batsman', points: 9 },
    { name: 'deVilliers', type: 'batsman', points: 9 },
    { name: 'N.Pooran', type: 'batsman', points: 9 },//12
    { name: 'KL.Rahul', type: 'batsman', points: 8 },
    { name: 'P.Salt', type: 'batsman', points: 8 },
    { name: 'F.D.Plessis', type: 'batsman', points: 8 },
    { name: 'D.Malan', type: 'batsman', points: 8 },
    { name: 'S.Watson', type: 'batsman', points: 8 },
    { name: 'T.David', type: 'batsman', points: 8 },
    { name: 'L.L.Das', type: 'batsman', points: 8 },
    { name: 'K.Mendis', type: 'batsman', points: 8 },
    { name: 'B.Duckett', type: 'batsman', points: 8 },
    { name: 'S.Raza', type: 'batsman', points: 8 },
    { name: 'J.Bairstow', type: 'batsman', points: 8 },
    { name: 'DR.Smith', type: 'batsman', points: 8 },//12
    { name: 'L.Tucker', type: 'batsman', points: 7 },
    { name: 'S.Engelbrecht', type: 'batsman', points: 7 },
    { name: 'B.Bennett', type: 'batsman', points: 7 },
    { name: 'J.J.Smit', type: 'batsman', points: 7 },
    { name: 'H.Tector', type: 'batsman', points: 7 },
    { name: 'C.Campher', type: 'batsman', points: 7 },
    { name: 'G.Erasmus', type: 'batsman', points: 7 },
    { name: 'N.Davin', type: 'batsman', points: 7 },
    { name: 'H.Masakadza', type: 'batsman', points: 7 },
    { name: 'K.Mayers', type: 'batsman', points: 7 },//10//40


    // Bowlers
    { name: 'J. Bumrah', type: 'bowler', points: 10 },
    { name: 'K.Yadav', type: 'bowler', points: 10 },
    { name: 'A.Nortje', type: 'bowler', points: 10 },
    { name: 'R.Khan', type: 'bowler', points: 10 },
    { name: 'T.Boult', type: 'bowler', points: 10 },
    { name: 'K.Rabada', type: 'bowler', points: 10 },//6
    { name: 'B. Kumar', type: 'bowler', points: 9 },
    { name: 'M. Shami', type: 'bowler', points: 9 },
    { name: 'M.Siraj', type: 'bowler', points: 9 },
    { name: 'A.Singh', type: 'bowler', points: 9 },
    { name: 'J.Archer', type: 'bowler', points: 9 },
    { name: 'A.Zampa', type: 'bowler', points: 9 },
    { name: 'J.Faulkner', type: 'bowler', points: 9 },
    { name: 'J.Hazlewood', type: 'bowler', points: 9 },
    { name: 'T.Southee', type: 'bowler', points: 9 },
    { name: 'K.Maharaj', type: 'bowler', points: 9 },
    { name: 'A.Rashid', type: 'bowler', points: 9 },//11
    { name: 'M.Johnson', type: 'bowler', points: 8 },
    { name: 'M.Starc', type: 'bowler', points: 8 },
    { name: 'L.Ferguson', type: 'bowler', points: 8 },
    { name: 'Coulter-Nile', type: 'bowler', points: 8 },
    { name: 'S.Broad', type: 'bowler', points: 8 },
    { name: 'C.Jordan', type: 'bowler', points: 8 },
    { name: 'M.Wood', type: 'bowler', points: 8 },
    { name: 'Y.Chahal', type: 'bowler', points: 8 },
    { name: 'A.Joseph', type: 'bowler', points: 8 },
    { name: 'T.Shamsi', type: 'bowler', points: 8 },
    { name: 'A.Mendis', type: 'bowler', points: 8 },
    { name: 'G.Swann', type: 'bowler', points: 8 },//12
    { name: 'S.Finn', type: 'bowler', points: 7 },
    { name: 'T.Mills', type: 'bowler', points: 7 },
    { name: 'B.Geeves', type: 'bowler', points: 7 },
    { name: 'PM.Siddle', type: 'bowler', points: 7 },
    { name: 'H.Hotak', type: 'bowler', points: 7 },
    { name: 'O.Baartman', type: 'bowler', points: 7 },
    { name: 'J.Little', type: 'bowler', points: 7 },
    { name: 'M.Henry', type: 'bowler', points: 7 },
    { name: 'D.Wiese', type: 'bowler', points: 7 },
    { name: 'M.Morkel', type: 'bowler', points: 7 },
    { name: 'D.Zadran', type: 'bowler', points: 7 },//11//40

    // Fielders
    { name: 'R. Jadeja', type: 'fielder', points: 10 },
    { name: 'S.Narine', type: 'fielder', points: 10 },
    { name: 'H. Pandya', type: 'fielder', points: 10 },//3
    { name: 'A.Patel', type: 'fielder', points: 9 },
    { name: 'B.Stokes', type: 'fielder', points: 9 },
    { name: 'A.Russell', type: 'fielder', points: 9 },
    { name: 'K.Polard', type: 'fielder', points: 9 },
    { name: 'G.Maxwell', type: 'fielder', points: 9 },
    { name: 'D.Bravo', type: 'fielder', points: 9 },
    { name: 'S.A.Hassan', type: 'fielder', points: 9 },//7
    { name: 'M. Pandey', type: 'fielder', points: 8 },
    { name: 'W.Hasaranga', type: 'fielder', points: 8 },
    { name: 'M.Ali', type: 'fielder', points: 8 },
    { name: 'L.Livingstone', type: 'fielder', points: 8 },
    { name: 'M.Nabi', type: 'fielder', points: 8 },
    { name: 'M.Stoinis', type: 'fielder', points: 8 },//6
    { name: 'G.Naib', type: 'fielder', points: 7 },
    { name: 'R.Burl', type: 'fielder', points: 7 },
    { name: 'J.Neesham', type: 'fielder', points: 7 },
    { name: 'W.Sundar', type: 'fielder', points: 7 },//4//20
];

let user1 = { name: '', runs: 0, team: Array(11).fill(null), selectedPlayer: null };
let user2 = { name: '', runs: 0, team: Array(11).fill(null), selectedPlayer: null };
let currentUser = 1;
let currentPlayer = null;
let turnCount = 0;

function startGame() {
    user1.name = document.getElementById('user1-name').value;
    user2.name = document.getElementById('user2-name').value;
    if (user1.name && user2.name) {
        document.getElementById('user1-title').textContent = `${user1.name}'s Team`;
        document.getElementById('user2-title').textContent = `${user2.name}'s Team`;
        document.getElementById('game-area').classList.remove('hidden');
        document.querySelector('.input-names').classList.add('hidden');

        const user1Players = document.getElementById('user1-players');
        const user2Players = document.getElementById('user2-players');

        user1Players.innerHTML = '';
        user2Players.innerHTML = '';

        for (let i = 0; i < 11; i++) {
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            div1.textContent = `${i + 1}. ________`;
            div2.textContent = `${i + 1}. ________`;
            user1Players.appendChild(div1);
            user2Players.appendChild(div2);
        }

        document.querySelector('.header').classList.add('start'); 

        updateCurrentUser();
    } else {
        alert('Enter the names for BOTH Users.');
    }
}

function getPlayer() {
    if (!currentPlayer) {
        currentPlayer = players[Math.floor(Math.random() * players.length)];
        document.getElementById('current-player').textContent = `Current Player: ${currentPlayer.name}`;
        document.getElementById('current-team').textContent = `Current Team: ${currentUser === 1 ? user1.name : user2.name}`;
        document.getElementById('get-player').disabled = true;
        if (currentUser === 1) {
            user1.selectedPlayer = currentPlayer;
        } else {
            user2.selectedPlayer = currentPlayer;
        }
        addPlayerToTeam();
    }
}

function addPlayerToTeam() {
    const team = currentUser === 1 ? user1.team : user2.team;
    const selectedPlayer = currentUser === 1 ? user1.selectedPlayer : user2.selectedPlayer;
    const playerDivs = currentUser === 1 ? document.getElementById('user1-players') : document.getElementById('user2-players');

    playerDivs.innerHTML = '';

    team.forEach((player, index) => {
        const div = document.createElement('div');
        div.textContent = player ? `${index + 1}. ${player.name}` : `${index + 1}. ________`;
        div.addEventListener('click', () => {
            if (!player && selectedPlayer) {
                if ((currentUser === 1 && playerDivs === document.getElementById('user1-players')) ||
                    (currentUser === 2 && playerDivs === document.getElementById('user2-players'))) {
                    team[index] = selectedPlayer;
                    playerDivs.children[index].textContent = `${index + 1}. ${selectedPlayer.name}`;
                    currentPlayer = null;
                    if (currentUser === 1) {
                        user1.selectedPlayer = null;
                    } else {
                        user2.selectedPlayer = null;
                    }
                    document.getElementById('get-player').disabled = false;
                    updateRuns();
                    turnCount++;
                    currentUser = currentUser === 1 ? 2 : 1;
                    updateCurrentUser();
                    if (turnCount === 22) {
                        displayResult();
                    }
                } else {
                    alert('Put the players in their RESPECTIVE Team');
                }
            }
        });
        playerDivs.appendChild(div);
    });
}

function updateRuns() {
    user1.runs = calculateRuns(user1.team);
    user2.runs = calculateRuns(user2.team);
    document.getElementById('user1-runs').textContent = user1.runs;
    document.getElementById('user2-runs').textContent = user2.runs;
}

function calculateRuns(team) {
    return team.reduce((total, player, index) => {
        if (!player) return total;
        if (player.type === 'batsman') {
            if (index < 4) return total + player.points;
            if (index < 7) return total + Math.floor(player.points / 2);
        } else if (player.type === 'bowler') {
            if (index >= 7) return total + player.points;
            if (index >= 4) return total + Math.floor(player.points / 2);
        } else {
            return total + player.points;
        }
        return total;
    }, 0);
}

function updateCurrentUser() {
    document.getElementById('current-player').textContent = 'Current Player: ';
    document.getElementById('current-team').textContent = `Current Team: ${currentUser === 1 ? user1.name : user2.name}`;
    document.getElementById('get-player').textContent = `Get a Player (BALL-${Math.ceil((turnCount + 1) / 2)})`;
    addPlayerToTeam();
}

function displayResult() {
    const result = document.getElementById('result');
    if (user1.runs > user2.runs) {
        result.textContent = `${user1.name} won by ${user1.runs - user2.runs} runs`;
    } else if (user2.runs > user1.runs) {
        result.textContent = `${user2.name} won by ${user2.runs - user1.runs} runs`;
    } else {
        result.textContent = 'The game is a tie!';
    }
    result.classList.remove('hidden');
    document.getElementById('get-player').disabled = true;
}
