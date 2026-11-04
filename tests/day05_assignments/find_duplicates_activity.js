let arr = [10, 20, 10, 30, 20, 40, 10, 30, 30];
let dup = [];
console.log(arr.indexOf(20));

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            if (dup.indexOf(arr[i]) === -1) {
                dup.push(arr[i]);
            }                
        }
    }
}
console.log("Duplicate values:", dup);