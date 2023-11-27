#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import {createSpinner} from 'nanospinner'

// console.log(chalk.bgCyanBright('hi mom'));
let playerName;
const sleep = (ms =2000)=>new Promise((r)=> setTimeout(r, ms));

async function welcome(){
  const rainbowTitile = chalkAnimation.rainbow(` who want's To be a millionare React developer ? \n`);

  await sleep();
  rainbowTitile.stop();

  console.log(`
  ${chalk.bgBlue('HOW TO PLAY')}
  I am a process on your computer.
  If you get any question wrong I will be ${chalk.bgRed('Killed')}
  So get all the questions right...
  `)
}

async function askName(){
  const answers = await inquirer.prompt({
    name:'player_name',
    type: 'input',
    message: 'What is your name?',
    default(){
      return 'Player';
    },
  });
  playerName = answers.player_name;
} 

async function handleAnswer(isCorrect){
  const spinner = createSpinner('checking answer..!!').start();
  await sleep();

  if (isCorrect) {
    spinner.success({text:`Nice work ${playerName}. That is legit answer!`})
  }else{
    spinner.success({text: `💀💀💀 Game over, you lose ${playerName}!`})
    process.exit(1);
  }
}

function winner(){
  console.clear();
  figlet(`Congrats ${playerName} ! \n $ 1 , 0 0 , 0 0 , 0 0 0`,(err, data)=>{
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know, its about making command line look cool`
      )
    );
      process.exit(0);
  });

}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'What is the purpose of using a state management library like Redux in a React application?\n',
    choices: [
      'To manage the applications state in a central location and simplify state updates.',
      ' To optimize the performance of React components by reducing the number of re-renders.',
      ' To create a more modular and maintainable codebase by separating state management from components.',
      'To implement complex data fetching and caching strategies for React applications.',
    ],
  });

  return handleAnswer(answers.question_1 === 'To manage the applications state in a central location and simplify state updates.');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: `What is the difference between a React component's componentWillUpdate() and componentDidUpdate() lifecycle methods?\n`,
    choices: [`componentWillUpdate() is called before the component's DOM is updated, while componentDidUpdate() is called after the DOM is updated.`,
     `componentWillUpdate() is used to perform data fetching or API calls, while componentDidUpdate() is used to update the component's state.`,
     `componentWillUpdate() is called only once per component update, while componentDidUpdate() is called every time the component updates.`,
    `componentWillUpdate() is used to validate user input, while componentDidUpdate() is used to handle side effects.`
  ],
  });
  return handleAnswer(answers.question_2 === `componentWillUpdate() is called before the component's DOM is updated, while componentDidUpdate() is called after the DOM is updated.`);
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `What is the recommended approach for handling asynchronous operations in React components?\n`,
    choices: [
      `Use promises to chain asynchronous operations and ensure they are executed in the correct order.`,
       `Use async/await syntax to make asynchronous code more readable and easier to manage.`,
       ` Use the setState() method to update the component's state directly within the asynchronous operation.`, 
        `Use callbacks to handle asynchronous operations and update the component's state accordingly.`],
  });

  return handleAnswer(answers.question_3 === `Use callbacks to handle asynchronous operations and update the component's state accordingly.`);
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: `What is the concept of memoization in React and how can it be used to improve performance? \n`,
    choices: [
      `Memoization is a pattern for creating reusable React components that can be shared across different parts of the application.`,
      `Memoization is a method for optimizing data fetching in React applications, reducing the number of network requests.`,
     `Memoization is a technique for caching the results of expensive functions, preventing redundant calculations and improving performance.`,
      ` Memoization is a strategy for managing state updates in React components, ensuring consistent state across the application.`, 
    ],
  });
  return handleAnswer(answers.question_4 === `Memoization is a technique for caching the results of expensive functions, preventing redundant calculations and improving performance.`);
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:`What are the benefits of using server-side rendering (SSR) in a React application?`,
    choices: [
      `SSR can enhance SEO by providing Google and other search engines with pre-rendered HTML content.`, 
      `SSR can improve the initial page load performance by rendering the HTML content on the server, reducing the client-side rendering time.`, 
      `SSR can improve the perceived performance of the application by reducing the time it takes for the user to see initial content`, 
      `SSR can simplify the development process by eliminating the need for client-side routing and data fetching.`],
  });

  return handleAnswer(answers.question_5 === `SSR can improve the initial page load performance by rendering the HTML content on the server, reducing the client-side rendering time.`);
}



// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();