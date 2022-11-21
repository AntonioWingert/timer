import React, { useState } from 'react';
import { BsPlay, BsPause, BsStop } from 'react-icons/bs';
import Footer from '../layout/Footer';
import './Counter.css';

const SECOND_DEFAULT = 60;
const ONE_SECOND = 1000;
const ONE_SECOND_IN_HOUR = 3600;
const DEFAULT_TIMER = 300;
const ONE_MINUTE = 60000;

function Counter() {
  const [seconds, setSeconds] = useState(DEFAULT_TIMER);
  const [timer, setTimer] = useState();
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const [IsDisable, setDisable] = useState(false);
  const [isOff, setOff] = useState(true);

  const secondsToTime = (secs) => {
    const minuteDivisor = secs % ONE_SECOND_IN_HOUR;
    const minutesFunc = Math.floor(minuteDivisor / SECOND_DEFAULT);
    const secondsFunc = Math.ceil(minuteDivisor % SECOND_DEFAULT);

    return `${String(minutesFunc)
      .padStart(2, '0')}:${String(secondsFunc)
      .padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (!isOff) return;
    const timerInterval = setInterval(() => {
      setSeconds((prevState) => {
        if (prevState === 0) {
          clearInterval(timerInterval);
          setDisable(false);
          setOff(true);
          alert('Tempo concluido!');
          return 0;
        }
        return prevState - 1;
      });
    }, ONE_SECOND);

    setTimer(timerInterval);
    setOff(false);
  };

  const pauseTimer = () => {
    clearInterval(timer);
    setTimer(undefined);
  };

  const stopTimer = () => {
    pauseTimer();
    setSeconds(DEFAULT_TIMER);
    setOff(true);
    setDisable(false);
    setMinute('');
    setSecond('');
  };

  const setMinutes = (event) => {
    if (event.target.value > SECOND_DEFAULT) {
      alert('Insira um numero entre 60 ou menos');
      return setMinute('');
    }
    setMinute(event.target.value);
  };

  const setSecondsFunc = (event) => {
    if (event.target.value > SECOND_DEFAULT) {
      alert('Insira um numero entre 60 ou menos');
      return setSecond('');
    }
    setSecond(event.target.value);
  };

  const transformInputsOnTimer = (event) => {
    const minuteInMs = minute * ONE_MINUTE;
    const secondsInMs = second * ONE_SECOND;
    const userTime = (minuteInMs + secondsInMs) / ONE_SECOND;
    setSeconds(userTime);
    startTimer();
    event.preventDefault();
    setMinute('');
    setSecond('');
    setDisable(true);
  };

  return (
    <main>
      <section className="main-container">
        <div className="main-container-timer">
          <p role="timer" className="timer">{secondsToTime(seconds)}</p>
          <div className="timer-container">
            <input
              type="number"
              placeholder="mm"
              min="0"
              value={ minute }
              onChange={ setMinutes }
            />
            <p>:</p>
            <input
              type="number"
              placeholder="ss"
              value={ second }
              min="0"
              onChange={ setSecondsFunc }
            />
          </div>
          <button
            type="button"
            className="btn-start"
            onClick={ transformInputsOnTimer }
            disabled={ IsDisable }
          >
            Iniciar
          </button>
          <div className="button-container">
            <BsPlay
              role="menuitem"
              className="btn-options"
              type="button"
              onClick={ startTimer }
            >
              Play
            </BsPlay>
            <BsPause
              role="menuitem"
              className="btn-options"
              type="button"
              onClick={ pauseTimer }
            >
              Pausar
            </BsPause>
            <BsStop
              role="menuitem"
              className="btn-options"
              type="button"
              onClick={ stopTimer }
            >
              Stop
            </BsStop>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}

export default Counter;
