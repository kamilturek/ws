import { useState } from 'react';

import Trail from './Components/Trail/Trail';
import './App.css';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Trail open={open} onClick={() => setOpen((state) => !state)}>
      <span>Kamil</span>
      <span>Turek</span>
      <span>.IT</span>
    </Trail>
  );
};

export default App;
