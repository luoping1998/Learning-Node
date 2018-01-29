function Cat(words, callback) {
    callback(words);
}

function Speak(words) {
    console.log(words);
}

Cat("miao", Speak);