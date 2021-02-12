import React from 'react';
import Dropdown from './Dropdown';
// import Search from './Search';
// import Accordion from './Accordion'


const App = () => { 

  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end JavaScript framework.'
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers.'
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components.'
    }
  ];

  const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'The Color Blue',
      value: 'blue'
    }
  ];

    return(
      <div>
        <Dropdown options={options}/>
        {/* <Search /> */}
        {/* <Accordion items={items}/> */}
      </div>
    )
};

export default App;