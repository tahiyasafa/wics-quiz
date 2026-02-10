// src/data/linux.js

const linuxQuestions = [
  {
    question: "Which command is used to list files in a directory?",
    options: ["ls", "cd", "mkdir", "rm"],
    answer: "ls",
  },
  {
    question: "Which command is used to change directories?",
    options: ["mv", "pwd", "cd", "ls"],
    answer: "cd",
  },
  {
    question: "What does the 'pwd' command do?",
    options: [
      "Print working directory",
      "Change password",
      "Show running processes",
      "Create a directory",
    ],
    answer: "Print working directory",
  },
  {
    question: "Which command is used to create a new directory?",
    options: ["touch", "mkdir", "rmdir", "cp"],
    answer: "mkdir",
  },
  {
    question: "Which file stores user account information in Linux?",
    options: ["/etc/passwd", "/etc/shadow", "/home/user", "/bin/bash"],
    answer: "/etc/passwd",
  },
  {
    question: "What does the 'rm' command do?",
    options: [
      "Rename files",
      "Remove files or directories",
      "Read a file",
      "Run a program",
    ],
    answer: "Remove files or directories",
  },
  {
    question: "Which symbol represents the root directory?",
    options: ["/", "~", ".", ".."],
    answer: "/",
  },
  {
    question: "What does 'chmod' control?",
    options: [
      "File ownership",
      "File permissions",
      "File size",
      "File location",
    ],
    answer: "File permissions",
  },
  {
    question: "Which command is used to display the contents of a file?",
    options: ["open", "show", "cat", "view"],
    answer: "cat",
  },
  {
    question: "Which Linux command shows currently running processes?",
    options: ["ps", "ls", "top", "who"],
    answer: "ps",
  },
];

export default linuxQuestions;
