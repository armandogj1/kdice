import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Selector from './components/Selector.jsx';
import Definition from './components/Definition.jsx';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({
    fromCountry: 'colombia',
    toCountry: 'mexico',
    to: '',
    from: '',
    definition: '',
    generic: '',
    fetch: false,
  });

  const handleUpdate = (key, value, fetch = false) => {
    const newState = {
      ...state,
      fetch,
      [key]: value,
    };

    setState(newState);
  };

  useEffect(() => {
    if (state.fetch) {
      console.log(state);
      axios
        .get('/api/word', {
          params: {
            country: state.fromCountry,
            word: state.from,
            toCountry: state.toCountry,
          },
        })
        .then(({ data }) => {
          console.log(data);
          setState((prev) => ({
            ...prev,
            to: data.to,
            generic: data.word,
            fetch: false,
          }));
        })
        .catch((err) => console.log(err));
    }
  }, [state]);

  return (
    <section className='main'>
      <div className='selection-bar'>
        <Selector toOrFrom='from' handleUpdate={handleUpdate} />
        <Selector toOrFrom='to' handleUpdate={handleUpdate} answer={state.to} />
      </div>
      <Definition word={state.generic} definition={state.definition} />
    </section>
  );
};

export default hot(App);
