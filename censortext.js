var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(intStr){
    for (idx in censoredWords){
        intStr = intStr.replace(censoredWords[idx], "****");
    }

    for (idx in customCensoredWords){
        intStr = intStr.replace(customCensoredWords[idx], "****");
    }

    return intStr;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}

function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWords;