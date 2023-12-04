function logItems(array) {
    for(let i = 0; i < array.length; i ++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
}

const items =  ['Mango', 'Poly', 'Ajax'];
logItems(items)

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const price = words.length * pricePerWord;
    return price;
}
const message = prompt("Напишіть що-небудь: ");
const pricePerWord = 10;
const totalPrice = calculateEngravingPrice(message, pricePerWord);
console.log(totalPrice)

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const sentence = prompt("Напишіть що-небудь: ");
const longestWord = findLongestWord(sentence);
console.log(longestWord)

function formatString(string) {
    if (string.lenght <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + "...";
    }
}
const line = prompt("Напишіть що-небудь: ");
const formattedString = formatString(line);
console.log(formattedString)

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}
const newMessage = prompt("Напишіть що-небудь: ");
console.log(checkForSpam(newMessage))

function promptAndSumNumbers() {
    let input;
    const numbers = [];
    let total = 0;
    do {
        input = prompt("Напишіть число:");
    
        if (input !== null) {
          const number = Number(input);
    
          if (!isNaN(number)) {
            numbers.push(number);
          } else {
            alert("Було введено не число, попробуйте ще раз.");
          }
        }
      } while (input !== null);
    
      if (numbers.length > 0) {
        for (const number of numbers) {
          total += number;
        }
        console.log(`Загальна сума чисел дорівнює ${total}`);
      } else {
        console.log("Масив чисел порожній");
      }
}
promptAndSumNumbers()

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}
function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}
function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
      return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
  
    if (!isLoginUnique(allLogins, login)) {
      return 'Такий логін вже використовується!';
    }
  
    allLogins.push(login);
    return 'Логін успішно доданий!';
}
  
const existingLogins = ['admin', 'user', 'jack', 'john'];
const newLogin = prompt('Напишіть новий логін: ');
const result = addLogin(existingLogins, newLogin);
console.log(result);