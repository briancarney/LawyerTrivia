// Fetch and parse CSV file
fetch('famous_lawyers.csv')
    .then(response => response.text())
    .then(data => {
        parseCSV(data);
        initializeGame();
    });

let lawyers = [];
let currentRound = 0;
let correctAnswers = 0;
let correctLawyer = null;

function parseCSV(data) {
    const lines = data.split('\n');
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
            const values = line.split(',');
            const lawyer = {};
            headers.forEach((header, index) => {
                lawyer[header.trim()] = values[index].trim();
            });
            lawyers.push(lawyer);
        }
    }
}

function initializeGame() {
    document.getElementById('start-button').classList.remove('hidden');
}

function startGame() {
    document.getElementById('start-button').classList.add('hidden');
    document.getElementById('lawyers-container').classList.remove('hidden');
    document.getElementById('description-container').classList.remove('hidden');
    nextRound();
}

function nextRound() {
    if (currentRound >= 10) {
        endGame();
        return;
    }
    currentRound++;
    const shuffledLawyers = shuffleArray([...lawyers]);
    const selectedLawyers = shuffledLawyers.slice(0, 3);
    correctLawyer = selectedLawyers[Math.floor(Math.random() * 3)];

    displayLawyers(selectedLawyers);
    displayDescription(correctLawyer.Description);
}

function displayLawyers(lawyerList) {
    lawyerList.forEach((lawyer, index) => {
        const lawyerDiv = document.getElementById(`lawyer${index + 1}`);
        lawyerDiv.innerHTML = `<img src="assets/${lawyer.Image}" alt="${lawyer.Name}"><p>${lawyer.Name}</p>`;
        lawyerDiv.dataset.id = lawyer.Name;
        lawyerDiv.classList.remove('selected');
    });
}

function displayDescription(description) {
    document.getElementById('description-container').innerText = description;
}

function selectLawyer(index) {
    const selectedDiv = document.getElementById(`lawyer${index}`);
    const lawyerId = selectedDiv.dataset.id;

    if (lawyerId === correctLawyer.Name) {
        document.getElementById('feedback').innerText = "Correct!";
        document.getElementById('feedback').className = 'correct';
        correctAnswers++;
    } else {
        document.getElementById('feedback').innerText = "Wrong!";
        document.getElementById('feedback').className = 'wrong';
    }

    document.getElementById('feedback').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('feedback').classList.add('hidden');
        nextRound();
    }, 1000);
}

function endGame() {
    document.getElementById('lawyers-container').classList.add('hidden');
    document.getElementById('description-container').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');

    const finalScore = document.getElementById('final-score');
    finalScore.innerText = `You scored ${correctAnswers}/10`;
    if (correctAnswers < 5) {
        finalScore.innerText += "\nBetter luck next time!";
    } else {
        finalScore.innerText += "\nCongratulations!";
    }
    finalScore.classList.remove('hidden');
    document.getElementById('restart-button').classList.remove('hidden');
}

function restartGame() {
    currentRound = 0;
    correctAnswers = 0;
    correctLawyer = null;

    document.getElementById('final-score').classList.add('hidden');
    document.getElementById('restart-button').classList.add('hidden');
    startGame();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
