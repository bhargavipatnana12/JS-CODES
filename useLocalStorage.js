import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue
      ? JSON.parse(storedValue)
      : initialValue;
  });

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;


//App.jsx

import useLocalStorage from "./useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;
