let name = prompt("Ismingizni kiriting");
let name1 = prompt("Bironta harf kiriting")
let test = name.includes(name1)


if (test) {
    alert(name + " ismining ichida " + name1 +  " harf mavjud ")
} else {
    alert(name + " ismining ichida " + name1 +  " harf mavjud emas ")
}