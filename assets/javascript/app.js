$(document).ready(function() {
	var topics = [
		{
			// Entertainment
			questions: [
				"Which actor has the real name of Charles Carter?",
				"In 1988, what TV talk-show host had a house torn down that he had bought recently for over 6 million dollars?",
				"Whose autobiography was called Back In The Saddle Again?",
				"What play revived on Broadway in 1988, starred Jason Robards and Colleen Dewhurst?",
				"Goldie Hawn's  real first name is what?",
				"Which of the following men were not married to  Ava Gardner?",
				"What was Walt Disney's Mickey Mouse's original name?",
				"Which of the following entertainers was the highest paid for the two years 1988 and 1989?",
				"Which actress starred in the original Broadway production of Cabaret as Sally Bowles?",
				"Ethel Merman did not star in which of the following Broadway musicals?"
			],
			choices: [
				choice1 = [
					"Chuck Norris",
					"Johnny Carson",
					"Gene Autry",
					"Death of a Salesman",
					"Godiva",
					"Richard Burton",
					"Manville",
					"Bill Cosby",
					"Julie Andrews",
					"Annie Get Your Gun"
				],
				choice2 = [
					"Charles Atlas",
					"Jay Leno",
					"Hopalong Cassidy",
					"The Iceman Cometh",
					"Goldie",
					"Mickey Rooney",
					"Melvin",
					"Michael Jackson",
					"Carol Channing",
					"Anything Goes"
				],
				choice3 = [
					"Charlton Heston",
					"Phil Donahue",
					"Tom Mix",
					"Long Day's Journey Into Night",
					"Gloria",
					"Frank Sinatra",
					"Mortimer",
					"Madonna",
					"Jill Haworth",
					"Call Me Madam"
				],
				choice4 = [
					"Jimmy Carter",
					"David Letterman",
					"Roy Rogers",
					"A Moon for the Misbegotten",
					"Grace",
					"Artie Shaw",
					"Murgatroyd",
					"Oprah Winfrey",
					"Liza Minnelli",
					"Pal Joey"
				]
			],
			correctAnswer: [
				"Charlton Heston",
				"Phil Donahue",
				"Gene Autry",
				"Long Day's Journey Into Night",
				"Goldie",
				"Richard Burton",
				"Mortimer",
				"Michael Jackson",
				"Liza Minnelli",
				"Pal Joey"
			]
		}, {
			// Food
			questions: [
				"Which of the following vegetables is not one of the ingredients of V-8 juice?",
				"What country produces the most potatoes?",
				"According to a 1980s Beverage Media poll of four hundred bartenders, what is the average male customers favorite drink?",
				"According to a 1980s Beverage Media poll of four hundred bartenders, what was the female customers favorite drink?",
				"In the drink called a \"zombie\", what is the main alcoholic ingredient?",
				"Of the following dishes, which are not typically made with some kind of seafood?",
				"Which of the following compounds have not been approved for use in the U.S. as an artificial sweetener?",
				"The sandwich known as the \"Reuben\" does not have which of the following ingredients?",
				"Which of the following is not a favorable adjective when discussing wine?",
				"Of all commercial cooking oils, which of these is highest in polyunsaturates  and lowest in saturated fat?"
			],
			choices: [
				choice1 = [
					"Beet",
					"China",
					"Beer",
					"Beer",
					"Beer",
					"Bouillabaisse",
					"Acesulfame K",
					"Boiled ham",
					"Fat",
					"Coconut oil"
				],
				choice2 = [
					"Carrot",
					"United States",
					"Bourbon",
					"Margarita",
					"Brandy",
					"Osso buco",
					"Acetaminophen",
					"Corned Beef",
					"Flinty",
					"Corn oil"
				],
				choice3 = [
					"Spinach",
					"Ireland",
					"Scotch",
					"Peach schnapps and orange juice",
					"Rum",
					"Fritto misto",
					"Aspartame",
					"Sauerkraut",
					"Leggy",
					"Olive oil"
				],
				choice4 = [
					"Cabbage",
					"Russia",
					"Vodka",
					"White wine",
					"Whiskey",
					"Tempura",
					"Saccharine",
					"Swiss Cheese",
					"Vigorous",
					"Safflower oil"
				]
			],
			correctAnswer: [
				"Cabbage",
				"China",
				"Beer",
				"White wine",
				"Rum",
				"Osso buco",
				"Acetaminophen",
				"Boiled ham",
				"Fat",
				"Safflower oil"
			]
		}, {
			// International
			questions: [
			"What African country is the Central Kalahari Game Reserve located in?",
			"What is the function served by the Paris building known as the Sorbonne?",
			"Jack the Ripper terrorized what city in the 19th century?",
			"What industry supplies Botswana with more than 75% of its total revenue?",
			"Which of the following countries does not border Israel?",
			"Who wrote some of the Flash Gordon comic strips that appeared in Europe during World War II?",
			"The surrender of Germany in 1945 ended the Third Reich, when did the Second Reich end?",
			"Who enters the annual Van Cliburn International  Competition?",
			"The Gunpowder Plot conspirators tried to kill what ruler along with members of Parliament in 1605?",
			"Which one of the following countries is not known as one of the Baltic states?"
			],
			choices: [
				choice1 = [
				"Botswana",
				"Hospital",
				"Belfast",
				"Cattle",
				"Egypt",
				"Buster Crabbe",
				"1453",
				"Chefs",
				"Charles I",
				"Albania"
				],
				choice2 = [
				"Nigeria",
				"School",
				"London",
				"Coffee",
				"Jordan",
				"Charles DeGaulle",
				"1871",
				"Chess Players",
				"Elizabeth I",
				"Estonia"
				],
				choice3 = [
				"South Africa",
				"Museum",
				"New York",
				"Diamonds",
				"Saudi Arabia",
				"Federico Fellini",
				"1918",
				"Pianists",
				"Henry VIII",
				"Latvia"
				],
				choice4 = [
				"Kenya",
				"Theater",
				"San Francisco",
				"Tourism",
				"Syria",
				"Hermann Hesse",
				"1933",
				"Squash Players",
				"James I",
				"Lithuania"
				]
			],
			correctAnswer: [
			"Botswana",
			"School",
			"London",
			"Diamonds",
			"Saudi Arabia",
			"Federico Fellini",
			"1918",
			"Pianists",
			"James I",
			"Albania"
			]
		}, {
			// Movies
			questions: [
				"Which one of these Academy Awards did \"Gone With the Wind\" not win?",
				"Which one of these talented actors did not star in the 1989 movie \"Family Business\"?",
				"In the 1933 movie where May West spoke the line \"Come up and see me sometime\" , called She Done Him Wrong, who was her co-star?",
				"Clint Eastwood gave us the immortal line, \"Go ahead... make my day\", in what film?",
				"In the Dirty Harry movies starring Clint Eastwood as Dirty Harry, what was Harry's last name?",
				"How much of his own money did Francis Ford Coppola put up to finish the movie \"Apocalypse Now\" when it ran wildly over budget?",
				"What  1987 film was based on a novel called The Short Timers by Gustav Hasford?",
				"Which of the following actors has the middle name \"DeForest\"?",
				"What was the name of the island on which King Kong was discovered in the original 1933 movie?",
				"In the movie \"Who Framed Roger Rabbit\", which pair of genetically similar characters perform a piano duet?"
			],
			choices: [
				choice1 = [
					"Best actor",
					"Sean Connery",
					"W.C. Fields",
					"Dirty Harry",
					"Callahan",
					"$1 million",
					"Angel Heart",
					"Humphrey Bogart",
					"Ape Island",
					"Bambi and Bullwinkle"
				],
				choice2 = [
					"Best actress",
					"Matthew Broderick",
					"Cary Grant",
					"Magnum Force",
					"Flint",
					"$6 million",
					"Broadcast News",
					"James Cagney",
					"Borneo",
					"Donald Duck and Daffy Duck"

				],
				choice3 = [
					"Best picture",
					"Dustin Hoffman",
					"James Stewart",
					"Sudden Impact",
					"Harrigan",
					"$16 million",
					"Fatal Attraction",
					"Clint Eastwood",
					"Monster Island",
					"Garfield and Sylvester"

				],
				choice4 = [
					"Best supporting actor",
					"Tom Cruise",
					"John Wayne",
					"Tightrope",
					"Steele",
					"$25 million",
					"Full Metal Jacket",
					"Burt Lancaster",
					"Skull Island ",
					"Speedy Gonzales and Minnie Mouse"
				]
			],
			correctAnswer: [
				"Best actor",
				"Tom Cruise",
				"Cary Grant",
				"Dirty Harry",
				"Callahan",
				"$16 million",
				"Full Metal Jacket",
				"Humphrey Bogart",
				"Skull Island ",
				"Donald Duck and Daffy Duck"
			]
		}, {
			// TV
			questions: [
				"What day time soap opera went off the air in 1989 after more than 13 years?",
				"Which of the following roles did the actor Jim Backus not play?",
				"What TV show was the first ever to be watched by over 50 million homes in the United States?",
				"In what state was Mayberry, the setting for the Andy Griffith Show?",
				"The street gang called \"the Sweathogs\" appeared on what TV series?",
				"On the old quiz show You Bet Your Life, what kind of bird was the custodian of the secret word?",
				"On the TV show \"The Love Boat\", Adam Bricker's job on the ship was what?",
				"The creatures known as \"Fraggles\" were created by whom?",
				"On the long running TV drama, The Waltons, who was played by Michael Learned?",
				"Which of these TV shows are not based in a town called Springfield?"
			],
			choices: [
				choice1 = [
					"Guiding Light",
					"The cartoon voice of Mr. Magoo",
					"Part VIII of Roots in 1977",
					"Georgia",
					"Fame",
					"A chicken",
					"Bartender",
					"Lewis Carroll",
					"Esther",
					"The Donna Reed Show"
				],
				choice2 = [
					"Ryan's Hope",
					"\"I\" on the 1950s Television series I Married Joan.",
					"The \"Who Shot J.R. ?\" episode of Dallas in 1980",
					"Indiana",
					"Room 222",
					"A duck",
					"Captain",
					"The Brothers Grimm",
					"John-Boy",
					"Father Knows Best"
				],
				choice3 = [
					"One Life to Live",
					"Thurston Howell III on the 1960s TV series Gilligan's Island",
					"The M*A*S*H special final episode in 1983",
					"North Carolina",
					"Welcome Back, Kotter",
					"A goose",
					"Doctor",
					"Jim Henson",
					"Olivia",
					"The Simpsons"
				],
				choice4 = [
					"The Edge of Night",
					"The voice of Charlie on the 1970s TV series Charlie's Angels",
					"Super Bowl XX in 1986",
					"Tennessee",
					"The White Shadow",
					"A robin",
					"social director",
					"Dr. Seuss",
					"Zeb",
					""
				]
			],
			correctAnswer: [
				"Ryan's Hope",
				"The voice of Charlie on the 1970s TV series Charlie's Angels",
				"The M*A*S*H special final episode in 1983",
				"North Carolina",
				"Welcome Back, Kotter",
				"A duck",
				"Doctor",
				"Jim Henson",
				"Olivia",
				"The Donna Reed Show"
			]
		}, {
			// Music
			questions: [
				"What band leader was known as \"the King of Swing\"?",
				"Which one of these four Australian terms can be found in the lyrics of the song \"Waltzing Matilda\" is a tree?",
				"Which of the following musicals was based on Thornton Wilder's comedy The Matchmaker?",
				"What symphony's last movement includes a setting of Schiller's poem \"Hymn to Joy\"?",
				"The sonnet that starts out \"The world is charged with the grandeur of God\" was written by whom?",
				"The piano piece known as \"The Minute Waltz\" was written by whom?",
				"The musical work, The Sorcerer's Apprentice, was written by whom?",
				"A song called \"Party All the Time\", released in 1985, reached the # 2 spot on Billboard's pop charts. Which Saturday Night Live actor recorded the song?",
				"Two of Barbara Cook's most popular songs, \"Dear Friend\" and\"Vanilla Ice Cream\", were provided by what musical?",
				"What song writer wrote the song with the line \"Mad dogs and Englishmen go out in the mid-day sun\" in it?"
			],
			choices: [
				choice1 = [
					"Tommy Dorsey",
					"Billabong",
					"Hello, Dolly!",
					"Beethoven's Ninth",
					"Gerard Manley Hopkins",
					"Johannes Brahms",
					"Paul Dukas",
					"Garrett Morris",
					"Candide",
					"Noel Coward"
				],
				choice2 = [
					"Benny Goodman",
					"Coolibah",
					"The Music Man",
					"Bruckner's Eight",
					"Henry Wadsworth Longfellow",
					"Frederic Chopin",
					"Wolfgang Amadeus Mozart",
					"Eddie Murphy",
					"Carousel",
					"Gilbert and Sullivan"
				],
				choice3 = [
					"Guy Lombardo",
					"Jumbuck",
					"Take Me Along",
					"Mahler's Tenth",
					"Alfred, Lord Tennyson",
					"Franz Liszt",
					"Maurice Ravel",
					"Bill Murray",
					"The Music Man",
					"Cole Porter"
				],
				choice4 = [
					"Glenn Miller",
					"Tucker-bag",
					"The Unsinkable Molly Brown",
					"Mozart's 40th",
					"H.M.S. Pinafore",
					"Sergei Rachmaninoff",
					"Camille Saint-Saens",
					"Joe Piscopo",
					"She Loves Me",
					""
				]
			],
			correctAnswer: [
				"Benny Goodman",
				"Coolibah",
				"Hello, Dolly!",
				"Beethoven's Ninth",
				"Gerard Manley Hopkins",
				"Frederic Chopin",
				"Paul Dukas",
				"Eddie Murphy",
				"She Loves Me",
				"Noel Coward"
			]
		}
	];

	var lastIndex = -1;
	var lastDifficultyIndex = -1;
	var topicSelected = false;
	var difficultySelected = false;
	var topicIndex;
	var topicBackground;
	var intervalId;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var totalTime;
	var time;
	var i = 0;

	//  Stop function
	function stop() {
	  clearInterval(intervalId);
	}

	function timeConverter(t) {
	    var seconds = t;
	    if (t < 10) {
	    	t = "0:0" + t;
	    }
	    else {
	    	t = "0:" + t;
	    }
	    return t;
	}

	function startMenu() {
		$(".button").removeClass("btn-primary");
		$(".start-menu").css({
			"display": "block",
		});
		$(".trivia").css({
			"display": "none",
		});
		$(".result").css({
			"display": "none",
		});
	}

	$(".button").hover( function() {
		$(this).toggleClass("btn-primary");
	},
	function() {
		$(this).toggleClass("btn-primary");
	});

	// Topic is selected
	$(".button1").click(function(){
		// Switch on topic selected
		$(this).blur();
		$(this).toggleClass("btn-primary");
		topicSelected = true;
		topicIndex = $(this).attr("index");
		topicBackground = $(this).attr("bg");
		// Switch off last topic selected
		if (lastIndex > -1) {
			$("[index=" + lastIndex + "]").toggleClass("btn-primary");
		}
		// Store last topic selected
		setTimeout(function() {
			lastIndex = topicIndex;
		}, 10);
	});

	// Difficulty is selected
	$(".button2").click(function(){
		// Switch on difficulty selected
		$(this).blur();
		$(this).toggleClass("btn-primary");
		var difficulty = $(this).attr("value");
		difficultySelected = true;
		var difficultyIndex = $(this).attr("difficulty-index");
		if (difficulty === "easy") {
			totalTime = 30;
		}
		else if (difficulty === "normal") {
			totalTime = 20;
		}
		else if (difficulty === "hard") {
			totalTime = 10;
		}
		time = totalTime;
		// Switch off last difficulty selected
		if (lastDifficultyIndex > -1) {
			$("[difficulty-index=" + lastDifficultyIndex + "]").toggleClass("btn-primary");
		}
		// Store last difficulty selected
		setTimeout(function() {
			lastDifficultyIndex = difficultyIndex;
		}, 10);
	});

	// Start the game
	$("#start").click(function(){
		if (topicSelected && difficultySelected) {
			$(".start-menu").css({
				"display": "none",
			});
			$(".trivia").css({
				"display": "block",
			});
			$(".result").css({
				"display": "none",
			});
			showNextQuestion();
			$(".front").css({
				"background-color": topicBackground,
			});
		}
		else if (topicSelected && difficultySelected === false) {
			alert("Select a difficulty level");
		}
		else if (topicSelected === false && difficultySelected) {
			alert("Select a topic");
		}
		else if (topicSelected === false && difficultySelected === false) {
			alert("Select a topic and difficulty level");
		}
	});

	function showNextQuestion() {
		if (i < topics[topicIndex].questions.length) {
			// Display timer, question and choices
			var converted = timeConverter(time);
			$(".timer").text("Time Remaining: " + converted);
			$(".question").text(topics[topicIndex].questions[i]);
			for (var j = 0; j < topics[topicIndex].choices.length; j++) {
				$("#choice" + (j+1)).css({
					"display": "block"
				});
				$("#choice" + (j+1)).text((j+1) + ". " + topics[topicIndex].choices[j][i]);
				$("#choice" + (j+1)).attr("value", topics[topicIndex].choices[j][i]);
				if (topics[topicIndex].choices[j][i] === "") {
					$("#choice" + (j+1)).css({
						"display": "none"
					});
				}
			}
			$(".start-menu").css({
				"display": "none",
			});
			$(".trivia").css({
				"display": "block",
			});
			$(".result").css({
				"display": "none",
			});

			// Start timer
			intervalId = setInterval(function() {

				// Decrease time by one second.
				time--;

				// Display updated time
				var converted = timeConverter(time);
				$(".timer").html("<h3>Time Remaining: " + converted + "</h3>");


				// Time is up
				if (time === 0) {
					stop();
					unanswered++;

					$(".correct-answer").text(topics[topicIndex].correctAnswer[i]);
					$(".trivia").css({
						"display": "none",
					});
					$(".correct-content").css({
						"display": "none",
					});
					$(".incorrect-content").css({
						"display": "none",
					});
					$(".no-time-content").css({
						"display": "block",
					});

					// Flip Card
					$(function(){
						prettyPrint();
						$(".card").flip({
						trigger: 'manual'
						});

						$(".card").flip(true);
					});
					setTimeout(function() {
						time = totalTime;

						// Unflip card
						$(function(){
							prettyPrint();
							$(".card").flip({
							trigger: 'manual'
							});

							$(".card").flip(false);
						});

						// Show next question
						i++;
						showNextQuestion();
					}, 3000);
				}
			}, 1000);
		}

		// Show Results
		if (i === topics[topicIndex].questions.length) {
			stop();
			$("#correct").text(correct);
			$("#incorrect").text(incorrect);
			$("#unanswered").text(unanswered);
			$(".start-menu").css({
				"display": "none",
			});
			$(".trivia").css({
				"display": "none",
			});
			$(".result").css({
				"display": "block",
			});
		}
	}

	// Select Answer
	$(".choice").on("click", function() {
		stop();
		time = totalTime;
		console.log("time: ", time);

		$(".trivia").css({
			"display": "none",
		});
		// User picked correct answer
		if ($(this).attr("value") === topics[topicIndex].correctAnswer[i]) {
			correct++;
			$(".correct-content").css({
				"display": "block",
			});
			$(".incorrect-content").css({
				"display": "none",
			});
			$(".no-time-content").css({
				"display": "none",
			});
		}

		// User picked wrong answer
		else {
			incorrect++;
			$(".correct-answer").text(topics[topicIndex].correctAnswer[i]);
			$(".correct-content").css({
				"display": "none",
			});
			$(".incorrect-content").css({
				"display": "block",
			});
			$(".no-time-content").css({
				"display": "none",
			});
		}


		// Flip card
		$(function(){
			prettyPrint();
			$(".card").flip({
				trigger: 'manual'
			});

			$(".card").flip(true);
		});

		setTimeout(function() {
			// Unflip card
			$(function(){
				prettyPrint();
				$(".card").flip({
					trigger: 'manual'
				});

				$(".card").flip(false);
			});

			// Show next question
			i++;
			showNextQuestion();
		}, 3000);
	});

	// Play again
	$('.play-again').click(function() {
		i = 0;
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		lastIndex = -1;
		lastDifficultyIndex = -1;
		startMenu();
		$(".front").css({
			"background-color": "#BCD8C1",
		});
	});

	startMenu();
});