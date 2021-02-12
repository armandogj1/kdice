import React, { useState } from 'react';
import textToSpeech from '../../lib/textToSpeech.js';
import '../styles/selector.css';

const Paises = ['Colombia', 'Mexico', 'Argentina', 'Venezuela'];

const Selector = ({ toOrFrom, handleUpdate, answer }) => {
  const [word, setWord] = useState('');
  const [lang, setLang] = useState(toOrFrom === 'from' ? 'Colombia' : 'Mexico');

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(toOrFrom, word, true);
  };

  const handleSelect = (e) => {
    const key = toOrFrom === 'to' ? 'toCountry' : 'fromCountry';
    setLang(e.target.value);
    handleUpdate(key, e.target.value.toLowerCase());
  };

  const handleSpeak = () => {
    textToSpeech(word || answer);
  };

  return (
    <form className='selector' onSubmit={handleSubmit}>
      <select value={lang} onChange={handleSelect}>
        {Paises.map((pais) => (
          <option value={pais}>{pais}</option>
        ))}
      </select>
      <label>
        {toOrFrom === 'from' ? 'DE:' : 'A:'}
        <input
          type='text'
          placeholder={toOrFrom === 'from' ? 'Palabra' : 'Traducción'}
          value={answer || word}
          onChange={handleChange}
        />
      </label>
      <span onClick={handleSpeak}>📢</span>
    </form>
  );
};

export default Selector;
