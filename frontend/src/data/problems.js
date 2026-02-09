export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        acceptance: 52.4, // Added
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: [
                "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                "You can return the answer in any order.",
            ],
        },
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]",
            },
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists",
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {\n  // Write your solution here\n  \n}\n\n // Test cases\nconsole.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]\nconsole.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]\nconsole.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
            python: `def twoSum(nums, target):\n    # Write your solution here\n    pass\n\n# Test cases\nprint(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]\nprint(twoSum([3, 2, 4], 6))  # Expected: [1, 2]\nprint(twoSum([3, 3], 6))  # Expected: [0, 1]`,
            java: `import java.util.*;\n\nclass Solution {\n    public static int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n        return new int[0];\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]\n        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]\n        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]\n    }\n}`,
        },
        expectedOutput: {
            javascript: "[0,1]\n[1,2]\n[0,1]",
            python: "[0, 1]\n[1, 2]\n[0, 1]",
            java: "[0, 1]\n[1, 2]\n[0, 1]",
        },
    },

    "reverse-string": {
        id: "reverse-string",
        title: "Reverse String",
        difficulty: "Easy",
        category: "String • Two Pointers",
        acceptance: 78.1, // Added
        description: {
            text: "Write a function that reverses a string. The input string is given as an array of characters s.",
            notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {\n  // Write your solution here\n  \n}\n\n// Test cases\nlet test1 = ["h","e","l","l","o"];\nreverseString(test1);\nconsole.log(test1); // Expected: ["o","l","l","e","h"]\n\nlet test2 = ["H","a","n","n","a","h"];\nreverseString(test2);\nconsole.log(test2); // Expected: ["h","a","n","n","a","H"]`,
            python: `def reverseString(s):\n    # Write your solution here\n    pass\n\n# Test cases\ntest1 = ["h","e","l","l","o"]\nreverseString(test1)\nprint(test1)  # Expected: ["o","l","l","e","h"]\n\ntest2 = ["H","a","n","n","a","h"]\nreverseString(test2)\nprint(test2)  # Expected: ["h","a","n","n","a","H"]`,
            java: `import java.util.*;\n\nclass Solution {\n    public static void reverseString(char[] s) {\n        // Write your solution here\n        \n    }\n    \n    public static void main(String[] args) {\n        char[] test1 = {'h','e','l','l','o'};\n        reverseString(test1);\n        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]\n        \n        char[] test2 = {'H','a','n','n','a','h'};\n        reverseString(test2);\n        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]\n    }\n}`,
        },
        expectedOutput: {
            javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
            python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
            java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
        },
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        category: "String • Two Pointers",
        acceptance: 48.9, // Added
        description: {
            text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
            notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
        },
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.',
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.',
            },
            {
                input: 's = " "',
                output: "true",
                explanation:
                    's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {\n  // Write your solution here\n  \n}\n\n// Test cases\nconsole.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true\nconsole.log(isPalindrome("race a car")); // Expected: false\nconsole.log(isPalindrome(" ")); // Expected: true`,
            python: `def isPalindrome(s):\n    # Write your solution here\n    pass\n\n# Test cases\nprint(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True\nprint(isPalindrome("race a car"))  # Expected: False\nprint(isPalindrome(" "))  # Expected: True`,
            java: `class Solution {\n    public static boolean isPalindrome(String s) {\n        // Write your solution here\n        \n        return false;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true\n        System.out.println(isPalindrome("race a car")); // Expected: false\n        System.out.println(isPalindrome(" ")); // Expected: true\n    }\n}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        acceptance: 50.7, // Added
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1.",
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {\n  // Write your solution here\n  \n}\n\n// Test cases\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6\nconsole.log(maxSubArray([1])); // Expected: 1\nconsole.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            python: `def maxSubArray(nums):\n    # Write your solution here\n    pass\n\n# Test cases\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6\nprint(maxSubArray([1]))  # Expected: 1\nprint(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            java: `class Solution {\n    public static int maxSubArray(int[] nums) {\n        // Write your solution here\n        \n        return 0;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6\n        System.out.println(maxSubArray(new int[]{1})); // Expected: 1\n        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23\n    }\n}`,
        },
        expectedOutput: {
            javascript: "6\n1\n23",
            python: "6\n1\n23",
            java: "6\n1\n23",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        acceptance: 55.2, // Added
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: [
                "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
                "Return the maximum amount of water a container can store.",
                "Notice that you may not slant the container.",
            ],
        },
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation:
                    "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
            },
            {
                input: "height = [1,1]",
                output: "1",
            },
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {\n  // Write your solution here\n  \n}\n\n// Test cases\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49\nconsole.log(maxArea([1,1])); // Expected: 1`,
            python: `def maxArea(height):\n    # Write your solution here\n    pass\n\n# Test cases\nprint(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49\nprint(maxArea([1,1]))  # Expected: 1`,
            java: `class Solution {\n    public static int maxArea(int[] height) {\n        // Write your solution here\n        \n        return 0;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49\n        System.out.println(maxArea(new int[]{1,1})); // Expected: 1\n    }\n}`,
        },
        expectedOutput: {
            javascript: "49\n1",
            python: "49\n1",
            java: "49\n1",
        },
    },

    "best-time-to-buy-sell-stock": {
        id: "best-time-to-buy-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Greedy",
        acceptance: 54.1, // Added
        description: {
            text: "You are given an array prices where prices[i] is the price of a stock on the ith day.",
            notes: [
                "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
                "Return the maximum profit you can achieve.",
            ],
        },
        examples: [
            {
                input: "prices = [7,1,5,3,6,4]",
                output: "5",
                explanation: "Buy on day 2 and sell on day 5.",
            },
            {
                input: "prices = [7,6,4,3,1]",
                output: "0",
            },
        ],
        constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxProfit(prices) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "5\n0",
        },
    },

    "merge-two-sorted-lists": {
        id: "merge-two-sorted-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        category: "Linked List",
        acceptance: 64.3, // Added
        description: {
            text: "Merge two sorted linked lists and return it as a sorted list.",
            notes: ["The list should be made by splicing together nodes of the first two lists."],
        },
        examples: [
            {
                input: "l1 = [1,2,4], l2 = [1,3,4]",
                output: "[1,1,2,3,4,4]",
            },
        ],
        constraints: ["The number of nodes in both lists is in the range [0, 50]."],
        starterCode: {
            javascript: `function mergeTwoLists(l1, l2) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "[1,1,2,3,4,4]",
        },
    },

    "contains-duplicate": {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        category: "Array • Hash Table",
        acceptance: 61.5, // Added
        description: {
            text: "Given an integer array nums, return true if any value appears at least twice.",
            notes: ["Return false if every element is distinct."],
        },
        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "true",
            },
            {
                input: "nums = [1,2,3,4]",
                output: "false",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵"],
        starterCode: {
            javascript: `function containsDuplicate(nums) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "true\nfalse",
        },
    },

    "move-zeroes": {
        id: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        acceptance: 61.8, // Added
        description: {
            text: "Move all 0's to the end of the array while maintaining the relative order of the non-zero elements.",
            notes: ["You must do this in-place."],
        },
        examples: [
            {
                input: "nums = [0,1,0,3,12]",
                output: "[1,3,12,0,0]",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁴"],
        starterCode: {
            javascript: `function moveZeroes(nums) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "[1,3,12,0,0]",
        },
    },

    "longest-common-prefix": {
        id: "longest-common-prefix",
        title: "Longest Common Prefix",
        difficulty: "Easy",
        category: "String",
        acceptance: 43.1, // Added
        description: {
            text: "Write a function to find the longest common prefix string amongst an array of strings.",
            notes: ["If there is no common prefix, return an empty string."],
        },
        examples: [
            {
                input: 'strs = ["flower","flow","flight"]',
                output: '"fl"',
            },
            {
                input: 'strs = ["dog","racecar","car"]',
                output: '""',
            },
        ],
        constraints: ["1 ≤ strs.length ≤ 200"],
        starterCode: {
            javascript: `function longestCommonPrefix(strs) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: `"fl"\n""`,
        },
    },

    "climbing-stairs": {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Hard",
        category: "Dynamic Programming",
        acceptance: 32.5, // Added
        description: {
            text: "You are climbing a staircase. It takes n steps to reach the top.",
            notes: [
                "Each time you can either climb 1 or 2 steps.",
                "Return number of distinct ways to climb to the top.",
            ],
        },
        examples: [
            {
                input: "n = 2",
                output: "2",
            },
            {
                input: "n = 3",
                output: "3",
            },
        ],
        constraints: ["1 ≤ n ≤ 45"],
        starterCode: {
            javascript: `function climbStairs(n) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "2\n3",
        },
    },
    "single-number": {
        id: "single-number",
        title: "Single Number",
        difficulty: "Easy",
        category: "Bit Manipulation • Array",
        acceptance: 74.2,
        description: {
            text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
            notes: ["You must implement a solution with a linear runtime complexity and use only constant extra space."],
        },
        examples: [
            {
                input: "nums = [2,2,1]",
                output: "1",
            },
            {
                input: "nums = [4,1,2,1,2]",
                output: "4",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴"],
        starterCode: {
            javascript: `function singleNumber(nums) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "1\n4",
        },
    },

    "valid-parentheses": {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        category: "Stack • String",
        acceptance: 40.8,
        description: {
            text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            notes: [
                "Open brackets must be closed by the same type of brackets.",
                "Open brackets must be closed in the correct order.",
            ],
        },
        examples: [
            {
                input: 's = "()"',
                output: "true",
            },
            {
                input: 's = "()[]{}"',
                output: "true",
            },
            {
                input: 's = "(]"',
                output: "false",
            },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
        starterCode: {
            javascript: `function isValid(s) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "true\ntrue\nfalse",
        },
    },

    "unique-paths": {
        id: "unique-paths",
        title: "Unique Paths",
        difficulty: "Medium",
        category: "Dynamic Programming • Combinatorics",
        acceptance: 64.1,
        description: {
            text: "There is a robot on an m x n grid. The robot is initially located at the top-left corner. The robot tries to move to the bottom-right corner. The robot can only move either down or right at any point in time.",
            notes: ["Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner."],
        },
        examples: [
            {
                input: "m = 3, n = 7",
                output: "28",
            },
            {
                input: "m = 3, n = 2",
                output: "3",
                explanation: "From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down, 2. Down -> Down -> Right, 3. Down -> Right -> Down",
            },
        ],
        constraints: ["1 ≤ m, n ≤ 100"],
        starterCode: {
            javascript: `function uniquePaths(m, n) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "28\n3",
        },
    },

    "binary-tree-maximum-path-sum": {
        id: "binary-tree-maximum-path-sum",
        title: "Binary Tree Max Path Sum",
        difficulty: "Hard",
        category: "Tree • DFS • Recursion",
        acceptance: 39.8,
        description: {
            text: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once.",
            notes: ["The path sum of a path is the sum of the node's values in the path.", "Given the root of a binary tree, return the maximum path sum of any non-empty path."],
        },
        examples: [
            {
                input: "root = [1,2,3]",
                output: "6",
                explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.",
            },
            {
                input: "root = [-10,9,20,null,null,15,7]",
                output: "42",
                explanation: "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.",
            },
        ],
        constraints: ["The number of nodes in the tree is in the range [1, 3 * 10⁴].", "-1000 ≤ Node.val ≤ 1000"],
        starterCode: {
            javascript: `/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n * this.val = (val===undefined ? 0 : val)\n * this.left = (left===undefined ? null : left)\n * this.right = (right===undefined ? null : right)\n * }\n */\nfunction maxPathSum(root) {\n  // Write your solution here\n}`,
        },
        expectedOutput: {
            javascript: "6\n42",
        },
    },
};

export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/js.png",
        monacoLang: "javascript",
    },
    python: {
        name: "Python",
        icon: "/python.png",
        monacoLang: "python",
    },
    java: {
        name: "Java",
        icon: "/java.png",
        monacoLang: "java",
    },
};