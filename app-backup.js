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
    `${question} a tourist spot`,
    `${question} a school`,
    
  ];

  let userInputs = [];
  for (let i = numberOfQuestions -1; i >= 0; i--) {
    
    console.log(i);
    console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`);
    userInputs.push(prompt(questionArray[questionCounter] + `... (${numberOfQuestions -1} questions left)`));
    console.log(userInputs);
    questionCounter++;
    
   console.log(`Question Counter: ${questionCounter}`);
    numberOfQuestions--;
    
  }

  // The modified story
  let originalStory = `<p>In ${userInputs[0]}, traveller extrodinaire ${userInputs[1]} found themselves at ${userInputs[2]} when they met an old schoolmate from  ${userInputs[3]}. Well, as they were talking a hole opened up in the ground and swallowed them whole! That was the end of ${userInputs[1]} and their friend!"</p>`
  console.log(originalStory);

 

  // Web Page Output
  console.log(originalStory);
  document.write(originalStory);
};
