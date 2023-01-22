//task 1
function difference(array) {
  let result = array.sort((a, b) => a - b);
  return result.length > 1 ? result[result.length - 1] - result[0] : 0;
}
console.log(difference([1, 2, 3, -4]));

//task 2
function maxWord(num, str) {
  return str.split(" ").filter((item) => item.length > num);
}
console.log(maxWord(4, "some information is here"));

//task 3
function line(str1, str2) {
  let result = str1.slice(str1.length - str2.length);
  return result === str2;
}
console.log(line("abc", "bc"));
console.log(line("abc", "d"));

//task 4
function averagesArray(arr) {
  let result = [];
  for (let a = 0; a < arr.length - 1; a++) {
    result.push((arr[a] + arr[a + 1]) / 2);
  }
  return (result = arr
    .map((num, a, array) => (array[a] + array[a + 1]) / 2)
    .slice(0, arr.length - 1));
}
console.log(averagesArray([1, 3, 5, 1, -10]));
console.log(averagesArray([2, -2, 2, -2, 2]));

//task 5
function countVovels(str) {
  let result = str.replace(/[qwrtpsdfghjklzxcvbnm]/gi, "");
  return result.length;
}
console.log(countVovels("Celebration"));
console.log(countVovels("Palm"));

function removeABC(str) {
  let letter = /[abc]/gi;
  return letter.test(str) ? str.replace(/[abc]/gi, "") : null;
}
console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));

//task 6
function unic(arr1, arr2) {
  let result = [...new Set([...arr1, ...arr2])];
  return result.sort((a, b) => a - b).map((elem) => elem.toString());
}
console.log(unic([1, 2, 3], [100, 2, 1, 10]));

//task 7
function replace(obj) {
  let result = Object.entries(obj);

  for (let a = 0; a < result.length; a++) {
    result[a].reverse();
  }
  return Object.fromEntries(result);
}
console.log(replace({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

//task 8
function calculateDifference(obj, insurance) {
  let amount = 0;
  Object.keys(obj).forEach((key, i) => {
    amount += obj[key];
  });
  return amount > insurance ? amount - insurance : 0;
}
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ "baseball bat": 20 }, 5));

//task 9
function doesBrickFit(a, b, c, w, h) {
  if (a <= w && c <= h) {
    return true;
  } else {
    return false;
  }
}
console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));

//task 10
function fileName(str) {
  let del = str.substring(str.lastIndexOf("/"), str.lastIndexOf(".")).slice(1);
  return str.replace(del, "");
}
console.log(fileName("c:/WebServers/home/testsite/www/myfile.txt"));

//task 11
function moveString(str1, str2) {
  let object = str1.split(" ");
  let result = [];
  return result.concat(object.slice(2), object.slice(0, 2)).join(" ");
}
console.log(moveString("тут  якась інформація"));

//task 12 (не дуже зрозуміла умову задачі)
function newArrey(a) {
  let b = [];
  let c = [];
  arr = a.sort((a, b) => a - b);
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] < arr[x + 1]) {
      b.push(arr[x]);
      c.push(arr[x + 1]);
    }
    x++;
  }
  return [b, c];
}
console.log(newArrey([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//task 13
function specialSort(str) {
  let delInfo = /\d{3,}/g;
  let delEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  let delLink =
    /(\b(www?|http|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi;
  let message = str.toLowerCase();
  return (
    message[0][0].toUpperCase() +
    message
      .slice(1)
      .replace(delEmail, "[контакти заборонені]")
      .replace(delLink, "[посилання заборонено]")
      .replace(delInfo, "")
  );
}
console.log(
  specialSort(
    "Це Олександра. Подивись мою рекламу тут www.google.com  або  пиши reklama@gmail.com ТЕЛЕФОНУЙТЕ 1234567 "
  )
);

//task 14 (зроблено не до кінця)
const areBracketsBalanced = (str) => {
  let prev = "";
  for (
    let replaced = str;
    replaced != prev;
    prev = replaced, replaced = replaced.replace("()", "")
  );
  return prev == "";
};

const str1 = "(())";
const str2 = "(()))";
const str3 = "()()()()";
const str4 = "(()()))";

const arr = [str1, str2, str3, str4];
arr.forEach((item) => {
  const result = areBracketsBalanced(item);
  console.log(item, result);
});

//task 15 (я намагалась це зробити, але не вийшло...)
function makePasswordRegExp(patterns, min, max) {
  let min = min || "6";
  let max = max || "20";
  let regex_string = "";
  let rules = [];
  let range = "{" + min + "," + max + "}";
  let patterns = {
    numeric: "0-9",
    special: "_",
    latin_lower: "a-z",
    latin_upper: "A-Z",
  };
  for (rule in patterns) {
    if (patterns.hasOwnProperty(rule)) {
      rules.push(patterns[rule]);
      regex_string += "(?=.*[" + patterns[rule] + "])";
    }
  }
  regex_string += "[" + rules.join("") + "]" + range;
  return new RegExp(regex_string, "g");
}

//task 16
function sortNumber(array) {
  let element1 = [];
  let element2 = [];
  let ready = array.sort((a, b) => a - b);
  for (let x = 0; x < ready.length; x++) {
    if (ready[x] < ready[x + 1]) {
      element1.push(ready[x]);
      element2.push(ready[x + 1]);
    }
    x++;
  }
  if (ready.length % 2 != 0) {
    element1.push(ready[ready.length - 1]);
  }

  return element1.concat(element2);
}
console.log(sortNumber([14, 7, 9, 10, 100, 15, 28, 45, 9, 1115]));
