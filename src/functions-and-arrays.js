// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
    if(num1 > num2)
      return num1;
    else if(num1 === num2)
      return num1;
    else
      return num2;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot','crocodilo'];
function findScaryWord(words)
{
  if(words.length == 0)
  {
    return null;
  }
  else if(words.length ==1)
  {
    return words[0];
  }
  for(var i=0; i<words.length-1; i++)
  {
    for(j=0; j<words.length-1; j++)
    {
      if(words[j].length < words[j+1].length)
      {
        var temp = words[j];
        words[j] = words[j+1];
        words[j+1] = temp;
      }
    }
  }
  if(words[0].length > words[1].length)
    return words[0];
  else
    return words[0];
}
findScaryWord(words);





// Progression #3: Net Price
 const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
 
 function netPrice(numbers) {
     let sum = 0;
     if(numbers.length === 0)
      return 0;
     else if(numbers.length === 1){
       sum = numbers[0]
         return sum;
     }
     else {           
        for(var i=0;i < numbers.length;i++)
       {
         sum =  sum + numbers[i];
       }
        return sum;
     }
}

// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// function netPrice(numbers) {
//   let sum = 0;
//   if (numbers.length == 0) {
//     return sum;
//   } else if (numbers.length == 1) {
//     sum = numbers[0];
//     return sum;
//   } else {
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
//   }
// }

// progression #3.1
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add(mixedArr){
  let i,total = 0;
    if(mixedArr.length === 0){
      return 0;
    }
    else if(mixedArr.length === 1)
      return mixedArr[0];
    else{
    for(i=0;i<mixedArr.length;i++)
    {
      if(typeof mixedArr[i] === 'number')
      {
        total = total + mixedArr[i];
      }
      else if(typeof mixedArr[i] === 'string')
      {
        total = total + mixedArr[i].length;
      }
      else
      {
        if(mixedArr[i] === true) 
        {
          total = total + 1;
        }
        else 
        {
          total = total + 0;
        }
      }
    }
    if(total === 0)
    {
      return 0;
    }
    else{
      return total;
    }
   
  }
}



// Progression #4: Calculate the average
function midpoint(numbers){
  return netPrice(numbers)/numbers.length;
}
midpoint(numbers);


// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  let arrTotal = 0;
    if(numbersAvg.length == 0) return null;
    for(i=0;i<numbersAvg.length;i++)
    {
      arrTotal = arrTotal + numbersAvg[i]
    }

    return arrTotal / numbersAvg.length;
}



// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr)
{
  let uniqSum = 0;
  if(wordsArr.length == 0) return null;
  for(i=0; i<wordsArr.length; i++)
  {
    uniqSum = uniqSum + wordsArr[i].length;
  }
  return uniqSum / wordsArr.length;
}



// Progression 4.3
function avg(mixedArr){
  let sum = add(mixedArr);
  if(mixedArr.length == 0) return null;
  return sum / mixedArr.length;
}




// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(uniqueArray){
  if(uniqueArray.length == 0) return null;
  uniqArray.filter((item,index) =>uniqArray.indexOf(item) == index);
  return uniqArray;
}

// function uniqueArray(uniqueArray) {
//   var len = uniqueArray.length;
//   var outputArray = [];
//   var count = 0;
//   var start = false;
//   for (j = 0; j < uniqueArray.length; j++) {
//     for (k = 0; k < uniqueArray.length; k++) {
//       if (uniqueArray[j] == outputArray[k]) {
//         start = true;
//       }
//     }
//     count++;
//     if (count == 1 && start == false) {
//       outputArray.push(uniqueArray[j]);
//     }
//     start = false;
//     count = 0;
//   }
//   if (len === 0) {
//     return null;
//   } else {
//     return outputArray;
//   }
// }




//Progression #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
let i = 0;
function searchElement(wordsFind,searchWord)
{
  if(wordsFind.length == 0) return null;
  for(i=0;i<wordsFind.length;i++)
  {
    if(wordsFind[i] == searchWord)
    {
      return true;
    }
  }
  return false;
}
searchElement(wordsFind,"trouble");




// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

//const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function howManyTimesElementRepeated(wordsFind,searchWord)
{
  let i = 0 ,count = 0;
  for(i=0;i<wordsFind.length;i++)
  {
    if(wordsFind[i] == searchWord)
    {
      count++;
      
    }
  }
    return count;
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
