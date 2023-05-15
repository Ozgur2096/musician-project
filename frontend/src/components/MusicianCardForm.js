import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { GlobalContext } from '../context/GlobalState';

export const MusicianCardForm = ({ setCreateMusicianCard }) => {
  const { userId } = useContext(GlobalContext);
  const [successMessage, setSuccessMessage] = useState(false);
  const [musicianData, setMusicianData] = useState({
    userId,
    firstName: '',
    lastName: '',
    instrument: '',
    genre: '',
    description: '',
  });

  const instrumentOptions = [
    { value: 'guitar', label: 'Guitar' },
    { value: 'piano', label: 'Piano' },
    { value: 'drums', label: 'Drums' },
    { value: 'bass', label: 'Bass' },
    { value: 'violin', label: 'Violin' },
    { value: 'saxophone', label: 'Saxophone' },
  ];

  const genreOptions = [
    { value: 'rock', label: 'Rock' },
    { value: 'pop', label: 'Pop' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'hip-hop', label: 'Hip Hop' },
    { value: 'country', label: 'Country' },
    { value: 'classical', label: 'Classical' },
  ];

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { firstName, lastName, instrument, genre, description } =
      musicianData;
    const errors = {};

    if (!firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }

    if (!instrument) {
      errors.instrument = 'Instrument is required';
    }

    if (!genre) {
      errors.genre = 'Genre is required';
    }

    if (!description) {
      errors.description = 'Description is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (fieldName, value) => {
    setMusicianData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      fetch('/musicians', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(musicianData),
      })
        .then(response => {
          if (response.ok) {
            setSuccessMessage('A new musician card created!');
          } else {
            setSuccessMessage('Something went wrong!');
          }
          return response;
        })
        .then(
          setTimeout(() => {
            setCreateMusicianCard(false);
            window.location.reload(); // Refresh the page
          }, 2500)
        )
        .catch(error => {
          console.error('Error:', error);
        });
      console.log(musicianData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={musicianData.firstName}
          onChange={e => handleInputChange('firstName', e.target.value)}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={musicianData.lastName}
          onChange={e => handleInputChange('lastName', e.target.value)}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label htmlFor='instrument'>Instrument:</label>
        <Select
          id='instrument'
          name='instrument'
          options={instrumentOptions}
          value={instrumentOptions.find(
            option => option.value === musicianData.instrument
          )}
          onChange={selectedOption =>
            handleInputChange('instrument', selectedOption.value)
          }
        />
        {errors.instrument && <span>{errors.instrument}</span>}
      </div>

      <div>
        <label htmlFor='genre'>Genre:</label>
        <Select
          id='genre'
          name='genre'
          options={genreOptions}
          value={genreOptions.find(
            option => option.value === musicianData.genre
          )}
          onChange={selectedOption =>
            handleInputChange('genre', selectedOption.value)
          }
        />
        {errors.genre && <span>{errors.genre}</span>}
      </div>
      <div>
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={musicianData.description}
          onChange={e => handleInputChange('description', e.target.value)}
        />
        {errors.description && <span>{errors.description}</span>}
      </div>
      <button type='submit'>Create Musician Card</button>
      {successMessage && <div className='message'>{successMessage}</div>}
    </form>
  );
};
