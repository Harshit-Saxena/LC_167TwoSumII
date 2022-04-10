/*
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//? Using two pointers from left and right as we know the array numbers[] is sorted. We'll change the positions of the pointers until we find out target.
var twoSum = function (numbers, target) {
    var left = 0;
    var right = numbers.length-1 ;
    while(left < right){
        let curSum = numbers[left] + numbers[right];
        if(curSum > target){
            right--;
        }else if(curSum < target){
            left++;
        }else{
            return [left+1, right+1]
        }
    }
        return [left+1, right+1]
    
};