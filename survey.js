const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileGenerator = function(questions) {
  // make rl.question ask each question from our object.
  rl.question(`${questions.name} `, (name) => {
    rl.question(`${questions.music} `, (music) => {
      rl.question(`${questions.meal} `, (meal) => {
        rl.question(`${questions.food} `, (food) => {
          rl.question(`${questions.sport} `, (sport) => {
            rl.question(`${questions.superpower} `, (superpower) => {
              rl.question(`${questions.hobby} `, (hobby) => {
                console.log(`Your profile bio:\n `)
                console.log(`${name} loves listening to ${music} while ${hobby}, \ndevouring ${food} for ${meal}, prefers ${sport} over any other sport, \nand is amazing at ${superpower}.`);

                  rl.close();
              });
            });
          });
        });
      });
    });
  });

};

const questions = {
  name: `What's your name?`,
  hobby: `What's your favourite hobby?`,
  music: `What music do you listen to?`,
  meal: `What's your favourite meal of the day?`,
  food: `What's your favourite food for that meal?`,
  sport: `What's your favourite sport?`,
  superpower: `What is your superpower? In a few words, tell us what you're amazing at!`
}

profileGenerator(questions);
