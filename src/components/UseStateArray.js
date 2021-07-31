import React from 'react';
import { data } from '../data';

export default function UseStateArray() {
  const [people, setPeople] = React.useState(data);

  const removeItem = id => {
    // setPeople(people.filter(item => item.id !== id));

    // functional update form
    setPeople(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      {people.length > 0 && (
        <button className='btn' onClick={() => setPeople([])}>
          clear items
        </button>
      )}
    </>
  );
}
