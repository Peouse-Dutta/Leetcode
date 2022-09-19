// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
const romanToInt = (s) => {
    const data = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    switch (s) {
        case "IV":
            s = s.replace("IV", "IIII");
            break;
        case "IX":
            s = s.replace("IX", "VIIII");
            break;
        case "XL":
            s = s.replace("XL", "XXXX");
            break;
        case "XC":
            s = s.replace("XC", "CXXXX");
            break;
        case "CD":
            s = s.replace("CD", "CCCC");
            break;
        case "CM":
            s = s.replace("CM", "DCCCC");
            break;
    }
    let val = 0;
    Array.from(s.split("")).forEach((e)=>{
        val = val + data.e;
        
        console.log(e);
    })
    return val;
};


console.log(romanToInt("IV"));