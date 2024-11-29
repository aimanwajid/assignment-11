import React from 'react';
import Child from './Child';

const Parent = () => {
  const data = [
    {
      name: "Aiman",
      
      age: 20,
      color: "Black",
      dish: "Biryani",
    },
    {
      name: "Ali",
      
      age: 16,
      color: "Blue",
      dish: "Pizza",
    },
];

  return (
    <div>
      {data.map((person, index) => (
        <Child
          key={index} 
          name={person.name}
          
          Age={person.age}
          Color={person.color}
          Dish={person.dish}
        />
      ))}
    </div>
  );
};
export  default Parent;