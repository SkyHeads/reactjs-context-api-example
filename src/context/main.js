import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  let [state, setState] = useState({
    name: 'Bruno Fernandes',
    age: 28
  });

  const incrementAge = () => {
    setState(prevState => ({
      ...prevState,
      age: state.age + 1
    }));
  };

  const decrement = () => {
    setState(prevState => ({
      ...prevState,
      age: state.age -= 1
    }));
  };

  return (
    <AppContext.Provider value={{ state, incrementAge, decrement }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider };