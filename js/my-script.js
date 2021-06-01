/*
SERVE UN PROGRAMMA CHE STAMPI DA 1 A 100
PER I MULTIPLI DI 3 STAMPI AL POSTO DEL NUMERO LA PAROLA FIZZ
PER I MULTIPLI DI 5 STAMPI AL POSTO DEL NUMERO LA PAROLA BUZZ
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

var output = document.getElementById('number');

for(var x = 1; x <= 100 ; x++){
} if(x % 3){
    output.innerHTML = "Fizz";
} else if(x % 5){
    output.innerHTML += "Buzz";
} else{
    output.innerHTML += "FizzBuzz";
}


