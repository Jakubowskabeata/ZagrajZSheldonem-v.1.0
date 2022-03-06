const gameSummary = {
	numbers: 0,
	wins: 0,
	losses: 0,
	draws: 0,
};
const game = {
	playerHand: "",
	aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {

	game.playerHand = this.dataset.option;
	hands.forEach((hand) => {
		hand.style.backgroundColor = "";
	});
	this.style.backgroundColor = "#51bf51";
}

function aiChoice() {
	return hands[Math.floor(Math.random() * 5)].dataset.option;
}

function checkResult(player, ai) {
	if (player === ai) {
		return "draw";
	} else if (
		(player === "papier" && ai === "kamień") ||
		(player === "papier" && ai === "spock") ||
		(player === "kamień" && ai === "nożyczki") ||
		(player === "kamień" && ai === "jaszczurka") ||
		(player === "nożyczki" && ai === "papier") ||
		(player === "nożyczki" && ai === "jaszczurka") ||
		(player === "jaszczurka" && ai === "spock") ||
		(player === "jaszczurka" && ai === "papier") ||
		(player === "spock" && ai === "kamień") ||
		(player === "spock" && ai === "nożyczki")
	) {
		return "win";
	} else {
		return "loss";
	}
}
const imgSheldon = document.createElement("img");
const mdSheldon = document.querySelector(".moodSheldon");

function publishResult(player, ai, result) {
	document.querySelector('[data-summary="your-choice"]').textContent = player;
	document.querySelector('[data-summary="ai-choice"]').textContent = ai;
	document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;
	if (result === "win") {
		document.querySelector("p.wins span").textContent = ++gameSummary.wins;
		document.querySelector('[data-summary="who-win"]').textContent =
			"Wygrałeś!";
		document.querySelector('[data-summary="who-win"]').style.color = "#14401F";
		imgSheldon.src = "https://c.tenor.com/dJQZmZdk57EAAAAC/sad-sheldon.gif";
		mdSheldon.appendChild(imgSheldon);
	} else if (result === "loss") {
		document.querySelector("p.losses span").textContent = ++gameSummary.losses;
		document.querySelector('[data-summary="who-win"]').textContent = "Sheldon";
		document.querySelector('[data-summary="who-win"]').style.color = "red";
		imgSheldon.src =
			"https://c.tenor.com/S0hDiQRyBgQAAAAC/good-brain-big-bang-theory.gif";
		mdSheldon.appendChild(imgSheldon);
	} else {
		document.querySelector("p.draws span").textContent = ++gameSummary.draws;
		document.querySelector('[data-summary="who-win"]').textContent = "Remis";
		document.querySelector('[data-summary="who-win"]').style.color = "blue";
		imgSheldon.src = "https://c.tenor.com/CHbdGmgq16oAAAAC/sheldon-nope.gif";
		mdSheldon.appendChild(imgSheldon);
	}
}

function endGame() {
	document.querySelector(
		`[data-option = "${game.playerHand}"]`
	).style.backgroundColor = "";
	game.playerHand = "";
}

function startGame() {
	imgSheldon.classList.remove("off");

	if (!game.playerHand) {
		return alert("wybierz obrazek");
	}
	game.aiHand = aiChoice();
	const gameResult = checkResult(game.playerHand, game.aiHand);
	publishResult(game.playerHand, game.aiHand, gameResult);
	imgSheldon.classList.remove("off");
	endGame();
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));
document.querySelector(".start").addEventListener("click", startGame);



//popup

document
	.querySelector(".rules-button")
	.addEventListener("click", function () {
		document.querySelector(".modal-wrap").classList.add("active");
		document.querySelector(".wrap").classList.add("blur");
	});
document.querySelector("span.hide").addEventListener("click", function () {
	document.querySelector(".modal-wrap").classList.remove("active");
	document.querySelector(".wrap").classList.remove("blur");
});
