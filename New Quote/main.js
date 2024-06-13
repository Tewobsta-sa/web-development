let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.text-area')
let person = document.querySelector('.person')

const quotes = [
    {
        quote: "The only way to do great work is to love what you do." ,
        person: 'Steve Jobs'
    },
    {
        quote: "Believe you can and you're halfway there." ,
        person: ' Theodore Roosevelt'
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions." ,
        person: 'Dalai Lama'
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts" ,
        person: 'Winston Churchill'
    },
    {
        quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring." ,
        person: 'Marilyn Monroe'
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams." ,
        person: 'Eleanor Roosevelt'
    },
    {
        quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful." ,
        person: 'Joshua J. Marine'
    },
    {
        quote: "The best way to predict the future is to create it" ,
        person: 'Peter Drucker'
    },
    {
        quote: "Happiness is not by chance, but by choice" ,
        person: 'Jim Rohn'
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today." ,
        person: 'Franklin D. Roosevelt'
    }
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});

