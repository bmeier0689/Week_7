function squareValues(arrayInput) {
    for(var i = 0; i<arrayInput.length; i++){
        arrayInput[i] = arrayInput[i]*arrayInput[i]
    }
    return arrayInput
}

function wholeRootFinder(valueInput){
    for(var i = 1; i<valueInput; i++){
        if(i*i == valueInput){
            return true
        }
        else if(i*i>valueInput){
            return false
        }
    }
}

console.log(wholeRootFinder(29))

console.log(squareValues([0,-2,5]))

function shiftArrayValues(arrayInput){
    for(var i = 0; i<arrayInput.length-1; i++){
        arrayInput[i] = arrayInput[i+1]
    }
    arrayInput[arrayInput.length-1] = 0
    return arrayInput
}

console.log(shiftArrayValues([1,2,3,4,5,6]))