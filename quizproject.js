let currentQuestion = 0;
let currentHint = 0;
let hintUsed = 0; //if else
let score = 0;
let questions = [
   {//1
	"question": "1. Which of the following animals do not have a brain?",
	"a": "Donkey",
	"b": "Starfish",
	"c": "Duck",
	"d": "Pigeon",
	"image":"quizimages/q1.jpg",
	"answer": "b",
   "hint": " Amphibious are the only type of animals that don't have brain..."
   },
   {//2
      "question": "2. How many species of squirrels are there in Canada?",
      "a": "180",
      "b": "4",
      "c": "22",
      "d": "500",
      "image":"quizimages/q2.jpg",
      "answer": "c",
      "hint": "More than 2 but less than 50... "

   },
   {//3
      "question": "3. Which bird lays the biggest eggs?",
      "a": "Peacock",
      "b": "Ostriche",
      "c": "Hen",
      "d": "Heron",
      "image":"quizimages/q3.jpg",
      "answer": "b",
      "hint": "One ostriche egg is equal to 25 hen eggs..."

   },
   {//4
      "question": "4. Which is the animal in the picture?",
      "a": "Beaver",
      "b": "Koala",
      "c": "Fox",
      "d": "Hyena ",
      "image":"quizimages/q4.jpg",
      "answer": "d",
      "hint": "It's a wild animal that enjoys eating other animal's carcasses..."

   },
   {//5
      "question": "5. Which animal shares with humans 98% of the same DNA?",
      "a": "Chimpanzee",
      "b": "Lemur",
      "c": "Gorilla",
      "d": "Cows",
      "image":"quizimages/q5.jpg",
      "answer": "a",
      "hint": "Gorillas share with human just 96% of the same DNA..."

   },
   {//6
      "question": "6. Up to what temperature are arctic foxes able to live?",
      "a": "-58°F",
      "b":  "32°F",
      "c": "0°F",
      "d": "-2°F",
      "image":"quizimages/q6.jpg",
      "answer": "a",
      "hint": "The answer is lower than you expected..."
   },
   {//7
      "question": "7. What color is giraffes' tongue?",
      "a": "Yellow-orange",
      "b": "Dark green",
      "c": "Blu-purple",
      "d": "Red",
      "image":"quizimages/q7.jpg",
      "answer": "c",
      "hint": "Their tong is very dark but has more colors..."

   },
   {//8
      "question": "8. Which animal never goes to sleep?",
      "a": " My next door neighbour's dog",
      "b": "Bees",
      "c": "Horses",
      "d": "Bullfrogs",
      "image":"quizimages/q8.jpg",
      "answer": "d",
      "hint": "The picture might help..."

   },
   {//9
      "question": "9. Cats are believed to be the only mammals that can't...",
      "a": "Swim",
      "b": "Taste sweeteness",
      "c": "Run fast",
      "d": "see colors",
      "image":"quizimages/q9.jpg",
      "answer": "b",
      "hint": "They can't discern a cake from a pizza..."

   },
   {//10
      "question": "10. What's the biggest size of a bear's foot?",
      "a": "3 feet",
      "b": "12 feet",
      "c": "40 feet",
      "d": "1 foot",
      "image":"quizimages/q10.jpg",
      "answer": "b",
      "hint": "The feet are about double a men height..."

   }
  
 ];
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 
 
 function loadQuestion() {
     
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } 
 
 function hint(){
   //for (let i = 0; i < 3; i++){
      document.getElementById("hint-el").innerHTML = questions[currentHint].hint;
   //}


}
 function markIt(ans) {
     
    let message = "";
    currentHint++;
    document.getElementById("hint-el").innerHTML = "";


    if (ans == questions[currentQuestion].answer) {
        
       score++;
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "CORRECT :) Your score is " + score + " / " + questions.length;

    } else {
       message = "INCORRECT :( Your score is " + score + " / " + questions.length; 
    } 
        
   
    
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       message = "GREAT JOB, you completed the quiz! Now you know more fun facts about the animal world <3";
    } else {
       loadQuestion();
    }
    
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } 
 
 
 
 
 
 
 
 
 
 
 
 
   
