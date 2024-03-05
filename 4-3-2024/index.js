// var myName = "Azizah"

// var userInput = prompt("siapa namamu");
// alert (`nama saya ${userInput}`)
// alert ("nama saya " + userInput)


// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1
// console.log(n)

// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1
// console.log(n)

prompt("siapa namamu ?")
var studentWish = prompt("masuk universitas gak?")
// kalau jawabannya mau, maka keluarkan persen 
// akan masuk jawabannya

if (studentWish == "mau") {
    var chanceGetUniv = Math.random() * 100
    chanceGetUniv = Math.floor(chanceGetUniv)
    console.log(chanceGetUniv)
    alert("kemungkinan kamu masuk univ adalah " + chanceGetUniv + "%")
} else {
    alert ("okedeh goodluck")
}
// jika nilai dari user input diatas 80
// promt ("berapa nilai sma mu?")
// kemungkinan masuk universitas diatas 80%