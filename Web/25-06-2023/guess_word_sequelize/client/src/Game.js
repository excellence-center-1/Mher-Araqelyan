import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';

/* const getRandomWord = () => {
    const keys = Object.keys(wordsWithHints);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomWord = keys[randomIndex];
    return randomWord;
} */

const Game = () => {
    const [currentWord, setCurrentWord] = useState('');
    const [currentHint, setCurrentHint] = useState('');
    const [message, setMessage] = useState('');
    const [inputValues, setInputValues] = useState(Array.from(currentWord, () => ''));
    const [score, setScore] = useState(0);
    /* const location = useLocation();
    const gameData = location.state && location.state.gameData; */
    const fetchRandomWord = async () => {
        try {
            const response = await fetch('http://localhost:3000/random-word', {
                method: 'GET',
            });
            if (response.ok) {
                const data = await response.json();
                setCurrentWord(data.word);
                setCurrentHint(data.question);
            } else {
                console.error('Error retrieving random word', response.status);
            }
        } catch (error) {
            console.error('Error retrieving random word', error);
        }
    };


    useEffect( () => {
         fetchRandomWord();
      }, []);
    useEffect( () => {
         fetchRandomWord();
      }, [score]);
 


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
           /*  delete wordsWithHints[currentWord]; */
            /* const newWord = getRandomWord();
            setCurrentWord(newWord);
            setCurrentHint(wordsWithHints[newWord]); */
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
            <p>Your level is {/* {gameData.level} */} </p>
        </div>
    );
};

export default Game;
