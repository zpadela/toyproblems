
/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

*/


var twoSum = function(nums, target) {
    var index = [];
    for (var i = 0; i < nums.length; i++){
        for (var j = i + 1; j < nums.length; j++) {
            var checkSum = nums[i] + nums[j];
            if (checkSum === target) {
                return [i, j];
            }
        }
    }
};