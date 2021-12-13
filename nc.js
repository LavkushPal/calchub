console.log(" started date--> Calchub.com -- 01.30 PM -- 16/05/2021 <--");
console.log("completed date--> Calchub.com -- 03.20 PM -- 23/06/2021 <--");

//  box1 section
let convert = document.getElementById("convert");

convert.addEventListener('click', function (e) {

    let number = document.getElementById("number1");
    numberval = number.value;

    let from = document.getElementById('choosefrom');
    let fromvalue = from.value;

    let to = document.getElementById('chooseto');
    let tovalue = to.value;

    let alert = document.getElementById('alert');
    if (numberval == 0) {
        let str = "";
        str = '<h3> Alert : Please Enter Some Number</h3>';
        alert.innerHTML = str;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);
    }

    let resultbox = document.getElementById('resulttxt');

    if (fromvalue == 'binary')
        resultbox.value = binary();
    else if (fromvalue == 'decimal')
        resultbox.value = decimal();
    else if (fromvalue == 'octal')
        resultbox.value = octal();
    else
        resultbox.value = hexadecimal();

});

// Binary function 
function binary(element) {


    let to = document.getElementById('chooseto');
    let tovalue = to.value;
    let base2val = tovalue;

    let number = document.getElementById("number1");
    numberval = number.value;

    let numberlength = numberval.length;
    numberlength = numberlength - 1;

    let multinumber = 0;

    if (base2val.includes('octal')) {

        for (let index = 0; index < numberval.length; index++) {
            const element = numberval[index];
            multinumber = multinumber + element * Math.pow(2, numberlength);
            numberlength = numberlength - 1;
        }
        console.log(multinumber);

        let octalnumber = 0;
        let remainder;
        while (multinumber >= 8) {
            remainder = multinumber % 8;
            octalnumber = 10 * octalnumber + remainder;
            multinumber = parseInt(multinumber / 8);
        }
        octalnumber = 10 * octalnumber + multinumber;

        let finaloctal = 0;
        while (octalnumber != 0) {
            let rmndr = octalnumber % 10;
            finaloctal = (finaloctal * 10) + rmndr;
            octalnumber = parseInt(octalnumber / 10);
        }

        console.log("this is octal" + finaloctal);

        return (finaloctal);

        console.log(base2val);
    }
    else if (base2val == 'decimal') {

        for (let index = 0; index < numberval.length; index++) {
            const element = numberval[index];
            multinumber = multinumber + element * Math.pow(2, numberlength);
            numberlength = numberlength - 1;
        }
        return (multinumber);
    }
    else if (base2val.includes('hexadecimal')) {

        for (let index = 0; index < numberval.length; index++) {
            const element = numberval[index];
            multinumber = multinumber + element * Math.pow(2, numberlength);
            numberlength = numberlength - 1;
        }
        let hexanumber = 0;
        let remainder = 0;
        let i = 0;

        while (multinumber > 15) {
            remainder = multinumber % 16;

            if (remainder == 10)
                remainder = 'A';
            else if (remainder == 11)
                remainder = 'B';
            else if (remainder == 12)
                remainder = 'C';
            else if (remainder == 13)
                remainder = 'D';
            else if (remainder == 14)
                remainder = 'E';
            else if (remainder == 15)
                remainder = 'F';

            let tempremainder = remainder.toString();
            if (i == 0)
                hexanumber = tempremainder;
            else
                hexanumber += tempremainder;

            remainder = 0;
            i++;
            multinumber = parseInt(multinumber / 16);
        }

        if (multinumber == 10)
            multinumber = 'A';
        else if (multinumber == 11)
            multinumber = 'B';
        else if (multinumber == 12)
            multinumber = 'C';
        else if (multinumber == 13)
            multinumber = 'D';
        else if (multinumber == 14)
            multinumber = 'E';
        else if (multinumber == 15)
            multinumber = 'F';

        let tempmultinumber = multinumber.toString();

        if (i == 0)
            hexanumber = tempmultinumber;
        else
            hexanumber += tempmultinumber;

        let newstr = hexanumber.split('');
        let reversedhexa = newstr.reverse().join('');

        return (reversedhexa);
    }
    else {

        let str = "";
        str = '<h3> Error : Something wrong</h3>';
        alert.innerHTML = str;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);
    }
}

// Decimal function 
function decimal() {

    let to = document.getElementById('chooseto');
    let tovalue = to.value;
    let base2val = tovalue;

    let number = document.getElementById("number1");
    numberval = number.value;

    console.log(numberval);

    let numberlength = numberval.length;
    numberlength = numberlength - 1;

    console.log(numberlength);

    if (base2val.includes('binary')) {

        let binary = 0;
        let i = 0;
        while (numberval > 1) {
            let remainder = numberval % 2;
            let strremainder = remainder.toString();

            if (i == 0)
                binary = strremainder;
            else
                binary += strremainder;

            numberval = parseInt(numberval / 2);
            i++;
        }

        strnumberval = numberval.toString();
        if (i == 0)
            binary = strnumberval;
        else
            binary += strnumberval;

        let tempbinary = binary.split('');
        let reversedbinary = tempbinary.reverse();
        let binarycode = reversedbinary.join('');

        return (binarycode);

    }
    else if (base2val.includes('octal')) {

        let octal = 0;
        let i = 0;
        while (numberval > 7) {
            let remainder = numberval % 8;
            let strremainder = remainder.toString();

            if (i == 0)
                octal = strremainder;
            else
                octal += strremainder;

            numberval = parseInt(numberval / 8);

            i++;
        }

        strnumberval = numberval.toString();
        if (i == 0)
            octal = strnumberval;
        else
            octal += strnumberval;

        let tempoctal = octal.split('');
        let reversedoctal = tempoctal.reverse();
        let octalcode = reversedoctal.join('');

        return (octalcode);

    }
    else if (base2val.includes('hexadecimal')) {

        let multinumber = numberval;

        let hexanumber = 0;
        let remainder = 0;
        let i = 0;

        while (multinumber > 15) {
            remainder = multinumber % 16;

            if (remainder == 10)
                remainder = 'A';
            else if (remainder == 11)
                remainder = 'B';
            else if (remainder == 12)
                remainder = 'C';
            else if (remainder == 13)
                remainder = 'D';
            else if (remainder == 14)
                remainder = 'E';
            else if (remainder == 15)
                remainder = 'F';

            let tempremainder = remainder.toString();
            if (i == 0)
                hexanumber = tempremainder;
            else
                hexanumber += tempremainder;

            remainder = 0;
            i++;
            multinumber = parseInt(multinumber / 16);
        }

        if (multinumber == 10)
            multinumber = 'A';
        else if (multinumber == 11)
            multinumber = 'B';
        else if (multinumber == 12)
            multinumber = 'C';
        else if (multinumber == 13)
            multinumber = 'D';
        else if (multinumber == 14)
            multinumber = 'E';
        else if (multinumber == 15)
            multinumber = 'F';

        let tempmultinumber = multinumber.toString();

        if (i == 0)
            hexanumber = tempmultinumber;
        else
            hexanumber += tempmultinumber;

        let newstr = hexanumber.split('');
        let reversedhexa = newstr.reverse();
        let hexacode = reversedhexa.join('');

        return (hexacode);

    }
    else {
        let str = "";
        str = '<h3> Error : Something wrong</h3>';
        alert.innerHTML = str;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);
    }

}

// function octal
function octal() {

    let to = document.getElementById('chooseto');
    let tovalue = to.value;
    let base2val = tovalue;

    let number = document.getElementById("number1");
    numberval = number.value;
    // console.log(numberval);

    let numberlength = numberval.length;
    numberlength = numberlength - 1;
    // console.log(numberlength);

    let multinumber = 0;

    if (base2val.includes('binary')) {

        for (let index = 0; index < numberval.length; index++) {
            const element = numberval[index];
            multinumber = multinumber + element * Math.pow(8, numberlength);
            numberlength = numberlength - 1;
        }

        let binary = 0;
        let i = 0;
        while (multinumber > 1) {
            let remainder = multinumber % 2;
            let strremainder = remainder.toString();

            if (i == 0)
                binary = strremainder;
            else
                binary += strremainder;

            multinumber = parseInt(multinumber / 2);
            i++;
        }

        strmultinumber = multinumber.toString();
        if (i == 0)
            binary = strmultinumber;
        else
            binary += strmultinumber;

        // let binarylength=binary.length;

        // while(binarylength>=3)
        // {
        //     binarylength=binarylength-3;

        // }

        // let addzero='0';
        // let needlen=3-binarylength;
        // while(needlen!=0)
        // { 
        //     binary += addzero;
        //     needlen--;
        // }

        let tempbinary = binary.split('');
        let reversedbinary = tempbinary.reverse();
        let binarycode = reversedbinary.join('');

        return (binarycode);
    }
    else if (base2val == 'decimal') {

        for (let index = 0; index < numberval.length; index++) {
            const element = numberval[index];
            multinumber = multinumber + element * Math.pow(8, numberlength);
            numberlength = numberlength - 1;
        }
        let decimalcode = multinumber;

        console.log(`OK , This is ${base2val} section`);
        return (decimalcode);
    }
    else if (base2val.includes('hexadecimal')) {
        for (let index = 0; index < numberval.length; index++) {
            const element = numberval[index];
            multinumber = multinumber + element * Math.pow(8, numberlength);
            numberlength = numberlength - 1;
        }

        let hexanumber = 0;
        let remainder = 0;
        let i = 0;

        while (multinumber > 15) {
            remainder = multinumber % 16;

            if (remainder == 10)
                remainder = 'A';
            else if (remainder == 11)
                remainder = 'B';
            else if (remainder == 12)
                remainder = 'C';
            else if (remainder == 13)
                remainder = 'D';
            else if (remainder == 14)
                remainder = 'E';
            else if (remainder == 15)
                remainder = 'F';

            let tempremainder = remainder.toString();
            if (i == 0)
                hexanumber = tempremainder;
            else
                hexanumber += tempremainder;

            remainder = 0;
            i++;
            multinumber = parseInt(multinumber / 16);
        }

        if (multinumber == 10)
            multinumber = 'A';
        else if (multinumber == 11)
            multinumber = 'B';
        else if (multinumber == 12)
            multinumber = 'C';
        else if (multinumber == 13)
            multinumber = 'D';
        else if (multinumber == 14)
            multinumber = 'E';
        else if (multinumber == 15)
            multinumber = 'F';

        let tempmultinumber = multinumber.toString();

        if (i == 0)
            hexanumber = tempmultinumber;
        else
            hexanumber += tempmultinumber;

        let newstr = hexanumber.split('');
        let reversedhexa = newstr.reverse();
        let hexacode = reversedhexa.join('');

        return (hexacode);
    }
    else {
        let str = "";
        str = '<h3> Error : Something wrong</h3>';
        alert.innerHTML = str;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);
    }

}

// fucntion hexadecimal
function hexadecimal() {

    let to = document.getElementById('chooseto');
    let tovalue = to.value;
    let base2val = tovalue;

    let number = document.getElementById("number1");
    numberval = number.value;

    let numberlength = numberval.length;
    numberlength = numberlength - 1;

    let multinumber = 0;

    if (base2val.includes('binary')) {
        for (let index = 0; index < numberval.length; index++) {
            let element = numberval[index];

            if (element == 'A')
                element = 10;
            else if (element == 'B')
                element = 11;
            else if (element == 'C')
                element = 12;
            else if (element == 'D')
                element = 13;
            else if (element == 'E')
                element = 14;
            else if (element == 'F')
                element = 15;

            multinumber = multinumber + element * Math.pow(16, numberlength);
            numberlength = numberlength - 1;
        }

        let binary = 0;
        let i = 0;
        while (multinumber > 1) {
            let remainder = multinumber % 2;
            let strremainder = remainder.toString();

            if (i == 0)
                binary = strremainder;
            else
                binary += strremainder;

            multinumber = parseInt(multinumber / 2);
            i++;
        }

        strmultinumber = multinumber.toString();
        if (i == 0)
            binary = strmultinumber;
        else
            binary += strmultinumber;

        // let binarylength=binary.length;

        // while(binarylength>=4)
        // {
        //     binarylength=binarylength-4;

        // }

        // let addzero='0';
        // let needlen=4-binarylength;
        // while(needlen!=0)
        // { 
        //     binary += addzero;
        //     needlen--;
        // }

        let tempbinary = binary.split('');
        let reversedbinary = tempbinary.reverse();
        let binarycode = reversedbinary.join('');

        return (binarycode);
    }
    else if (base2val.includes('octal')) {
        for (let index = 0; index < numberval.length; index++) {
            let element = numberval[index];

            if (element == 'A')
                element = 10;
            else if (element == 'B')
                element = 11;
            else if (element == 'C')
                element = 12;
            else if (element == 'D')
                element = 13;
            else if (element == 'E')
                element = 14;
            else if (element == 'F')
                element = 15;

            multinumber = multinumber + element * Math.pow(16, numberlength);
            numberlength = numberlength - 1;
        }

        let octal = 0;
        let i = 0;
        while (multinumber > 7) {
            let remainder = multinumber % 8;
            let strremainder = remainder.toString();

            if (i == 0)
                octal = strremainder;
            else
                octal += strremainder;

            multinumber = parseInt(multinumber / 8);

            i++;
        }

        let strmultinumber = multinumber.toString();
        if (i == 0)
            octal = strmultinumber;
        else
            octal += strmultinumber;

        let tempoctal = octal.split('');
        let reversedoctal = tempoctal.reverse();
        let octalcode = reversedoctal.join('');

        return (octalcode);
    }
    else if (base2val.includes('decimal')) {
        for (let index = 0; index < numberval.length; index++) {
            let element = numberval[index];

            if (element == 'A')
                element = 10;
            else if (element == 'B')
                element = 11;
            else if (element == 'C')
                element = 12;
            else if (element == 'D')
                element = 13;
            else if (element == 'E')
                element = 14;
            else if (element == 'F')
                element = 15;

            multinumber = multinumber + element * Math.pow(16, numberlength);
            numberlength = numberlength - 1;
        }
        let decimalcode = multinumber;

        return (decimalcode);
    }
    else {
        let str = "";
        str = '<h3> Error : Something wrong</h3>';
        alert.innerHTML = str;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);
    }

}






// box2 section 

let isfactclicked = 0;
let ispiclicked = 0;
let issqrclicked = 0;
let ispowclicked = 0;
let ismodulusclicked = 0;
let iscancleclicked = 0;
let ispointclicked = 0;
let temp = 0;
let unitArray = [];
// expression function to show expression and also store clicked operator or operand in unitArray
function expression() {
    var operand;
    var operator = "";
    let showexpression = document.getElementById('showexpression')
    // is click operand part 
    //is click one operand   
    var one = document.getElementById('one');
    one.addEventListener('click', oneclicked)

    function oneclicked() {
        console.log('you are clicked 1');
        operand = 1;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click two operand 
    let two = document.getElementById('two');
    two.addEventListener('click', twoclicked)

    function twoclicked() {
        console.log('you are clicked 2');
        operand = 2;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click three operand 
    let three = document.getElementById('three');
    three.addEventListener('click', threeclicked)

    function threeclicked() {
        console.log('you are clicked 3');
        operand = 3;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click four operand 
    let four = document.getElementById('four');
    four.addEventListener('click', fourclicked)

    function fourclicked() {
        console.log('you are clicked 4');
        operand = 4;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click five operand 
    let five = document.getElementById('five');
    five.addEventListener('click', fiveclicked)

    function fiveclicked() {
        console.log('you are clicked 5');
        operand = 5;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click six operand 
    let six = document.getElementById('six');
    six.addEventListener('click', sixclicked)

    function sixclicked() {
        console.log('you are clicked 6');
        operand = 6;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click seven operand 
    let seven = document.getElementById('seven');
    seven.addEventListener('click', sevenclicked)

    function sevenclicked() {
        console.log('you are clicked 7');
        operand = 7;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click eight operand 
    let eight = document.getElementById('eight');
    eight.addEventListener('click', eightclicked)

    function eightclicked() {
        console.log('you are clicked 8');
        operand = 8;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click nine operand 
    let nine = document.getElementById('nine');
    nine.addEventListener('click', nineclicked)

    function nineclicked() {
        console.log('you are clicked 9');
        operand = 9;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }
    //is click zero operand 
    let zero = document.getElementById('zero');
    zero.addEventListener('click', zeroclicked)

    function zeroclicked() {
        console.log('you are clicked 0');
        operand = 0;
        unitArray.push(operand);
        showexpression.innerHTML += operand;
    }

    // is click operator part 
    //is click plus operator 
    let plus = document.getElementById('plus');
    plus.addEventListener('click', plusclicked)

    function plusclicked() {
        console.log('you are clicked +');
        operator = "+";
        unitArray.push(operator);
        showexpression.innerHTML += operator;
    }
    //is click minus operator 
    let minus = document.getElementById('minus');
    minus.addEventListener('click', minusclicked)

    function minusclicked() {
        console.log('you are clicked -');
        operator = "-";
        unitArray.push(operator);
        showexpression.innerHTML += operator;
    }
    //is click multiply operator 
    let multiply = document.getElementById('multiply');
    multiply.addEventListener('click', multiplyclicked)

    function multiplyclicked() {
        console.log('you are clicked *');
        operator = "*";
        unitArray.push(operator);
        showexpression.innerHTML += operator;
    }
    //is click devide operator 
    let devide = document.getElementById('devide');
    devide.addEventListener('click', devideclicked)

    function devideclicked() {
        console.log('you are clicked /');
        operator = "/";
        unitArray.push(operator);
        showexpression.innerHTML += operator;
    }
    //is click modulus operator
    let modulus = document.getElementById('modulus');
    modulus.addEventListener('click', modulusclicked)

    function modulusclicked() {
        console.log('you are clicked %');
        operator = "%";
        ismodulusclicked = 1;
        unitArray.push(operator);
        showexpression.innerHTML += operator;
    }

    //is click factorial operator
    let fact = document.getElementById('factorial');
    fact.addEventListener('click', factorialclicked)

    function factorialclicked() {
        console.log('you are clicked !');
        operator = "!";
        isfactclicked = 1;
        showexpression.innerHTML += operator;
    }

    //is click pi operator
    let pi = document.getElementById('pi');
    pi.addEventListener('click', piclicked)

    function piclicked() {
        console.log('you are clicked pi');
        operator = "|`|";
        ispiclicked = 1;
        showexpression.innerHTML += operator;
    }

    //is click square operator
    let sqr = document.getElementById('square');
    sqr.addEventListener('click', squareclicked)

    function squareclicked() {
        console.log('you are clicked sqr');
        operator = "-/";
        issqrclicked = 1;
        showexpression.innerHTML += operator;
    }

    //is click power operator
    let pow = document.getElementById('power');
    pow.addEventListener('click', powerclicked)

    function powerclicked() {
        console.log('you are clicked ^');
        operator = "^";
        ispowclicked = 1;
        unitArray.push(operator);
        showexpression.innerHTML += operator;
    }

    //is click point operator
    // let point = document.getElementById('point');
    // point.addEventListener('click', pointclicked);

    // function pointclicked() {
    //     console.log("your are clicked (.) ");
    //     operator = "."; 
    //     ispointclicked=1;       
    //     unitArray.push(operator)
    //     showexpression.innerHTML += operator;
    // }

}
// calling expression function 
expression();


// cancle function will remove 1 step in 1 time
function cancle() {

    let cancle = document.getElementById('cancle');
    cancle.addEventListener('click', cancleclicked)

    let tempstr = "";
    function cancleclicked() {
        console.log('you are clicked X');
        unitArray.pop();
        showexpression.innerHTML = `${""}`;
        for (let index = 0; index < unitArray.length; index++) {
            tempstr = tempstr + unitArray[index];
        }
        showexpression.innerHTML = `${tempstr}`;
        tempstr = "";
    }
}
cancle();

// allCancle function will remove everything which is in unitArray,digitArray
// and also show & result expression in 1 time
function allCancle() {

    let allCancle = document.getElementById('allCancle');
    allCancle.addEventListener('click', allCancleclicked)

    function allCancleclicked() {
        console.log('you are clicked C');
        unitArray = [];
        digitArray = [];
        showexpression.innerHTML = `${""}`;
        showfinalresult.innerHTML = `${""}`;
    }
}
allCancle();


// point function will convert integer number to float number from unitArrayv
// function point() {
//     let prev = 0;
//     let next = 0;
//     let tempval=0.1;

//     console.log(unitArray)
//     for (let index = 0; index < unitArray.length; index++) {
//         const element = unitArray[index];

//         if (element == ".") {
//             prev = index - 1;
//             next = index + 1;
//             tempval =unitArray[prev].toFixed(1)+unitArray[next];
//             // tempval+=unitArray[next];
//             console.log(tempval);
//             // next day , do continue from here
//             // and change 6 to 0.6 after that add in previous value 
//             unitArray[prev] = tempval;
//             unitArray.splice(index, 2);
//         }
//         console.log(unitArray)
//     }
// }


// result function will return final result(answer) to show
function result() {

    if (ispointclicked == 1)
        point();

    console.log(unitArray);
    let digitArray = [];
    let i = 1;
    let digit = 0;
    // regular expression to check is it number or not 
    const regex = /([0-9]+)/;
    // converter loop unitArray to digitArray
    for (const iterator of unitArray) {
        if (regex.test(iterator)) {
            digit = digit * i + iterator;
            i = 10;
        }
        else if (iterator == "+" || iterator == "-" || iterator == "*" || iterator == "/" || iterator == "^" || iterator == "%") {
            digitArray.push(digit);
            digitArray.push(iterator);
            i = 1;
            digit = 0;
        }

    }
    digitArray.push(digit);

    console.log(digitArray);

    // search precedence 
    // airthmatic function for airthmatic operator
    function airthmatic() {
        let prev = 0;
        let next = 0;
        let tempResult = 0;
        // loop for * and / operator 
        for (let index = 0; index < digitArray.length; index++) {
            const iterator = digitArray[index];
            if (iterator == "*" || iterator == "/") {
                prev = index - 1;
                next = index + 1;
                if (iterator == "*") {
                    tempResult = digitArray[prev] * digitArray[next];
                    digitArray[prev] = tempResult;
                    console.log("tempres", tempResult)
                    console.log("prev", prev);
                    console.log("next", next);
                    console.log("iterator", iterator);
                    let removed = digitArray.splice(index, 2);
                    console.log("removed", removed);
                }
                else if (iterator == "/") {
                    tempResult = digitArray[prev] / digitArray[next];
                    digitArray[prev] = tempResult;
                    digitArray.splice(index, 2);
                }
                next = 0;
                index = prev;
                prev = 0;
                console.log(digitArray);
            }

        }
        // loop for + and - operator
        for (let index = 0; index < digitArray.length; index++) {
            const iterator = digitArray[index];
            if (iterator == "+" || iterator == "-") {
                prev = index - 1;
                next = index + 1;
                if (iterator == "+") {
                    tempResult = digitArray[prev] + digitArray[next];
                    digitArray[prev] = tempResult;
                    console.log("tempres", tempResult)
                    console.log("prev", prev);
                    console.log("next", next);
                    console.log("iterator", iterator);
                    digitArray.splice(index, 2);
                }
                else if (iterator == "-") {
                    tempResult = digitArray[prev] - digitArray[next];
                    digitArray[prev] = tempResult;
                    digitArray.splice(index, 2);
                }
                index = prev;
                next = 0;
                prev = 0;
                console.log(digitArray);
            }
        }
    }
    airthmatic();


    // factorial function for factorial operator
    function factorial() {

        let factregex = /^[0-9]+!$/
        let makestr = digitArray[0];
        let factstr = makestr + "!";
        let fact = 1;
        let temp = digitArray[0];
        if (factregex.test(factstr)) {

            if (temp > 0) {
                while (temp != 1) {
                    fact = fact * temp;
                    temp--;
                }
                digitArray = [];
                digitArray.push(fact);
            }
            else {
                digitArray = [];
                digitArray.push(fact);
            }
        }
        else {
            digitArray = [];
            digitArray.push("Expression error");
        }


    }
    if (isfactclicked == 1) {
        factorial();
        isfactclicked = 0;
    }

    // pi function for pi operator    
    function pi() {
        let pi = 3.1415926535897;
        if (digitArray[0] > 0) {
            let tempval = digitArray[0];
            let finalres = tempval * pi;
            digitArray = [];
            digitArray.push(finalres);
        }
        else {
            digitArray = [];
            digitArray.push(pi);
        }
    }
    if (ispiclicked == 1) {
        pi();
        ispiclicked = 0;
    }


    // square fucntion for square operator
    function square() {
        let finalres = Math.sqrt(digitArray[0]);
        digitArray = [];
        digitArray.push(finalres);
    }
    if (issqrclicked == 1) {
        square();
        issqrclicked = 0;
    }


    // power fucntion for power operator
    function power() {
        let prev = 0;
        let next = 0;
        let prevval = 0;
        let nextval = 0;
        for (let index = 0; index < digitArray.length; index++) {
            const element = digitArray[index];

            if (element == "^") {
                prev = index - 1;
                next = index + 1;
                prevval = digitArray[prev];
                nextval = digitArray[next];
                let finalres = Math.pow(prevval, nextval);
                digitArray = [];
                digitArray.push(finalres);
            }
        }
    }
    if (ispowclicked == 1) {
        power();
        ispowclicked = 0;
    }



    // modulus fucntion for modulus operator
    function modulus() {
        let prev = 0;
        let next = 0;
        let prevval = 0;
        let nextval = 0;
        for (let index = 0; index < digitArray.length; index++) {
            const element = digitArray[index];

            if (element == "%") {
                prev = index - 1;
                next = index + 1;
                prevval = digitArray[prev];
                nextval = digitArray[next];
                let finalres = prevval % nextval;
                digitArray = [];
                digitArray.push(finalres);
            }
        }
    }
    if (ismodulusclicked == 1) {
        modulus();
        ismodulusclicked = 0;
    }






    console.log(digitArray);
    // return result of expression
    return digitArray;

}

// equal to part and also result will show
let showfinalresult = document.getElementById('showresult');
let equalTo = document.getElementById('equalTo');
equalTo.addEventListener('click', showresult)
// showresult function will be show the result of expression  
function showresult() {
    console.log("equal to pressed : " + equalTo);
    showfinalresult.innerHTML = result();
    digitArray = [];
    unitArray = [];
}








// box3 section

let input = document.getElementById('inputv');
let inputval = input.value;

let chooseinput = document.getElementById('chooseinput');
let chooseinputval = chooseinput.value;

let chooseoutput = document.getElementById('chooseoutput');
let chooseoutputval = chooseoutput.value;

let convertbtn = document.getElementById('convertbtn');
convertbtn.addEventListener('click', result)

let resultplace = document.getElementById('resultplace');

// result fucntion will show the final result
function result() {
    inputval = input.value;
    chooseinputval = chooseinput.value;
    chooseoutputval = chooseoutput.value;

    let resultval;
    if (chooseinputval == "celcious") {
        resultval = celcious();
    }
    else if (chooseinputval == "fahrenheit") {
        resultval = fahrenheit();
    }
    else if (chooseinputval == "kelvin") {
        resultval = kelvin();
    }
    console.log(resultval);
    resultplace.innerHTML = resultval;

}



// celcious function
function celcious() {

    let f, k;
    if (chooseoutputval == "fahrenheit") {
        f = (9 * inputval) / 5 + 32;
        return f;

    }
    else if (chooseoutputval == "kelvin") {
        k = inputval + 273;
        return k;
    }
    else if (chooseoutputval == "celcious") {
        return inputval;
    }
}

// fahrenheit function
function fahrenheit() {
    let c, k;
    if (chooseoutputval == "celcious") {
        c = 5 * (inputval - 32) / 9;
        return c;

    }
    else if (chooseoutputval == "kelvin") {
        k = 5 * (inputval - 32) / 9 + 273;
        return k;
    }
    else if (chooseoutputval == "fahrenheit") {
        return inputval;
    }
}

// kelvin function
function kelvin() {
    let c, f;
    if (chooseoutputval == "celcious") {
        c = inputval - 273;
        return c;

    }
    else if (chooseoutputval == "fahrenheit") {
        f = (9 * (inputval - 273) / 5) + 32;
        return f;
    }
    else if (chooseoutputval == "kelvin") {
        return inputval;
    }
}







// box4 section

class Emi {
    constructor(amount, interest, year) {
        this.amount = amount;
        this.interest = interest;
        this.year = year;
    }

    showInterest() {
        let si = (this.amount * this.year * this.interest) / 100;
        return si;
    }

    showEmi() {
        let si = (this.amount * this.year * this.interest) / 100;
        let freshsi = parseInt(this.amount) + si;
        let emi = freshsi / (parseInt(this.year) * 12);
        return emi;
    }
}

let amount = document.getElementById('inamount');
let interest = document.getElementById('interest');
let year = document.getElementById('inyear');

let calbtn = document.getElementById('calculate');
calbtn.addEventListener('click', resultclass);

function resultclass() {

    let sishow = document.getElementById('si');
    let emishow = document.getElementById('emi');

    let amountval = amount.value;
    let interestval = interest.value;
    let yearval = year.value;

    let emi = new Emi(amountval, interestval, yearval);

    sishow.innerHTML = emi.showInterest();
    emishow.innerHTML = emi.showEmi();
}






// box5 section

class Age {
    showAge(todaydate, udate) {
        let userdate = udate.getDate();
        let usermonth = udate.getMonth();
        let useryear = udate.getFullYear();

        let todate = todaydate.getDate();
        let tomonth = todaydate.getMonth();
        let toyear = todaydate.getFullYear();
        
        let year=toyear-useryear;
        let month=tomonth-usermonth;
        let day=todate-userdate;

        let strage="You can't greater than today";

        if(toyear>=useryear && tomonth>=usermonth && todate>=userdate )
        {
            strage=` ${year} year, ${month} month, ${day} day`;
        }
        return strage;
    }
}


let userdob = document.getElementById('userdate');
userdob.addEventListener('mouseleave', finalage);


function finalage() {
    let userage = document.getElementById('userage');
    let userdobval = userdob.value;

    let udate = new Date(userdobval);
    let todaydate = new Date();
    let age = new Age();

    userage.innerHTML = age.showAge(todaydate, udate);

}
