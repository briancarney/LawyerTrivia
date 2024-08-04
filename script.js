const lawyers = [
    { id: 1, name: "Charles Hamilton Houston", description: "Prominent civil rights lawyer and mentor to Thurgood Marshall.", image: "assets/Charles_HamiltonHouston.jpg" },
    { id: 2, name: "Clarence Darrow", description: "Defended in the Scopes 'Monkey' Trial and the Leopold and Loeb case.", image: "assets/Clarence_Darrow.jpg" },
    { id: 3, name: "Daniel Webster", description: "Prominent 19th-century lawyer known for his advocacy in landmark cases like Dartmouth College and McCulloch v. Maryland.", image: "assets/Daniel_Webster.jpg" },
    { id: 4, name: "David Boies", description: "Known for his role in the United States v. Microsoft case and representing Al Gore in Bush v. Gore.", image: "assets/David_Boies.jpg" },
    { id: 5, name: "F. Lee Bailey", description: "Defended high-profile cases such as the Boston Strangler, Patty Hearst, and the My Lai Massacre.", image: "assets/F.Lee_Bailey.jpg" },
    { id: 6, name: "Francis Biddle", description: "Attorney General under FDR and primary American judge at the Nuremberg Trials.", image: "assets/Francis_Biddle.jpg" },
    { id: 7, name: "Francis Scott Key", description: "Best known as the author of 'The Star-Spangled Banner,' Key was also a lawyer who argued several cases before the U.S. Supreme Court.", image: "assets/Francis_ScottKey.jpg" },
    { id: 8, name: "Geoffrey Fieger", description: "Best known for his defense of Dr. Jack Kevorkian in assisted suicide cases.", image: "assets/Geoffrey_Fieger.jpg" },
    { id: 9, name: "Gerry Spence", description: "Renowned for never losing a criminal case, Spence is celebrated for his defense in the Karen Silkwood case.", image: "assets/Gerry_Spence.jpg" },
    { id: 10, name: "Hugo Black", description: "Associate Justice of the U.S. Supreme Court, strong defender of civil liberties and the First Amendment.", image: "assets/Hugo_Black.jpg" },
    { id: 11, name: "John Adams", description: "Second President of the United States and a prominent lawyer who successfully defended British soldiers in the Boston Massacre trial.", image: "assets/John_Adams.jpg" },
    { id: 12, name: "John Jay", description: "First Chief Justice of the United States, key figure in the founding of the American legal system.", image: "assets/John_Jay.jpg" },
    { id: 13, name: "John Marshall", description: "Fourth Chief Justice of the United States, established principles of American constitutional law.", image: "assets/John_Marshall.jpg" },
    { id: 14, name: "Johnnie Cochran", description: "Gained national fame for his role in the O.J. Simpson defense team and also represented celebrities like Michael Jackson and Tupac Shakur.", image: "assets/Johnnie_Cochran.jpg" },
    { id: 15, name: "Joseph Story", description: "An Associate Justice of the U.S. Supreme Court, known for his influential commentaries on the Constitution.", image: "assets/Joseph_Story.jpg" },
    { id: 16, name: "Louis Brandeis", description: "Associate Justice of the U.S. Supreme Court, known for his advocacy of privacy and social justice.", image: "assets/Louis_Brandeis.jpg" },
    { id: 17, name: "Mark Lanier", description: "A prominent trial lawyer known for his successful litigation against major corporations.", image: "assets/Mark_Lanier.jpg" },
    { id: 18, name: "Mary Jo White", description: "The first female U.S. Attorney for the Southern District of New York, known for prosecuting the 1993 World Trade Center bombers and Bernie Madoff.", image: "assets/Mary_Jo_White.jpg" },
    { id: 19, name: "Myra Bradwell", description: "Early female lawyer and publisher of the influential legal newspaper Chicago Legal News, advocated for women's rights to practice law.", image: "assets/Myra_Bradwell.jpg" },
    { id: 20, name: "Oliver Wendell Holmes Jr.", description: "Associate Justice of the U.S. Supreme Court, known for his influence on American legal thought.", image: "assets/Oliver_WendellHolmes.jpg" },
    { id: 21, name: "Ralph Nader", description: "Political activist and attorney noted for consumer protection and environmentalism.", image: "assets/Ralph_Nader.jpg" },
    { id: 22, name: "Robert Kennedy", description: "U.S. Attorney General during his brother John F. Kennedy's presidency, known for his work in civil rights and organized crime.", image: "assets/Robert_Kennedy.jpg" },
    { id: 23, name: "Robert Paine", description: "Signer of the Declaration of Independence and Attorney General of Massachusetts, prosecuted the soldiers involved in the Boston Massacre.", image: "assets/Robert_Paine.jpg" },
    { id: 24, name: "Robert Shapiro", description: "A member of the 'Dream Team' that defended O.J. Simpson, Shapiro has represented celebrities such as Eva Longoria and Rob Kardashian.", image: "assets/Robert_Shapiro.jpg" },
    { id: 25, name: "Roger Taney", description: "Fifth Chief Justice of the U.S., known for the Dred Scott v. Sandford decision.", image: "assets/Roger_Taney.jpg" },
    { id: 26, name: "Rudy Giuliani", description: "Former Mayor of New York City and U.S. Attorney for the Southern District of New York, Giuliani gained fame for his prosecution of organized crime and his leadership following the 9/11 attacks.", image: "assets/Rudy_Giuliani.jpg" },
    { id: 27, name: "Salmon P. Chase", description: "An American politician and jurist who served as the sixth Chief Justice of the United States, known for his strong opposition to slavery and his efforts in the legal and political arenas to abolish it.", image: "assets/Salmon._Chase.jpg" },
    { id: 28, name: "Thurgood Marshall", description: "First African-American Supreme Court Justice, famous for Brown v. Board of Education.", image: "assets/Thurgood_Marshall.jpg" },
    { id: 29, name: "William Kunstler", description: "A civil rights lawyer famous for defending the Chicago Seven, Kunstler was known for his work in numerous high-profile cases involving civil liberties.", image: "assets/William_Kunstler.jpg" }
];

let currentRound = 0;
let correctAnswers = 0;
let correctLawyer = null;

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
    displayDescription(correctLawyer.description);
}

function displayLawyers(lawyerList) {
    lawyerList.forEach((lawyer, index) => {
        const lawyerDiv = document.getElementById(`lawyer${index + 1}`);
        lawyerDiv.innerHTML = `<img src="${lawyer.image}" alt="${lawyer.name}"><p>${lawyer.name}</p>`;
        lawyerDiv.dataset.id = lawyer.id;
        lawyerDiv.classList.remove('selected');
    });
}

function displayDescription(description) {
    document.getElementById('description-container').innerText = description;
}

function selectLawyer(index) {
    const selectedDiv = document.getElementById(`lawyer${index}`);
    const lawyerId = selectedDiv.dataset.id;

    if (parseInt(lawyerId) === correctLawyer.id) {
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
