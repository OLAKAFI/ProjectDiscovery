// this contains reusable function calculations
// utils.js

export function reduceToSingleDigit(number) {
    while (number >= 10) {
      number = number
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return number;
}
  
// export function calculateLifePath(day, month, year) {
//     const daySum = reduceToSingleDigit(day);
//     const monthSum = reduceToSingleDigit(month);
//     const yearSum = reduceToSingleDigit(year);
//     let lifePath = daySum + monthSum + yearSum;
  
//     if ([11, 22, 33].includes(lifePath)) {
//       return `Life Path: Master number ${lifePath}`;
//     } else {
//       return `${reduceToSingleDigit(lifePath)}`;
//     }
// }
  
export function calculatePersonalityNumber(day) {
    let dayString = day.toString().padStart(2, '0');  // Adds leading zero if necessary
    if (!day ) {
        return "INVALID DATE INPUT";
    }

    // Convert to number and reduce to a single digit
    let dayNumber = Number(dayString);
    return `${reduceToSingleDigit(dayNumber)}`;
}

export function calculateLifePath(day, month, year) {
    if (!day || !month || !year) {
        return "INVALID DATE INPUT";
    }

    // Combine all digits of day, month, and year into one total sum
    const lifePath = day
        .toString()
        .split('')
        .concat(month.toString().split(''))
        .concat(year.toString().split(''))
        .reduce((sum, digit) => sum + parseInt(digit), 0);

    // Check for Master Numbers
    if ([11, 22, 33].includes(lifePath)) {
        const reducedLifePath = reduceToSingleDigit(lifePath);
        return  `${lifePath}/${reducedLifePath}`.toString();
        
    }

    // If not a Master Number, reduce to a single digit
    return `${reduceToSingleDigit(lifePath)}`;
}


export function determineZodiac(day, month) {

  console.log(`Input received - Day: ${day}, Month: ${month}`); // Debugging input

  if (isNaN(day) || isNaN(month)) {
    return 'Invalid Date: Day or month is not a valid number.';
  }

  // Validate inputs
  // Ensure inputs are numbers
  day = Number(day);
  month = Number(month);

  if (month < 1 || month > 12) {
      return 'Invalid Date: Month must be between 1 and 12.';
  }
  if (day < 1 || day > 31) {
      return 'Invalid Date: Day must be between 1 and 31.';
  }
  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
      return 'Invalid Date: This month has only 30 days.';
  }
  if (month === 2 && day > 29) {
      return 'Invalid Date: February has at most 29 days.';
  }

  let zodiac = '';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      zodiac = 'Aries';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      zodiac = 'Taurus';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiac = 'Gemini';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      zodiac = 'Cancer';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      zodiac = 'Leo';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      zodiac = 'Virgo';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      zodiac = 'Libra';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      zodiac = 'Scorpio';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      zodiac = 'Sagittarius';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      zodiac = 'Capricorn';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      zodiac = 'Aquarius';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      zodiac = 'Pisces';
  } else {
      zodiac = 'Invalid Date'; // Fallback if no zodiac matches
  }

  console.log(`Zodiac determined: ${zodiac}`); // Debugging output
  return `${zodiac}`;
    
}

  
export function getChineseZodiac(year) {
    const zodiacAnimals = [
      'Rat',
      'Ox',
      'Tiger',
      'Rabbit',
      'Dragon',
      'Snake',
      'Horse',
      'Goat',
      'Monkey',
      'Rooster',
      'Dog',
      'Pig',
    ];
    return `${zodiacAnimals[(year - 1900) % 12]}`;
}
  

  
export function assignNumbersToAlphabet() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const assignments = {};
    for (let i = 0; i < alphabet.length; i++) {
      assignments[alphabet[i]] = (i % 9) + 1;
    }
    return assignments;
}
  
export function calculateDestinyNumber(firstName, middleName, lastName) {
    const fullName = (firstName + middleName + lastName).toUpperCase();
    const assignments = assignNumbersToAlphabet();
    let totalSum = 0;
    for (const letter of fullName) {
      totalSum += assignments[letter] || 0;
    }
    return `${reduceToSingleDigit(totalSum)}`;
}
  
export function calculateUniversalYear() {
    const currentYear = new Date().getFullYear();
    return `${reduceToSingleDigit(
      currentYear.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    )}`;
}
  

export function calculatePersonalYear(day, month) {
    if (!day || !month) {
        return "INVALID DATE INPUT";
    }
    const currentYear = new Date().getFullYear();
    const universalYear = 
      currentYear.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    ;
    const daySum = reduceToSingleDigit(day);
    const monthSum = reduceToSingleDigit(month);
    const personalYearSum =  daySum + monthSum + universalYear
    const personalYear = reduceToSingleDigit(personalYearSum)
        console.log(personalYearSum)
    return `${personalYear}`;
}

export function calculateFirstPinnacleCycle(day, month) {
    if (!day || !month) {
        return "INVALID DATE INPUT";
    }

    const daySum = reduceToSingleDigit(day);
    const monthSum = reduceToSingleDigit(month);

    let firstPinnacleCycle =  monthSum + daySum 
        return `${reduceToSingleDigit(firstPinnacleCycle)}`;
}

export function calculateSecondPinnacleCycle(day, year) {
    if (!day || !year) {
        return "INVALID DATE INPUT";
    }
    const daySum = reduceToSingleDigit(day);
    const yearSum = reduceToSingleDigit(year);

    let secondPinnacleCycle =  yearSum + daySum 
        return `${reduceToSingleDigit(secondPinnacleCycle)}`;
}

export function calculateThirdPinnacleCycle(day, month, year) {
    // Calculate the first pinnacle cycle
    let firstPinnacleCycle = calculateFirstPinnacleCycle(day, month);
    if (isNaN(firstPinnacleCycle)) {
        return "INVALID DATE INPUT";
    }
    
    // Calculate the second pinnacle cycle
    let secondPinnacleCycle = calculateSecondPinnacleCycle(day, year);
    if (isNaN(secondPinnacleCycle)) {
        return "INVALID DATE INPUT";
    }

    // Ensure both pinnacle cycles are valid (not undefined)
    // if (firstPinnacleCycle === undefined || secondPinnacleCycle === undefined) {
    //     return "First or second pinnacle cycle not calculated properly.";
    // }

    // Add the first and second pinnacle cycles and reduce to a single digit
    let thirdPinnacleCycle = reduceToSingleDigit(Number(firstPinnacleCycle) + Number(secondPinnacleCycle));

    return `${thirdPinnacleCycle}`;
}


export function calculateFourthPinnacleCycle(month, year) {
    if (!month || !year) {
        return "INVALID DATE INPUT";
    }
    const monthSum = reduceToSingleDigit(month);
    const yearSum = reduceToSingleDigit(year);

    let fourthPinnacleCycle =  yearSum + monthSum 
        return `${reduceToSingleDigit(fourthPinnacleCycle)}`;
}