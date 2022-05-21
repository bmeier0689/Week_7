function printOdds() {
    for(var i = 1; i<20; i++){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}

printOdds()


function divideThree() {
    for(var i = 100; i>=0; i--){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}

divideThree()

function printSequence(arrayInput) {
    for(var i = 0; i<arrayInput.length; i++){
        console.log(arrayInput[i])
    }
}

printSequence([4,2.5,1,-0.5,-2,-3.5])

function sigma() {
    var sum = 0
    for(var i = 1; i<=100; i++){
        sum = sum + i
        console.log(sum)
    }
}

sigma()

function factoral() {
    var product = 1
    for(var i = 1; i<=12; i++){
        product = product * i
        console.log(product)
    }
}

factoral()