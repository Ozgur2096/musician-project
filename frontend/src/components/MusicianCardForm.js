import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MdAddBox, MdClose } from 'react-icons/md';
import { SelectInstrument } from './Select/SelectInstrument';
import { SelectGenre } from './Select/SelectGenre';
import { fetchRandomUser } from '../utils/fetchRandomUser';
import { createOrUpdateCard } from '../utils/createOrUpdateCard';

export const MusicianCardForm = ({ setCreateMusicianCard }) => {
  const { userId } = useContext(GlobalContext);
  const [successMessage, setSuccessMessage] = useState(false);
  const [musicianData, setMusicianData] = useState({
    userId,
    firstName: '',
    lastName: '',
    instrument: [],
    genre: '',
    description: '',
    userApplied: [],
  });

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
      async function createCard() {
        const image_url = await fetchRandomUser();

        const data = { ...musicianData, image_url };
        const response = await createOrUpdateCard(
          'https://musician.onrender.com/musicians',
          data,
          'POST'
        );

        if (response.ok) {
          setSuccessMessage('A new musician card created!');
        } else {
          setSuccessMessage('Something went wrong!');
        }

        setTimeout(() => {
          setCreateMusicianCard(false);
          window.location.reload(); // Refresh the page
        }, 2500);
      }
      createCard();
    }
  };

  return (
    <form className='form-mypage' onSubmit={handleSubmit}>
      <MdClose
        className='button-close'
        onClick={() => {
          setCreateMusicianCard(false);
        }}
      />
      <div className='form-item'>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={musicianData.firstName}
          onChange={e => handleInputChange('firstName', e.target.value)}
        />
        {errors.firstName && (
          <span className='message-error'>{errors.firstName}</span>
        )}
      </div>
      <div className='form-item'>
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={musicianData.lastName}
          onChange={e => handleInputChange('lastName', e.target.value)}
        />
        {errors.lastName && (
          <span className='message-error'>{errors.lastName}</span>
        )}
      </div>
      <div className='form-item'>
        <label htmlFor='instrument'>Instrument:</label>
        <SelectInstrument
          handleInputChange={handleInputChange}
          data={musicianData}
        />
        {errors.instrument && (
          <span className='message-error'>{errors.instrument}</span>
        )}
      </div>

      <div className='form-item'>
        <label htmlFor='genre'>Genre:</label>
        <SelectGenre
          handleInputChange={handleInputChange}
          data={musicianData}
        />
        {errors.genre && <span className='message-error'>{errors.genre}</span>}
      </div>
      <div className='form-item'>
        <label htmlFor='description'>Tell something:</label>
        <textarea
          id='description'
          name='description'
          value={musicianData.description}
          onChange={e => handleInputChange('description', e.target.value)}
        />
        {errors.description && (
          <span className='message-error'>{errors.description}</span>
        )}
      </div>
      <button className='button-add' type='submit'>
        <MdAddBox className='md-icons' />
      </button>
      {successMessage && <div className='message'>{successMessage}</div>}
    </form>
  );
};
