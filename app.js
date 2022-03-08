"use strict";

window.onload = () => {
  // Total number of questions
  let numberOfQuestions = 4;

  // The question counter
  let questionCounter = 0;


  let question = `Enter a`;
  let questionArray = [
    `${question} calendar year`,
    `${question} person's full name`,
<<<<<<< HEAD
    `${question} a tourist spot`,
=======
    `${question} a tourist location`,
>>>>>>> main
    `${question} a school`,
    
  ];

  let userInputs = [];
<<<<<<< HEAD
  for (let i = numberOfQuestions -1; i >= 0; i--) {
    
    console.log(i);
    console.log(questionArray[questionCounter] + `... (${numberOfQuestions -1} questions left)`);
    userInputs.push(prompt(questionArray[questionCounter] + `... (${numberOfQuestions -1} questions left)`));
   
    if (userInputs[questionCounter] == ""){
      console.log("The user didn't write anything");
      
        } else {
    
=======
  for (let i = questionArray.length -1; i >= 0; i--) {
    // console.log(`The "i" of our "for" loop `);
    // console.log(i);
    // console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(
      questionArray[questionCounter] + `... (${i} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${i} questions left)`
      )
    );
>>>>>>> main
    console.log(userInputs);
   
  }

    questionCounter++;
    
   console.log(`Question Counter: ${questionCounter}`);
    numberOfQuestions--;

    
    
  }

<<<<<<< HEAD

  // The modified story
  let originalStory = `<h1 style="color:red; text-shadow: 1px 1px 4px black">In ${userInputs[0]}, traveller extrodinaire ${userInputs[1]} found themselves at ${userInputs[2]} when they met an old schoolmate from  ${userInputs[3]}. Well, as they were talking a hole opened up in the ground and swallowed them whole! That was the end of ${userInputs[1]} and their friend!"</h1>`
=======
  // The User's not-drunk history of computer bugs
  let originalStory = `<p>In ${userInputs[0]}, traveller extrodinaire ${userInputs[1]} found themselves at ${userInputs[2]} when they met an old schoolmate from ${userInputs[3]}. Well. as they were talking a hole opened up beneath them and swallowed them whole and that was the end of ${userInputs[0]} and their friend!"</p>`
>>>>>>> main
  console.log(originalStory);

 

  // Web Page Output
  console.log(originalStory);
  document.write(originalStory);
};

