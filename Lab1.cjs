const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculateAge(birthDate) {
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  const days = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  return { years, days, today };
}

console.log('HELLo World!');

rl.question('Please, enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);

  const count = name.length;
  console.log(
    `Your name has ${count} letters. ${count}! = ${factorial(count)}`,
  );

  rl.question(
    'Please, enter your birth date in format (DD.MM.YYYY): ',
    (input) => {
      const [day, month, year] = input.split('.');
      const birthDate = new Date(year, month - 1, day);

      const age = calculateAge(birthDate);
      const todayFormatted = age.today
        .toLocaleDateString('en-GB')
        .replace(/\//g, '.');

      console.log(
        `Today is ${todayFormatted}, you are ${age.years} year(s) (${age.days} days) old.`,
      );

      rl.close();
    },
  );
});
