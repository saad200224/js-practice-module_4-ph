// প্রাকটিস চ্যালেঞ্জ-৩ টা: 

// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

// solution:

function leapYear(year){

    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(leapYear(2023));

// ------------- end ---------------

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।


// solution:

function myAge(age){

    if(age % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(leapYear(20));

// ------------- end ---------------


// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

// solution:

function hourToSeconds(hour){
    return seconds = hour * 60 * 60;
}
// console.log(hourToSeconds(1));

// ------------- end ---------------


// inch to feet calculator

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const inputInches = 200;
const covert = inchToFeet(inputInches);
console.log(covert);

// ------------- end ---------------













