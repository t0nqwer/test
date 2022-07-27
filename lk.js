const input = ["d01t1", "d35t12", "d122t9", "ty1t2", "ty157t10", "e3t1", "e1t2"];
if (firstletter === "d") firstdigit = 3;
if (firstletter === "e") firstdigit = 5;
if (firstletter === "ty") firstdigit = 2;
const output = [300101, 303512, 312209, 200102, 215710, 500301, 500102];

//     3                001              01
//FirstLetterCode  NumberBefore"T" NumberAfter"T"

const input1 = input[0];
const inputsplitT = input1.split("t");
const inputsplit = input1.split("");
const firstletter = inputsplit[0]
let firstdigit
if (firstletter === "d") firstdigit = 3;
if (firstletter === "e") firstdigit = 5;
if (firstletter === "t") firstdigit = 2;
let NumberBefore 
let NumberAfter
if (firstletter === "d") NumberBefore = inputsplitT[0].substring(1);
if (firstletter === "e") NumberBefore = inputsplitT[0].substring(1);
if (firstletter === "t") NumberBefore = inputsplitT[1].substring(1);
if (NumberBefore.length === 1) NumberBefore = `00${NumberBefore}`
if (NumberBefore.length === 2) NumberBefore = `0${NumberBefore}`
if (firstletter === "d") NumberAfter = inputsplitT[1]
if (firstletter === "e") NumberAfter = inputsplitT[1]
if (firstletter === "t") NumberAfter = inputsplitT[2]
if (NumberAfter.length === 1) NumberAfter= `0${NumberBefore}`



 const output1 = `${firstdigit}${NumberBefore}${NumberAfter}`
