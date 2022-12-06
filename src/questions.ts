import { Answers, Question } from 'inquirer';

export const questions: Question<Answers>[] = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: () => 'John Doe',
    validate: (value: string) => {
      if (value.length) {
        return true;
      } else {
        return 'Please enter your name.';
      }
    },
  },
  {
    type: 'number',
    name: 'age',
    message: 'What is your age?',
    default: () => 32,
    validate: (value: number) => {
      if (value) {
        return true;
      } else {
        return 'Please enter your age.';
      }
    },
  },
];
