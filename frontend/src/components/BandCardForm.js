import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MdAddBox, MdClose } from 'react-icons/md';
import { SelectGenre } from './Select/SelectGenre';
import { SelectLookingFor } from './Select/SelectLookingFor';
import { fetchRandomUser } from '../utils/fetchRandomUser';
import { createOrUpdateCard } from '../utils/createOrUpdateCard';

export const BandCardForm = ({ setCreateBandCard }) => {
  const { userId } = useContext(GlobalContext);
  const [successMessage, setSuccessMessage] = useState(false);

  const [bandData, setBandData] = useState({
    userId,
    name: '',
    genre: '',
    description: '',
    looking_for: [],
    userApplied: [],
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { name, genre, description, looking_for } = bandData;
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

    if (!looking_for.length > 0) {
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

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      async function createCard() {
        const image_url = await fetchRandomUser();
        const data = { ...bandData, image_url };
        const response = await createOrUpdateCard(
          'https://musician.onrender.com/bands',
          data,
          'POST'
        );

        if (response.ok) {
          setSuccessMessage('A new band card created!');
        } else {
          setSuccessMessage('Something went wrong!');
        }

        setTimeout(() => {
          setCreateBandCard(false);
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
          setCreateBandCard(false);
        }}
      />
      <div className='form-item'>
        <label htmlFor='name'>Band Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={bandData.name}
          onChange={e => handleInputChange('name', e.target.value)}
        />
        {errors.name && <span className='message-error'>{errors.name}</span>}
      </div>
      <div className='form-item'>
        <label htmlFor='genre'>Genre:</label>
        <SelectGenre handleInputChange={handleInputChange} data={bandData} />
        {errors.genre && <span className='message-error'>{errors.genre}</span>}
      </div>
      <div className='form-item'>
        <label htmlFor='description'>Tell something:</label>
        <textarea
          id='description'
          name='description'
          value={bandData.description}
          onChange={e => handleInputChange('description', e.target.value)}
        />
        {errors.description && (
          <span className='message-error'>{errors.description}</span>
        )}
      </div>
      <div className='form-item'>
        <label htmlFor='looking_for'>Looking For:</label>
        <SelectLookingFor
          handleInputChange={handleInputChange}
          data={bandData}
        />
        {errors.looking_for && (
          <span className='message-error'>{errors.looking_for}</span>
        )}
      </div>
      <button className='button-add' type='submit'>
        <MdAddBox className='md-icons' />
      </button>
      {successMessage && <div className='message'>{successMessage}</div>}
    </form>
  );
};
