// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1
// console.log(n)

var namaSiswa = prompt("siapa namamu ?")
var studentWish = prompt("masuk universitas gak?")
// kalau jawabannya mau, maka keluarkan persen 
// akan masuk jawabannya

if (studentWish == "mau") {
    var nilaiSMA = prompt ("berapakah nilai sma/smk mu?")
    
    if (nilaiSMA < 30) {
        alert ("tidak mungkin masuk univ")
    } 
    else if (nilaiSMA < 50) {
        var chanceGetUniv = Math.random() * 100
        chanceGetUniv = Math.floor(chanceGetUniv)
        console.log(chanceGetUniv)
        alert("kemungkinan kamu masuk univ adalah " + chanceGetUniv + "%")
        
        
        if (chanceGetUniv < 50){
                alert (`hmm kemungkinan kamu ${namaSiswa}  kecil masuk UNIV`)
            }
            else if (chanceGetUniv > 50) {
                alert (`hmm kemungkinan kamu ${namaSiswa} bisa masuk UNIV`)
            }
            else if (chanceGetUniv > 70 ) {
                alert (`hei ${namaSiswa} pasti masuk UNIV dengan ${nilaiSMA} mu yang besar itu`)
            }
             else  {
                alert (`hei ${namaSiswa} pasti masuk UNIV dengan ${nilaiSMA} mu yang besar itu`)
            }
        }
    }
    
else {
    alert ("okedeh goodluck")
}

// var chanceGetUniv = Math.random() * 100
//     chanceGetUniv = Math.floor(chanceGetUniv)
//     console.log(chanceGetUniv)
//     alert("kemungkinan kamu masuk univ adalah " + chanceGetUniv + "%")
// jika nilai dari user input diatas 80
// promt ("berapa nilai sma mu?")
// kemungkinan masuk universitas diatas 80%