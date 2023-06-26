import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

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
    

    return <div id="Container">
        <h1>Welcome To Game!</h1>
    </div>
}
export default Game;
