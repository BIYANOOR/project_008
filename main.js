#!/bin/env node;
import inquirer from "inquirer";
const questions = [
    {
        name: "question_1",
        type: "list",
        message: "What does CPU stand for?",
        choices: ["a) Computer Processing Unit", "b) Central Processing Unit", "c) Computer Programming Unit", "d) Central Program Unit"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Which of the following is an input device?",
        choices: ["a) Printer", "b) Scanner", "c) Monitor", "d) Projector"]
    },
    {
        name: "question_3",
        type: "list",
        message: "What does RAM stand for?",
        choices: ["a) Random Access Memory", "b) Readable Access Memory", "c) Read Access Memory", "d) Rapid Access Memory"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Which one is not a web browser?",
        choices: ["a) Google Chrome", "b) Microsoft Word", "c) Mozilla Firefox", "d) Safari"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Which one is not an operating system?",
        choices: ["a) Windows", "b) Linux", "c) Microsoft Office", "d) macOS"]
    },
    {
        name: "question_6",
        type: "list",
        message: "What is the full form of URL?",
        choices: ["a) Uniform Resource Locator", "b) Universal Resource Locator", "c) Unique Resource Locator", "d) Unified Resource Locator"]
    },
    {
        name: "question_7",
        type: "list",
        message: "Which of the following is used to store data long-term on a computer?",
        choices: ["a) RAM", "b) CPU", "c) Hard Drive", "d) Cache Memory"]
    },
    {
        name: "question_8",
        type: "list",
        message: "What is a firewall used for?",
        choices: ["a) Protecting against viruses", "b) Filtering network traffic", "c) Cleaning junk files", "d) Speeding up computer performance"]
    },
    {
        name: "question_9",
        type: "list",
        message: "Which programming language is used for creating web pages?",
        choices: ["a) Java", "b) Python", "c) HTML", "d) C++"]
    },
    {
        name: "question_10",
        type: "list",
        message: "What is a LAN?",
        choices: ["a) Large Area Network", "b) Local Access Network", "c) Local Area Network", "d) Longitudinal Area Network"]
    },
    {
        name: "question_11",
        type: "list",
        message: "Which type of software allows you to perform calculations and data manipulation?",
        choices: ["a) Operating System", "b) Spreadsheet", "c) Web Browser", "d) Database"]
    },
    {
        name: "question_12",
        type: "list",
        message: "What does HTML stand for?",
        choices: ["a) Hyper Text Markup Language", "b) High Tech Markup Language", "c) Home Tool Markup Language", "d) Hyperlink Text Markup Language"]
    },
    {
        name: "question_13",
        type: "list",
        message: "Which of the following is not a type of computer mouse?",
        choices: ["a) Optical mouse", "b) Wireless mouse", "c) Scroll mouse", "d) Laser mouse"]
    },
    {
        name: "question_14",
        type: "list",
        message: "What does PDF stand for?",
        choices: ["a) Portable Document Format", "b) Personal Document Format", "c) Print Document Format", "d) Professional Document Format"]
    },
    {
        name: "question_15",
        type: "list",
        message: "What is a virus in computing?",
        choices: ["a) A program that speeds up your computer", "b) A malicious program that replicates itself", "c) A type of hardware", "d) A software tool for organizing files"]
    },
    {
        name: "question_16",
        type: "list",
        message: "What is an IP address used for?",
        choices: ["a) To browse the internet", "b) To uniquely identify a device on a network", "c) To send emails", "d) To install software"]
    },
    {
        name: "question_17",
        type: "list",
        message: "Which of these is an example of an output device?",
        choices: ["a) Keyboard", "b) Mouse", "c) Printer", "d) Scanner"]
    },
    {
        name: "question_18",
        type: "list",
        message: "Which of the following is a database management system?",
        choices: ["a) MySQL", "b) Excel", "c) Word", "d) Photoshop"]
    },
    {
        name: "question_19",
        type: "list",
        message: "What is cloud computing?",
        choices: ["a) Storing data on local computers", "b) Using remote servers over the internet to store, manage, and process data", "c) Using software locally", "d) Using a laptop instead of a desktop"]
    },
    {
        name: "question_20",
        type: "list",
        message: "What does CPU Cache do?",
        choices: ["a) It stores temporary data and instructions", "b) It manages the computer’s memory", "c) It connects the CPU to the motherboard", "d) It processes graphics for the monitor"]
    }
];
const correctAnswers = {
    question_1: "b) Central Processing Unit",
    question_2: "b) Scanner",
    question_3: "a) Random Access Memory",
    question_4: "b) Microsoft Word",
    question_5: "c) Microsoft Office",
    question_6: "a) Uniform Resource Locator",
    question_7: "c) Hard Drive",
    question_8: "b) Filtering network traffic",
    question_9: "c) HTML",
    question_10: "c) Local Area Network",
    question_11: "b) Spreadsheet",
    question_12: "a) Hyper Text Markup Language",
    question_13: "c) Scroll mouse",
    question_14: "a) Portable Document Format",
    question_15: "b) A malicious program that replicates itself",
    question_16: "b) To uniquely identify a device on a network",
    question_17: "c) Printer",
    question_18: "a) MySQL",
    question_19: "b) Using remote servers over the internet to store, manage, and process data",
    question_20: "a) It stores temporary data and instructions"
};
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
async function runQuiz() {
    shuffleArray(questions);
    let score = 0;
    for (const question of questions) {
        const answer = await inquirer.prompt([question]);
        if (answer[question.name] === correctAnswers[question.name]) {
            console.log(`${question.message} - Correct`);
            score++;
        }
        else {
            console.log(`${question.message} - Incorrect`);
            console.log(`Your final score is: ${score}`);
            console.log("You lose");
            return;
        }
    }
    console.log(`Your final score is: ${score} out of 20`);
}
runQuiz();
