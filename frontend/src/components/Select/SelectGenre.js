import Select from 'react-select';

export const SelectGenre = ({ handleInputChange, data }) => {
  const genreOptions = [
    { value: 'rock', label: 'Rock' },
    { value: 'pop', label: 'Pop' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'hip-hop', label: 'Hip Hop' },
    { value: 'country', label: 'Country' },
    { value: 'alternative', label: 'Alternative' },
    { value: 'classical', label: 'Classical' },
  ];
  return (
    <Select
      id='genre'
      name='genre'
      options={genreOptions}
      value={genreOptions.find(option => option.value === data.genre)}
      onChange={selectedOption =>
        handleInputChange('genre', selectedOption.value)
      }
    />
  );
};
