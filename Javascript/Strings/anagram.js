//Write a function that determines if two strings are anagrams of each other anagram

function checkAnagram(str1, str2) {
    const frequencyMap = new Map();

    if (!str1.length || !str2.length || str1.length !== str2.length) {
        console.log("enter equal strings or string is empty");
        return;
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for (let i = 0; i < str1.length; i++) {
        frequencyMap.set(str1[i], (frequencyMap.get(str1[i]) || 0) + 1);
    }
    for (let i = 0; i < str2.length; i++) {
        if (!frequencyMap.has(str2[i])) {
            console.log("not anagram");
            return false;
        }

        frequencyMap.set(str2[i], frequencyMap.get(str2[i]) - 1);

        console.log(frequencyMap, "map state");
        if (frequencyMap.get(str2[i]) === 0) {
            frequencyMap.delete(str2[i]);
        }
    }
    return Object.keys(frequencyMap).length === 0;
}
checkAnagram("abcd", "aabc");
