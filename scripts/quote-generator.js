const url = "https://bolls.life/get-random-verse/KJV/";
let randomQuote = {};
const main = document.querySelector("#main");
const BibleBooks = [
    [BookTitle = "Genesis", BookNumber = 1],
    [BookTitle= "Exodus", BookNumber = 2],
    [BookTitle= "Leviticus", BookNumber = 3],
    [BookTitle= "Numbers", BookNumber= 4],
    [BookTitle= "Deuteronomy", BookNumber = 5],
    [BookTitle= "Joshua", BookNumber= 6],
    [BookTitle= "Judges", BookNumber= 7],
    [BookTitle= "Ruth", BookNumber= 8],
    [BookTitle= "1 Samuel", BookNumber= 9],
    [BookTitle= "2 Samuel", BookNumber= 10],
    [BookTitle= "1 Kings", BookNumber= 11],
    [BookTitle= "2 Kings", BookNumber= 12],
    [BookTitle= "1 Chronicles", BookNumber= 13],
    [BookTitle= "2 Chronicles", BookNumber= 14],
    [BookTitle= "Ezra", BookNumber= 15],
    [BookTitle= "Nehemiah", BookNumber= 16],
    [BookTitle= "Esther", BookNumber= 17],
    [BookTitle= "Job", BookNumber= 18],
    [BookTitle= "Psalms", BookNumber= 19],
    [BookTitle= "Proverbs", BookNumber= 20],
    [BookTitle= "Ecclesiastes", BookNumber= 21],
    [BookTitle= "Song of Solomon", BookNumber= 22],
    [BookTitle= "Isaiah", BookNumber= 23],
    [BookTitle= "Jeremiah", BookNumber= 24],
    [BookTitle= "Lamentations", BookNumber= 25],
    [BookTitle= "Ezekiel", BookNumber= 26],
    [BookTitle= "Daniel", BookNumber= 27],
    [BookTitle= "Hosea", BookNumber= 28],
    [BookTitle= "Joel", BookNumber= 29],
    [BookTitle= "Amos", BookNumber= 30],
    [BookTitle= "Obadiah", BookNumber= 31],
    [BookTitle= "Jonah", BookNumber= 32],
    [BookTitle= "Micah", BookNumber= 33],
    [BookTitle= "Nahum", BookNumber= 34],
    [BookTitle= "Habakkuk", BookNumber= 35],
    [BookTitle= "Zepheniah", BookNumber= 36],
    [BookTitle= "Haggai", BookNumber= 37],
    [BookTitle= "Zecheriah", BookNumber= 38],
    [BookTitle= "Malachi", BookNumber= 39],
    [BookTitle= "Matthew", BookNumber= 40],
    [BookTitle= "Mark", BookNumber= 41],
    [BookTitle= "Luke", BookNumber= 42],
    [BookTitle= "John", BookNumber= 43],
    [BookTitle= "Acts", BookNumber= 44],
    [BookTitle= "Romans", BookNumber= 45],
    [BookTitle= "1 Corinthians", BookNumber= 46],
    [BookTitle= "2 Corinthians", BookNumber= 47],
    [BookTitle= "Galatians", BookNumber= 48],
    [BookTitle= "Ephesians", BookNumber= 49],
    [BookTitle= "Philippians", BookNumber= 50],
    [BookTitle= "Colossians", BookNumber= 51],
    [BookTitle= "1 Thessalonians", BookNumber= 52],
    [BookTitle= "2 Thessalonians", BookNumber= 53],
    [BookTitle= "1 Timothy", BookNumber= 54],
    [BookTitle= "2 Timothy", BookNumber= 55],
    [BookTitle= "Titus", BookNumber= 56],
    [BookTitle= "Philemon", BookNumber= 57],
    [BookTitle= "Hebrews", BookNumber= 58],
    [BookTitle= "James", BookNumber= 59],
    [BookTitle= "1 Peter", BookNumber= 60],
    [BookTitle= "2 Peter", BookNumber= 61], 
    [BookTitle= "1 John", BookNumber= 62],
    [BookTitle= "2 John", BookNumber= 63], 
    [BookTitle= "3 John", BookNumber= 64],
    [BookTitle= "Jude", BookNumber= 65],
    [BookTitle= "Revelation", BookNumber= 66]
]

const getQuote = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const randomQuote = await response.json();
        displayQuote(randomQuote)
    }
}   

function displayQuote(randomQuote) {
    const quoteText = document.createElement("p");
    quoteText.innerHTML = `"${randomQuote.text}"`;
    const quoteReference = document.createElement("p");
    const quoteChapter = randomQuote.chapter;
    const quoteVerse = randomQuote.verse;
    BibleBooks.forEach((Book) => {
        BibleBooks.filter(element => element = Book)
        const bookNumber = Book[1]
        const bookTitle = Book[0]
        if (bookNumber === randomQuote.book) {
            bookNumber === bookTitle
        quoteReference.innerHTML = `${bookTitle} ${quoteChapter}:${quoteVerse}`;
    }})
    main.appendChild(quoteReference);
    main.appendChild(quoteText); 
 };

function reset() {
    main.innerHTML = ""
}

document.querySelector("#find-quote").addEventListener("click", getQuote);
document.querySelector("#reset").addEventListener("click", reset);