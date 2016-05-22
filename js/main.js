var questions = [
	{
		question: "What's my last name?",
		answer: "Chack"
	},
	{
		question: "Where was I born?",
		answer: "San Francisco"
	},
	{
		question: "Which of these animals do I have as a pet(s)",
		answer: "rabbit"
	},
	{
		question: "Where was I born?",
		answer: "Where was I born?"
	},
	{
		question: "Where have I been?",
		answer: "nicaragua"
	},
	{
		question: "Am I funny?",
		answer: "duh"
	},
	{
		question: "Who is my Dream Celebrity crush?",
		answer: "Jonathon Scott"
	}
]

for (i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
var correct = 0;
var incorrect = 0;
	for(i = 0; i < questions.length; i++) {
	//make variable for answers
		var answer = questions[i].answer
	//pull out answers for question to see if its a match
 		var guess = document.getElementById('answer' + [i]).value
 		//make variable for questions
 		var questionSpot = document.getElementById('question' + [i])
 	//make function
		if(answer == guess) {
			questionSpot.className = 'correct'
			console.log("correct")
 		} else {
 			questionSpot.className = 'incorrect'
 			console.log('incorrect')
	}
}

	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}

















