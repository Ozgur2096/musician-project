import { useState } from 'react';
import { SelectGenre } from './Select/SelectGenre';
import { SelectLookingFor } from './Select/SelectLookingFor';
import { updateCard } from '../utils/updateCard';
import { deleteData } from '../utils/deleteData';
import { MdDelete, MdEdit } from 'react-icons/md';

export const MyBandCard = ({ band }) => {
  const { cardId, name, genre, description, looking_for, image_url } = band;

  const [isEditing, setIsEditing] = useState(false);

  const [editedData, setEditedData] = useState({
    name,
    genre,
    description,
    looking_for,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleDelete = () => {
    deleteData(`https://musician.onrender.com/bands/${cardId}`);
    window.location.reload();
  };

  const handleSave = () => {
    const { name, genre, description, looking_for } = editedData;
    updateCard(`https://musician.onrender.com/bands/${cardId}`, {
      name,
      genre,
      description,
      looking_for,
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
    <li className='card'>
      <img src={image_url} alt='band' />
      {isEditing ? (
        <>
          <input
            type='text'
            placeholder='Band name'
            value={editedData.name}
            onChange={e => handleInputChange('name', e.target.value)}
          />
          <SelectGenre
            handleInputChange={handleInputChange}
            data={editedData}
          />

          <input
            type='text'
            placeholder='Tell something about your band'
            value={editedData.description}
            onChange={e => handleInputChange('description', e.target.value)}
          />
          <SelectLookingFor
            handleInputChange={handleInputChange}
            data={editedData}
          />
        </>
      ) : (
        <>
          <div>{name}</div>
          <div>{genre}</div>
          <div>{description}</div>
          <div>
            Looking For:{' '}
            {looking_for.map(element => (
              <span className='searching-for' key={element}>
                {element}
              </span>
            ))}
          </div>
        </>
      )}

      <div className='fav-apply-container'>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <div className='container-card-bottom'>
            <button title='edit' onClick={handleEdit}>
              <MdEdit />
            </button>
            <button
              title='delete'
              className='button-delete'
              onClick={handleDelete}
            >
              <MdDelete />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
