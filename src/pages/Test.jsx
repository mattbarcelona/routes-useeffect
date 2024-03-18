import React, { useState, useEffect } from 'react'

function NameComponent() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  useEffect(() => {
    console.log("La lista ha cambiado:", namesList);
  }, [namesList]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddName = () => {
    setNamesList([...namesList, name])
    setName('') // Limpiar el campo de nombre después de añadirlo
  }

  return (
    <>
    
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Ingrese su nombre"
        />
      <button onClick={handleAddName}>Añadir</button>
      <ul>
        {namesList.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
    
    
    <input type='text' value={name} onChange={handleNameChange} placeholder='Ingresa el nombre' />
    <button onClick={handleAddName}>Add</button>
    <ul>
      {namesList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>
    </>
    
    
  )
} 

export default NameComponent