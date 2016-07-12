'use strict';

function sort(nums){
    if(nums.length < 2)
        return nums;

    var isSorted = false;
    while(!isSorted){
        isSorted = true;
        for (var i = 1; i < nums.length; i++) {
            if(nums[i] < nums[i-1])
            {
                var temp = nums[i-1];
                nums[i-1] = nums[i];
                nums[i] = temp; 
                isSorted = false;
            }        
        }
    }
    return nums;
};

module.exports = {
    sort: sort
}