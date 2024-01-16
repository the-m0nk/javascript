var string = "aabasabaa";
var ptr = "aaba"

function anagram(){
    let count =0;
    var i = 0;
    var j = 0;
    while(j  < ptr.length){
        // Calculation

        if(j < ptr.length){
            j++
        }
        if(j === ptr.length){

            // Answer
            i++;  // Sliding
            j++   // Sliding
        }
    }
}