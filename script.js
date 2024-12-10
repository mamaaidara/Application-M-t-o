const chercheBtn = document.querySelector('#search-btn');
const chercheInput = document.querySelector('#search-input');
const emplacementEl = document.querySelector('#location');
const temperatureEl = document.querySelector('#temperature');
const descriptionEl = document.querySelector('#description');

chercheBtn.addEventListener('click', () => {
    const ville = chercheInput.value.trim(); 
    if (!ville) {
        alert('Senegal');
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=254dead4c6a3c2fe0bfc3786e3a38bb9&units=metric&lang=fr`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ville introuvable');
            }
            return response.json();
        })
        .then(donnees => {
            emplacementEl.textContent = `Ville : ${donnees.name}`;
            temperatureEl.textContent = `Température : ${donnees.main.temp} °C`;
            descriptionEl.textContent = `Description : ${donnees.weather[0].description}`;
        })
        .catch(error => {
            alert(error.message);
        });
});
