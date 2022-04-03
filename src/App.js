import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, type: 'spring' } }}
        className="card"
        onMouseEnter={() => setToggle(!toggle)}
        onMouseLeave={() => setToggle(!toggle)}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expandable"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam quasi nobis eos in odio dolorum
              odit minima et quod.
            </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, explicabo?</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
