// Function to fetch advice from the API

async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return { id: data.slip.id, advice: data.slip.advice };
}


// Function to display the advice

async function displayAdvice() {
    var adviceElement = document.getElementById('advice');
    var idElement = document.getElementById('Id');
    var adviceData = await fetchAdvice();
    adviceElement.textContent =  "“" + adviceData.advice + "”";
    idElement.textContent = adviceData.id;
    console.log(adviceData.id);
}



// Attach event listener to the button
var button = document.getElementById('diceDiv');
button.addEventListener('click', displayAdvice);



displayAdvice();
