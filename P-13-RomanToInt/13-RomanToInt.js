// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
const romanToInt = (s) => {
    let val = 0;
    const data = {
        "I": 1, 
        "V": 5, 
        "X": 10, 
        "L": 50, 
        "C": 100, 
        "D": 500, 
        "M": 1000
    }
    s = s.replace(/IV/g, "IIII");
    s = s.replace(/IX/g, "VIIII");
    s = s.replace(/XL/g, "XXXX");
    s = s.replace(/XC/g, "LXXXX");
    s = s.replace(/CD/g, "CCCC");
    s = s.replace(/CM/g, "DCCCC");
    let str = s.split("");
    for (let i = 0; i < str.length; i++)
        val += data[str[i]];
    return val;
};


console.log(romanToInt("MCMXCIV"));