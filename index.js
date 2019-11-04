document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const userInput = document.getElementById('name-input')
  
  let joke;

  function fetchJoke() {
    fetch('https://icanhazdadjoke.com/'
    , {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      joke = jokeData.joke; //moved into the fetch otherwise it will load before fetch() is done and get set to undefined
      const newJokeLi = document.createElement('li') //moved newJokeLi here to create a new one each time
      newJokeLi.innerHTML = `
      <span class="username">${userInput.value} says:</span> ${joke}
      `;
      jokeList.appendChild(newJokeLi);
    })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault(); //needed to add this in since a submit wants to post
    if(userInput.value === "") return;
    fetchJoke()
  })
});