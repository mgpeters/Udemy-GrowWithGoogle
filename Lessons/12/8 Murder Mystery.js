/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == "dining room") {
    weapon = "knife";
    solved = true;
} else if (room == "billiards room") {
    weapon = "pool stick";
    solved = true;
} else if (room == "gallery") {
    weapon = "trophy";
    solved = true;
} else {
    weapon = "poison";
    solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
