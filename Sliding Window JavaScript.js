
//sliding window javascript 
var slidingWindow = function(nums, size) {
    let currSum = 0;
    let maxSumSeen = -Infinity;
    for(let i = 0; i < nums.length; i++){
        currSum += nums[i];
        if(i > size - 1){
            maxSumSeen = Math.max(currSum, maxSumSeen);
            currSum -= nums[i - (size - 1)];
        }
    }
    return maxSumSeen
};

const arr1 = [2,3,5,2,7,3,5,5,23,29]

alert(slidingWindow(arr1, 2))