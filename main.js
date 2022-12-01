function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
   <div class="card">
          <h2>${date}<span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
`
}

document.querySelector("#app").innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="Logo da Nlw" />
      </header>

      <main id="cards">
        ${createCard(
          "24/11",
          "quinta",
          createGame("brazil", "10:00", "serbia") +
            createGame("portugal", "13:00", "ghana") +
            createGame("cameroon", "16:00", "switzerland")
        )}
        ${createCard(
          "27/11",
          "terça",
          createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "serbia") +
            createGame("cameroon", "16:00", "ghana")
        )}
        ${createCard(
          "02/12",
          "segunda",
          createGame("brazil", "16:00", "cameroon")
        )}
      </main>
`
