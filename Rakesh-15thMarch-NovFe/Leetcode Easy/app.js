ratings = [3,0,1];

function candy(ratings){
let candy = 0;

for(let i = 0; i < ratings.length; i++){
        candy = candy + 1;
        if(ratings[i] > ratings[i + 1]){
            candy = candy + 1
        } else if(ratings[i] > ratings[i - 1]){
            candy = candy + 1
        } else if(ratings[i] == ratings[i + 1]){
            candy = candy + 0;
    }
}

console.log("candy", candy);

}

candy(ratings)

// Input

// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

// Sample Output

// 3
// 4
// 0
// 0
// 4

function deletions(str) {
    let NoOfDel = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            NoOfDel = NoOfDel + 1;
        }
    }
    console.log(NoOfDel);
}

deletions("AAABBB")

// Q 58
 let arr = s.split(' ').reverse()

for(let i = 0;i< arr.length;i++){
if(arr[i] !== ""){
	let last = arr[i].split('');
  console.log(last.length)
  break;
}
}