import { Heading, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

const createInitialState = () => {
  const age = new Date().getFullYear() - 1992;
  return age;
};

// Function to Reset age
export const App = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => setVersion(version + 1);
//   setAge(createInitialState);// this was not necessary:
/* When you click the reset button and increment the version state, you effectively change 
the key prop passed to the Somebody component. This operation triggers React to re-mount
 the component associated with the new key. Re-mounting a component means that React will
  discard the current component instance and create a new one from scratch, thereby 
  resetting its internal state to the initial values as specified by your state initialization logic. */

  return (
    <div className="App">
      <Somebody key={version} reset={handleReset} />
    </div>
  );
};

export const Somebody = ({ reset }) => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(createInitialState);

  const [isItalic, setIsItalic] = useState(false); // State to control italic styling

  // Function to add 'o' twice
  const handleClick = () => {
    setName((currentName) => currentName + 'o');
    setName((currentName) => currentName + 'o');
    console.log(name); // handleClick first execute this and then update the state of 'name' to ' Johnoo'
  };
  // Function to toggle italic style
  const toggleItalic = () => {
    setIsItalic(!isItalic); // Toggle the boolean state
  };

  // Function to increase age by 1
  const increaseAge = () => {
    setAge((currentAge) => currentAge + 1);
  };

  //this was their code:
  /*   const handleBirthdayClick = () => {
	setAge(age + 1);
};
 */

  return (
    <div className="App">
      <Heading>React Hooks Exercise Starter</Heading>
      {/* Apply italic style conditionally based on isItalic state */}
      <Text style={{ fontStyle: isItalic ? 'italic' : 'normal' }}>Your Name is: {name}</Text>
      <Text style={{ fontStyle: isItalic ? 'italic' : 'normal' }}>Your Age is: {age}</Text>
      {/* Button to toggle italic style */}
      <Button onClick={toggleItalic}>Toggle Italic and add o</Button>
      <Button onClick={handleClick}>add o</Button>
      <Button onClick={increaseAge}>Increase age by 1</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};
