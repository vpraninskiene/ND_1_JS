"use strict"

// Pirmoji užduotis

var kaina = prompt ("Kokia yra šios prekės kaina?")
kaina = Number(kaina)

while(isNaN(kaina)){
    kaina = prompt ("Kokia yra šios prekės kaina?")
    kaina = Number(kaina)
}

var pvm = kaina * 0.21
var kainaSuPvm = pvm + kaina
console.log("Prekės kaina su PVM: " + kainaSuPvm + "€")
console.log("PVM: " + pvm + "€")
console.log("Prekės kaina be PVM: " + kaina + "€")

// Antroji užduotis

var vardai = ["Jon Snow", "Cerseia Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]
console.log(vardai[0])
console.log(vardai[vardai.length - 1])

var number = prompt ("Įveskite skaičių nuo 1 iki 6")

if (number == 1){
    console.log(vardai[0])
} else if(number == 2){
    console.log(vardai[1])
} else if(number == 3){
    console.log(vardai[2])
} else if(number == 4){
    console.log(vardai[3])
} else if(number == 5){
    console.log(vardai[4])
} else{
    console.log(vardai[5])
}


// Trečioji užduotis


var skaiciuMasyvas = [5, 10, 15, 20, 25]


var sum = 0
var i=0
while (i < skaiciuMasyvas.length) {
     sum += skaiciuMasyvas[i]
     i++
}
console.log(sum)


var sum_1 = 0
var i=0
while (i < skaiciuMasyvas.length) {
     sum_1 += skaiciuMasyvas[i]
     i++
}
console.log(sum_1/skaiciuMasyvas.length)


console.log(Math.max.apply(null,skaiciuMasyvas))


console.log(Math.min.apply(null,skaiciuMasyvas))