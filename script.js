const container = document.getElementById("container");
let smileys = ["😄", "😃", "😀", "😁", "😆"];
const voteCounts = new Array(smileys.length).fill(0);

function updateVoteCount() {
  container.innerHTML = "";
  smileys.forEach((smiley, index) => {
    const smileyBut = document.createElement("button");
    smileyBut.className = "smiley";
    smileyBut.textContent = smiley;
    smileyBut.addEventListener("click", () => {
      voteCounts[index]++;
      updateVoteCount();
    });

    const voteCountDiv = document.createElement("div");
    voteCountDiv.className = "vote-count";
    voteCountDiv.textContent = voteCounts[index];

    const cardDiv = document.createElement("div");
    container.appendChild(cardDiv);
    cardDiv.appendChild(smileyBut);
    cardDiv.appendChild(voteCountDiv);
  });
}

updateVoteCount();