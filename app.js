//comment
"use strict";

window.onload = () => {
  // Total questions
  let numberOfQuestions = 4;

  // Question Counter (which question are we on)
  let questionCounter = 0;

  // Test logic:
  let question = `Please enter a`;
  let questionArray = [
    `${question} year ("2001", "2021" etc)`,
    `${question} person's full name`,
    `${question} computer-specific model ("commodore 64" etc)`,
    `${question} famous school`,
    
  ];

  let userInputs = [];
  for (let i = numberOfQuestions -1; i >= 0; i--) {
    // console.log(`The "i" of our "for" loop `);
    // console.log(i);
    // console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(
      questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${numberOfQuestions} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
    // console.log(`This is the current "questionCounter" variable (it should go up):`);
    // console.log(questionCounter);
    numberOfQuestions--;
    // questionsLeft = `; (${questions} questions left)`;
    // console.log(`This is the current "Questions" variable (it should go down ... and be the same as the next "i"`);
    // console.log(numberOfQuestions);
  }

  // The User's not-drunk history of computer bugs
  let originalStory = `<p>In ${userInputs[0]}, traveller extrodinaire ${userInputs[1]} found herself working on a ${userInputs[2]} at ${userInputs[3]}. It was at this time that ${userInputs[4]} discovered a ."</p>`
  console.log(originalStory);

  // End of User Inputs
  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  // Output
  console.log(originalStory);
  document.write(originalStory);
};

