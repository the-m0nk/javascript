
function isBalanced(string){
    const arr= [];
    const open = "({[";
    const closed = "]})";
    const pair = {')' : '(' , ']' : '[' , '}' : '{'}

    for(let i=0 ; i < string.length ; i++){
        const a = string[i]
        if(open.includes(a)){
            arr.push(a)

        }
        else if(closed.includes(a)){
            console.log(pair[a], "A pair")
            if(arr.length === 0 || arr.pop() !== pair[a]){
                return false
            }
        }

    }
    return arr.length === 0
}



const string = "[()]{}{[()()]()}"

console.log(isBalanced(string));