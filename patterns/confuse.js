function Pankaj_chutiyap(arr){

    const pankaj = [];
    for(const item of arr){
        console.log(item , "item")

        if(!isNaN(item)){
            pankaj.push(Number(item))
            console.log(pankaj , "11111")
        }
        else if(item === "C"){
            if(pankaj.length > 0){
                pankaj.pop();
            }
            console.log(pankaj , "22222")
        }
        else if(item === "D"){
            if(pankaj.length > 0){
                const last_double = pankaj[pankaj.length -1]
                pankaj.push(last_double*2)
            }
            console.log(pankaj , "333333")
        }
        else if(item === "+"){
            if(pankaj.length >=2){
                const last = pankaj[pankaj.length-1]
                const second_last = pankaj[pankaj.length -2]
                pankaj.push(last + second_last)
            }
            console.log(pankaj , "44444")
        }
    }

    var sum = 0;
    console.log(pankaj , "555555")
    for(let i = 0 ; i< pankaj.length ; i++){
        sum += pankaj[i]
    }
    console.log(sum ,"summm")
    return sum


}


var arr = ["5", "2", "4", "C", "D", "+"]
console.log(Pankaj_chutiyap(arr))







