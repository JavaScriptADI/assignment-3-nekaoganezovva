/*
Write a program that creates a string that represents an 8×8 grid, 
using new-line characters to separate lines. At each position of the grid there is 
either a space or a # character. 
The characters should form a chessboard.

Passing this string to console.log should show something like this:

დაწერეთ პროგრამა, რომელიც ქმნის string-ს რაც წარმოადგენს 8x8 ბადეს,
newline (\n) character -ის გამოყენებით განაცალკევეთ ხაზები. თითოეული ბადის პოზიციაზე ან არის space (" ") 
ან "#".
ამ სტრინგმა უნდა შეადგინოს ჭადრაკის დაფა.

console.log -ს რომ გადაცემთ ამ ფუნქციას შედეგი ასეთი უნდა მიიღოთ:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/
let myGrid = 8;
let board = '';

for (let i = 0; i < myGrid; i++) {
    for (let a = 0; a < myGrid; a++) {
        if ((i + a) % 2 === 0) {
            board += ' ';
        } else {
            board += '#';
        }
    }
    board += '\n'; 
}

console.log(board);