// Questions 🧨
var nums = [1, 2, 3, 4, 6, 9];
var mNum = [];

var min = nums[0];
var max = nums[0];

for (var i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }
    console.log("Chhoti value:", min);

    if (nums[i] > max) {
        max = nums[i];
    }
}

for (var v = min; v <= max; v++) {
    var present = false;
    for (var x = 0; x < nums.length; x++) {
        if (nums[x] === v) {
            present = true;
            break;
        }
    }
    if (!present) {
        mNum.push(v);
    }
}

alert("Missing numbers: ");
for (var a = 0; m < mNum.length; a++) {
    alert(mNum[a] + " ");
}
