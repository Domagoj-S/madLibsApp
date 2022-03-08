//comment
"use strict";

window.onload = () => {
  // Total questions
  let numberOfQuestions = 28;

  // Question Counter (which question are we on)
  let questionCounter = 0;

  // Test logic:
  let question = `Please enter a`;
  let questionArray = [
    `${question} year ("2001", "2021" etc)`,
    `${question} person's full name`,
    `${question} computer-specific model ("commodore 64" etc)`,
    `${question} famous school`,
    `${question} word for people you know (friends, family etc)`,
    `${question} type of bug`,
    `${question} computer-specific part (plural-tense, ie "screens")`,
    `${question} profession (plural-tense, i.e. "painters")`,
    `${question} type of book`,
    `${question} verb (past-tense)`,
    `${question}nother verb (past-tense)`,
    `${question}n adjective`,
    `${question} pronoun`,
    `${question} noun`,
    `${question} verb`,
    `${question} month, day and year (long-form, ie January, 1 2000)`,
    `${question} number`,
    `${question} noun (plural-tense)`,
    `${question} famous museum`,
    `${question} city, state (ie Washington, D.C)`,
    `${question}n adjectiv`,
    `${question} physics-specific noun (ie "gravity")`,
    `${question} person's full name`,
    `${question} number`,
    `${question} type of document (ie "poem", "essay" etc)`,
    `${question} bad thing (ie an "error")`,
    `${question}n old machine`,
    `${question} tool used for hunting`,
    `${question} verb (infinitive-tense)`,
  ];

  let userInputs = [];
  for (let i = numberOfQuestions; i >= 0; i--) {
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
  let originalStory = `<p>In ${userInputs[0]}, traveller extrodinaire ${userInputs[1]} found herself working on a ${userInputs[2]} at ${userInputs[3]}. It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."</p>
    <p>Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[11]} culture. ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[1]}'s favorite ${userInputs[13]}s. ${userInputs[1]} ${userInputs[14]} of natural causes on January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, the offending ${userInputs[5]}'s ${userInputs[17]}, along with the original ${userInputs[8]}, can be seen at the ${userInputs[18]} in ${userInputs[19]}.</p>
    <p>And while this is the "${userInputs[20]}" use case of finding a ${userInputs[2]} ${userInputs[5]}, the original use of the word dates further back in ${userInputs[21]} to ${userInputs[22]}, who in an ${userInputs[23]} ${userInputs[24]} used the term "${userInputs[5]}" to refer to a technological ${userInputs[25]}. While he worked on the quadruplex ${userInputs[26]}, he said it needed a "${userInputs[5]} ${userInputs[27]} to ${userInputs[28]} properly."</p>`;
  console.log(originalStory);

  // End of User Inputs
  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  // Output
  console.log(originalStory);
  document.write(originalStory);
};

// For De-Bugging:
/* let userInputs = [
    "1776",
    "J.S. Bach",
    "Nintendo 64",
    "Bob Ross's School of Painting",
    "dance partners",
    "praying mantis",
    "buttons",
    "ballerinas",
    "love letter",
    "skipped",
    "hopped",
    "soft",
    "it",
    "soda can",
    "burped",
    "May, 4th 1983",
    "42",
    "socks",
    "MoMA",
    "London, England",
    "strong",
    "black hole",
    "Liberachi",
    "Cher",
    "3000",
    "bedtime story",
    "explosion",
    "derrigable",
    "duck call",
    "sing",
]; */