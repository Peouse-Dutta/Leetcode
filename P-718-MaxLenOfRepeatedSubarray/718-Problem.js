const a = [1,1,2,3,4,5,6];
const b = [1,1,2,4,6,5];
const findLength = (nums1, nums2) => {
    let Flag = false;
    let count = 0;
    for(let i = 0; i < (nums1.Length - 1); i++){
        for(let j = 0; j<(nums2.Length - 1); j++){
            if (nums1[i] == nums2[j] && Flag == false){
                Flag = true;
                count++;
            }
            if(Flag){
                nums1[i+1] == nums2[j+1];
                count++;
            }
            else{
                Flag = false;
                count = 0;
                break;
            }
        }
        console.log(count);
    }
};
var hello = findLength();
console.log(hello(a,b));