import wordleBank from '../assets/wordle-bank.txt';

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]];

export const retrieveRandomWord = async () => {
    const textFile = await fetch(wordleBank);
    const responseFile = await textFile.text();
    const wordBankArray = responseFile.split("\r\n");    
        // .then((response) => response.text())
} 

retrieveRandomWord();