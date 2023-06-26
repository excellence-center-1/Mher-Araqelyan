import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
const allowedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const guessedLetters = [];
const wordsWithHints = {
    cat: 'Furry animal with whiskers',
    dog: 'Barks and wags its tail',
    house: 'A place where people live',
    car: 'A means of transportation',
    sun: 'Source of light and heat',
    book: 'A set of pages with text',
};
const keys = Object.keys(wordsWithHints);
const randomIndex = Math.floor(Math.random() * keys.length);
const randomWord = keys[randomIndex];
const hint = wordsWithHints[randomWord];
const Game = () => {
    const [currentWord, setCurrentWord] = useState(randomWord);
    const [guess, setGuess] = useState('');
    
    const inputs = [];
    for (let i = 0; i < randomWord.length; i++) {
        inputs.push(<input type="text" className="form-control bg-warning-subtle w-25 inp"  ></input>)
    }
    const handleSubmit =  (e) => {
        e.preventDefault();
        
    };   
    return (<div className="container d-flex justify-content-center flex-column w-25 mt-5">
        <h1>Welcome To Game!</h1>
        <h2> {hint}</h2>
        <div className='d-flex flex-row mt-5'>
            {inputs}
        </div>
        <button type="submit" class="btn btn-primary">Primary</button>
    </div>)
}

export default Game;
