const userInput = prompt(`Enter numbers separated by commas`);

const userInputArray = userInput.split(",");    //Create a variable for splitting the user inputted numbers by commas
console.log(`STRINGS: `, userInputArray);

const numbers = [];
  
for(let i = 0; i < userInputArray.length; i++) {     //Function to convert the array into number for each subsequent calculation.
  const numAsStr = userInputArray[i];        
  const convertedNum = Number(numAsStr);
  numbers.push(convertedNum);
}

const getLength = (nums) => {
  const numsLength = nums.length;
  return numsLength
}; 


const getSum = (nums) => {   
    let total = 0;
   for(let i = 0; i < nums.length; i++) {
    const number = nums[i];
    total += number;
   }
   return total;
  }



const getMean = (nums) => {
    const dividend = getSum(nums) / getLength(nums);
  return dividend;
  }


  getMin=(arr)=> {
    return Math.min(...arr);     //Simpler formular using Math.min
}


getMax=(arr)=> {
    return Math.max(...arr);
}


 getRange=(arr)=> {                   //Obtain range by subtracting the larger from the smaller number. 
    return getMax(arr) - getMin(arr);
}



function getEvens(arr){
    let evens=[];
    for (let i=0; i<arr.length; i++)
        if(Number(arr[i]) %2 ===0){
        evens.push(Number(arr[i]));
        }
    if (evens.length>0){
        return evens;
    } else{
        return `I can't even`;
    }
}

function getOdds(arr){
    let odds=[];
    for (let i=0; i<arr.length; i++)
      if(Number(arr[i]) %2 !==0){
        odds.push (Number(arr[i]));
      }
    if (odds.length>0){
      return odds;
    } else{
      return `That's odd`;
    }
}
console.log("Length:", getLength(numbers));  //Console message rendering each calculation.
console.log("Sum:", getSum(numbers));
console.log("Mean:", getMean(numbers));
console.log("Min",getMin(numbers));
console.log("Max",getMax(numbers));
console.log("Range",getRange(numbers));
console.log("Evens",getEvens(numbers));
console.log("Odds",getOdds(numbers));