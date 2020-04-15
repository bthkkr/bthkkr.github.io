// *******************************************************
// Window Onload
// *******************************************************

// window.onload = setUpGame();

window.onload = function () {
	setUpGame();
	// *******************************************************
	// Function for SetUp
	// *******************************************************

	function setUpGame() {
		// Confirm to Start
		var playGame = confirm('Ready to play Hangman Game');
		if (playGame) {
			// creating a prompt
			promptUser();
		} else {
			quitGame();
		}
	}

	// *******************************************************
	// Function for PromptUser
	// *******************************************************

	function promptUser() {
		var nameEntered = prompt("What's your name?");
		if (nameEntered === '') {
			//user pressed OK, but the input field was empty
			alert('Please enter your name cannot leave it blank!');
			promptUser();
		} else if (nameEntered) {
			// user typed something and hit OK
			alert('Hello ' + nameEntered + ' Here you go for Hangman Game!');
		} else {
			// user hit cancel
			// alert('Please enter your name cannot leave it blank!');
			// promptUser();
			quitGame();
		}
	}

	// *******************************************************
	// Function for QuitGame
	// *******************************************************

	function quitGame() {
		var quitPlay = confirm('Do you want to quit this game?');
		if (quitPlay) {
			window.close();
		} else {
			setUpGame();
		}
	}

	//setUpGame();
	//debugger;
	var alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	var counter = 0;
	var countScore = 0;

	// *******************************************************
	// Creating GRID Buttons Layout
	// *******************************************************
	//var buttons = function () {
	//debugger;
	myButtons = document.getElementById('buttons');

	letters = document.createElement('ul');

	for (var i = 0; i < alphabet.length; i++) {
		letters.id = 'alphabet';
		list = document.createElement('li');
		list.id = 'letter';
		list.innerHTML = alphabet[i];
		//check();
		myButtons.appendChild(letters);
		letters.appendChild(list);
	}

	//}
	// function check() {
	// 	list.onclick = function () {
	// 		console.log('Hello world');
	// 	};
	// }

	// *******************************************************
	// Calling Timer Function
	// *******************************************************
	var fiveMinutes = 60 * 3,
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);

	// Create Score variable
	var scored = document.querySelector('#score');
	scored.innerHTML = 0;

	//Create an array of words
	var words = ['javascript', 'monkey', 'amazing', 'pancake'];

	// Pick a random word
	var word = words[Math.floor(Math.random() * words.length)];

	// Set up the answer array
	var answerArray = [];
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = '    _    ';
	}

	var wordHolder = document.querySelector('#hold');
	wordHolder.innerHTML = answerArray.join('');

	// Variable for the letters left or correct guesses left
	var remainingLetters = word.length;
	//
	//debugger;
	// list.onclick = function clickHandler(event) {
	// 	console.log(this.innerText);

	// 	var guess = this.innerText;
	// 	console.log(guess);
	// 	this.setAttribute('class', 'active');
	// 	this.onclick = null;
	// 	for (var j = 0; j < word.length; j++) {
	// 		if (word[j] === guess) {
	// 			answerArray[j] = guess;
	// 			wordHolder.innerHTML = answerArray.join('');
	// 			remainingLetters--;
	// 			console.log(remainingLetters);
	// 			counter = counter + 1;
	// 		}
	// 	}
	// 	if (counter != 0 && (counter == 1 || counter > 1)) {
	// 		countScore = parseInt(scored.innerHTML) + 10;
	// 		scored.innerHTML = countScore;
	// 		counter = 0;
	// 	} else if (counter == 0) {
	// 		countScore = parseInt(scored.innerHTML) - 5;
	// 		scored.innerHTML = countScore;
	// 		counter = 0;
	// 	}
	// };

	//letters.addEventListener('click', (event) => {

	// *******************************************************************************
	// Adding Event Listener for the List created and the User Guess loop or Game Loop
	// ******************************************************************************

	letters.addEventListener('click', function clickHandler(event) {
		// event.preventDefault();
		// console.log(event.target.innerHTML);
		// var clicked = event.target;
		console.log(event.target.innerHTML);
		//debugger;
		var guess = event.target.innerHTML;
		console.log(guess);

		event.target.setAttribute('class', 'active');
		//event.target.onclick = null;
		//event.target.removeEventListener('click', event);
		// event.target.removeEventListener ("click", clickHandler);
		// event.target.onclick = null;
		console.log(this.onclick);
		//debugger;
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				wordHolder.innerHTML = answerArray.join('');
				remainingLetters--;
				console.log(remainingLetters);
				counter = counter + 1;
			}
		}
		if (counter != 0 && (counter == 1 || counter > 1)) {
			countScore = parseInt(scored.innerHTML) + 10;
			scored.innerHTML = countScore;
			counter = 0;
		} else if (counter == 0) {
			countScore = parseInt(scored.innerHTML) - 5;
			scored.innerHTML = countScore;
			counter = 0;
		}
	});

	wordHolder.innerHTML = answerArray.join('');

	function startTimer(duration, display) {
		var timer = duration,
			minutes,
			seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;

			display.textContent = minutes + ':' + seconds;

			if (--timer < 0) {
				// add one second so that the count down starts at the full duration
				// example 05:00 not 04:59
				timer = duration;
			}

			// if (minutes == 0 && seconds == 0) {
			// 	display.textContent = 'GAME OVER';
			// 	break;
			// }
		}, 1000);
		// we don't want to wait a full second before the timer starts
		// timer();
		// setInterval (timer, 1000);
	}
	// *******************************************************************************
	// Resetting the Game to Play Again
	// ******************************************************************************
	this.document.getElementById('reset').onclick = function () {
		//letters.parentNode.removeChild(letters);
	};
};
//********************************************************
//CODING for this Game Ends Here
//********************************************************

// // The game loop
// while (remainingLetters > 0) {
// 	// Show the player their progress
// 	//wordHolder.innerHTML = answerArray.join('');
// 	//alert(answerArray.join(' '));

// 	// Get a guess from the player
// 	//check();
// }

// // function check() {
// // 	list.onclick = function () {
// // 		var guess = this.innerHTML;
// // 		this.setAttribute('class', 'active');
// // 		this.onclick = null;
// // 		//Update the game state with the guess
// // 		for (var j = 0; j < word.length; j++) {
// // 			if (word[j] === guess) {
// // 				answerArray[j] = guess;
// // 				remainingLetters--;
// // 			}
// // 		}
// // 	};
// // }
// // Show the answer and congratulate the player
// // //alert(answerArray.join(' '));
// wordHolder.innerHTML = answerArray.join('');
// alert('Good job! The answer was ' + word);

// ******************************************************
//CODING FOR THE GAME
// ******************************************************

//Create an array of words
// var words = ['javascript', 'monkey', 'amazing', 'pancake'];

// // Pick a random word
// var word = words[Math.floor(Math.random() * words.length)];

// // Set up the answer array
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
// 	answerArray[i] = ' _ ';
// }

// var wordHolder = document.getElementById('hold');
// wordHolder.innerHTML = answerArray.join('');

// var remainingLetters = word.length;

// // The game loop
// while (remainingLetters > 0) {
// 	// Show the player their progress
//      wordHolder.innerHTML = answerArray.join('');
// 	//alert(answerArray.join(' '));

// 	// Get a guess from the player
// 	//var guess = prompt('Guess a letter, or click Cancel to stop playing.');
// 	var display = document.getElementById("message");
// 	display.innerHTML = 'Guess a letter, or click Cancel to stop playing.';

// 	//var guessLetter = prompt('Guess a letter, or click Cancel to stop playing.');
// 	//var guess = guessLetter.toLowerCase;
// 	if (guess === null) {
// 		// Exit the game loop
// 		break;
// 	} else if (guess.length !== 1) {
// 		alert('Please enter a single letter.');
// 	} else {
// 		// Update the game state with the guess
// 		for (var j = 0; j < word.length; j++) {
// 			if (word[j] === guess) {
// 				answerArray[j] = guess;
// 				remainingLetters--;
// 			}
// 		}
// 	}
// 	// The end of the game loop
// }

// // Show the answer and congratulate the player
// //alert(answerArray.join(' '));
// wordHolder.innerHTML = answerArray.join('');
// alert('Good job! The answer was ' + word);

// ******************************************************
// SETTING TIMER FOR THE GAME
// ******************************************************

// 	function startTimer(duration, display) {
// 		var timer = duration,
// 			minutes,
// 			seconds;
// 		setInterval(function () {
// 			minutes = parseInt(timer / 60, 10);
// 			seconds = parseInt(timer % 60, 10);

// 			minutes = minutes < 10 ? '0' + minutes : minutes;
// 			seconds = seconds < 10 ? '0' + seconds : seconds;

// 			display.textContent = minutes + ':' + seconds;

// 			if (--timer < 0) {
// 				// add one second so that the count down starts at the full duration
// 				// example 02:00 not 01:59
// 				timer = duration;
// 			}
// 		}, 1000);
// 		// we don't want to wait a full second before the timer starts
// 		// timer();
// 		// setInterval (timer, 1000);
// 	}
// };

// const generateRandomString = (length = 6) =>
// 	Math.random().toString(20).substr(2, 6);

// const randomNum = generateRandomString();
// console.log(randomNum)
