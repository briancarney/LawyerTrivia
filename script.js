const lawyers = [
    { id: 1, name: "Clarence Darrow", description: "Known for his defense in the Scopes 'Monkey' Trial and the Leopold and Loeb case.", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Thurgood Marshall", description: "The first African-American Supreme Court Justice, famous for his victory in Brown v. Board of Education.", image: "https://via.placeholder.com/100" },
    // Add more lawyers as needed
];

let selectedLawyer = null;
let selectedDescription = null;

window.onload = function() {
    const lawyerList = document.getElementById('lawyer-list');
    const descriptionList = document.getElementById('description-list');

    // Display lawyer names and photos
    lawyers.forEach(lawyer => {
        const lawyerItem = document.createElement('div');
        lawyerItem.className = 'lawyer-item';
        lawyerItem.innerHTML = `<img src="${lawyer.image}" alt="${lawyer.name}"><p>${lawyer.name}</p>`;
        lawyerItem.onclick = () => selectLawyer(lawyerItem, lawyer.id);
        lawyerList.appendChild(lawyerItem);
    });

    // Display lawyer descriptions
    lawyers.forEach(lawyer => {
        const descriptionItem = document.createElement('div');
        descriptionItem.className = 'description-item';
        descriptionItem.innerText = lawyer.description;
        descriptionItem.onclick = () => selectDescription(descriptionItem, lawyer.id);
        descriptionList.appendChild(descriptionItem);
    });
};

function selectLawyer(element, id) {
    if (selectedLawyer) selectedLawyer.classList.remove('selected');
    selectedLawyer = element;
    selectedLawyer.classList.add('selected');
    selectedLawyer.dataset.id = id;
}

function selectDescription(element, id) {
    if (selectedDescription) selectedDescription.classList.remove('selected');
    selectedDescription = element;
    selectedDescription.classList.add('selected');
    selectedDescription.dataset.id = id;
}

function checkMatches() {
    if (!selectedLawyer || !selectedDescription) {
        alert("Please select both a lawyer and a description.");
        return;
    }

    const result = document.getElementById('result');
    if (selectedLawyer.dataset.id === selectedDescription.dataset.id) {
        result.innerText = "Correct match!";
        result.style.color = "green";
    } else {
        result.innerText = "Incorrect match. Try again!";
        result.style.color = "red";
    }

    selectedLawyer.classList.remove('selected');
    selectedDescription.classList.remove('selected');
    selectedLawyer = null;
    selectedDescription = null;
}
