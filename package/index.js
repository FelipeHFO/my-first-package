const removeNumbers = (string) => {
    return string.replace(/[0-9]/g, '');
}

const removeLetters = (string) => {
    return string.replace(/\D+/g, '');
}

module.exports = { 
    removeNumbers: removeNumbers, 
    removeLetters: removeLetters,
};