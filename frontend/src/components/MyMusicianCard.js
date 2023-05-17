import { useState } from 'react';
import { SelectGenre } from './Select/SelectGenre';
import { SelectInstrument } from './Select/SelectInstrument';
import { updateCard } from '../utils/updateCard';
import { deleteData } from '../utils/deleteData';

export const MyMusicianCard = ({ musician }) => {
  const {
    cardId,
    firstName,
    lastName,
    instrument,
    genre,
    description,
    image_url,
  } = musician;

  const [isEditing, setIsEditing] = useState(false);

  const [editedData, setEditedData] = useState({
    firstName,
    lastName,
    instrument,
    genre,
    description,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleDelete = () => {
    deleteData(`/musicians/${cardId}`);
    window.location.reload();
  };

  const handleSave = () => {
    const { firstName, lastName, instrument, genre, description } = editedData;
    updateCard(`/musicians/${cardId}`, {
      firstName,
      lastName,
      instrument,
      genre,
      description,
    });
    window.location.reload();
    setIsEditing(false);
  };

  const handleInputChange = (fieldName, value) => {
    setEditedData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <li className='card card-musician'>
      <img src={image_url} alt='musician' />
      {isEditing ? (
        <>
          <input
            type='text'
            placeholder='First name'
            value={editedData.firstName}
            onChange={e => handleInputChange('firstName', e.target.value)}
          />
          <input
            type='text'
            placeholder='Last name'
            value={editedData.lastName}
            onChange={e => handleInputChange('lastName', e.target.value)}
          />
          <SelectInstrument
            handleInputChange={handleInputChange}
            data={editedData}
          />
          <SelectGenre
            handleInputChange={handleInputChange}
            data={editedData}
          />
          <input
            type='text'
            placeholder='Tell something about yourself'
            value={editedData.description}
            onChange={e => handleInputChange('description', e.target.value)}
          />
        </>
      ) : (
        <>
          <div>
            {firstName} {lastName}
          </div>
          <div>{genre}</div>
          <div>
            Instrument:{' '}
            {instrument.map(element => (
              <span className='instrument' key={element}>
                {element}
              </span>
            ))}
          </div>
          <div>{description}</div>
        </>
      )}

      <div className='fav-apply-container'>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </li>
  );
};
