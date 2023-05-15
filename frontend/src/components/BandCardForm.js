import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { GlobalContext } from '../context/GlobalState';

export const BandCardForm = ({ setCreateBandCard }) => {
  const { userId } = useContext(GlobalContext);
  const [successMessage, setSuccessMessage] = useState(false);

  const [bandData, setBandData] = useState({
    userId,
    name: '',
    genre: '',
    description: '',
    searching_for: [],
  });

  const genreOptions = [
    { value: 'rock', label: 'Rock' },
    { value: 'pop', label: 'Pop' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'hip-hop', label: 'Hip Hop' },
    { value: 'country', label: 'Country' },
    { value: 'alternative', label: 'Alternative' },
  ];

  const searchingForOptions = [
    { value: 'guitarist', label: 'Guitarist' },
    { value: 'bassist', label: 'Bassist' },
    { value: 'drummer', label: 'Drummer' },
    { value: 'keyboardist', label: 'Keyboardist' },
  ];

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { name, genre, description, searching_for } = bandData;
    const errors = {};

    if (!name) {
      errors.name = 'Band Name is required';
    }

    if (!genre) {
      errors.genre = 'Genre is required';
    }

    if (!description) {
      errors.description = 'Description is required';
    }

    if (!searching_for.length > 0) {
      errors.description = 'Role is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (fieldName, value) => {
    setBandData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleGenreChange = selectedOption => {
    const genre = selectedOption ? selectedOption.value : '';
    handleInputChange('genre', genre);
  };

  const handleSearchForChange = selectedOptions => {
    const selectedValues = selectedOptions.map(option => option.value);
    handleInputChange('searching_for', selectedValues);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      fetch('/bands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bandData),
      })
        .then(response => {
          if (response.ok) {
            setSuccessMessage('A new band card created!');
          } else {
            setSuccessMessage('Something went wrong!');
          }
          return response;
        })
        .then(
          setTimeout(() => {
            setCreateBandCard(false);
            window.location.reload(); // Refresh the page
          }, 2500)
        )
        .catch(error => {
          console.error('Error:', error);
        });
      console.log(bandData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Band Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={bandData.name}
          onChange={e => handleInputChange('name', e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor='genre'>Genre:</label>
        <Select
          id='genre'
          name='genre'
          options={genreOptions}
          value={genreOptions.find(option => option.value === bandData.genre)}
          onChange={handleGenreChange}
        />
        {errors.genre && <span>{errors.genre}</span>}
      </div>
      <div>
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={bandData.description}
          onChange={e => handleInputChange('description', e.target.value)}
        />
        {errors.description && <span>{errors.description}</span>}
      </div>
      <div>
        <label htmlFor='searching_for'>Searching For:</label>
        <Select
          id='searching_for'
          name='searching_for'
          options={searchingForOptions}
          isMulti
          value={searchingForOptions.filter(option =>
            bandData.searching_for.includes(option.value)
          )}
          onChange={handleSearchForChange}
        />
        {errors.searching_for && <span>{errors.searching_for}</span>}
      </div>
      <button type='submit'>Create Band Card</button>
      {successMessage && <div className='message'>{successMessage}</div>}
    </form>
  );
};
