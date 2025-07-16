// given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of array to the very right. you can see the k numbers
// in the window. Each time the sliding window moves right by one position.
// eg:- to find the substrings in a string

// Ds involved Array, String, Hashtable

// Input : nums = [1, 3, -1, -3, 5, 3, 6, 7];
// Output : [3,3,5,5,6,7];
// k is the window size

const input = [1, 3, -1, -3, 5, 3, 6, 7];

function Maximum(nums, k) {
    let arr = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let max = nums[i];

        for (let j = 1; j < k; j++) {
            if (nums[j + i] > max) {
                max = nums[j + i];
            }
        }
        arr.push(max);
    }
    return arr;
}

console.log(Maximum(input, 3));

// this is not optimised here were doing this problem
