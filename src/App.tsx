import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';

// import User from './components/User';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default (): JSX.Element => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="ui segment container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />;
      </Route>
      <Route path="/dropdown">
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>{' '}
        {showDropdown ? (
          <Dropdown
            label="color"
            options={options}
            onSelectedChange={setSelected}
            selected={selected}
          />
        ) : null}
        <div style={{ color: selected.value }}>
          This is a {selected.value.toUpperCase()} text
        </div>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/* 
      <div>
     
      </div>
      <div>
        <User />
      </div> */}
    </div>
  );
};
