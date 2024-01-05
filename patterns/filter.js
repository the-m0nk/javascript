var arr = [5,1,3,2,6]


function oddfilter(x){
    if(x%2 ==0){
        return x
    }
}
const output = arr.filter(oddfilter)

console.log(output)