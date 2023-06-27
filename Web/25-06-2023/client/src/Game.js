import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
const wordsWithHints = {
    cat: 'Furry animal with whiskers',
    dog: 'Barks and wags its tail',
    house: 'A place where people live',
    car: 'A means of transportation',
    sun: 'Source of light and heat',
    book: 'A set of pages with text',
    tree: 'Tall plant with branches and leaves',
    chair: 'A piece of furniture for sitting',
    apple: 'A round fruit with a red or green skin',
    computer: 'An electronic device for processing data',
    river: 'A large flowing body of water',
    moon: 'The natural satellite of the Earth',
    pen: 'A tool used for writing or drawing',
    flower: 'The reproductive structure of a plant',
    music: 'Organized sound with rhythm and melody',
    mountain: 'A large landform that rises above the surrounding land',
    beach: 'A sandy or pebbly shore by the ocean',
    clock: 'A device for measuring and displaying time',
    bicycle: 'A two-wheeled vehicle powered by pedals',
    airplane: 'A powered flying vehicle with fixed wings and engines',
    hat: 'A head covering typically worn for protection or fashion',
    key: 'A small metal instrument used to unlock something',
};


const getRandomWord = () => {
    const keys = Object.keys(wordsWithHints);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomWord = keys[randomIndex];
    return randomWord;
}

const Game = () => {
    const [currentWord, setCurrentWord] = useState(getRandomWord());
    const [currentHint, setCurrentHint] = useState(wordsWithHints[currentWord]);
    const [message, setMessage] = useState('');
    const [inputValues, setInputValues] = useState(Array.from(currentWord, () => ''));
    const [score, setScore] = useState(0);
    const location = useLocation();
    const gameData = location.state && location.state.gameData;
    
    useEffect(() => {
        setInputValues(Array.from(currentWord, () => ''));
    }, [currentWord]);

    const handleChange = (e, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = e.target.value;
        setInputValues(newInputValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isCorrect = currentWord === inputValues.join('');

        if (isCorrect) {
            setMessage('Congratulations! You guessed the word correctly!');
            setScore((prevScore) => prevScore + 1);
            delete wordsWithHints[currentWord];
            const newWord = getRandomWord();
            setCurrentWord(newWord);
            setCurrentHint(wordsWithHints[newWord]);
        } else {
            setMessage('Oops! Try again.');
        }
    };

    const inputs = inputValues.map((value, index) => (
        <input
            type="text"
            className="form-control bg-warning-subtle w-25 inp"
            value={value}
            onChange={(e) => handleChange(e, index)}
            key={index}
        />
    ));

    return (
        
        <div className="container d-flex justify-content-center flex-column w-25 mt-5">
            <h1>Welcome To Game!</h1>
            <h2>{currentHint}</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row mt-5">{inputs}</div>
                <button type="submit" className="btn btn-primary">
                    OK
                </button>
            </form>
            <p>{message} Your score is {score}</p>
            <p>Your level is {gameData.level} </p>
        </div>
    );
};

export default Game;
