import Select from 'react-select';

export const SelectLookingFor = ({ handleInputChange, data }) => {
  const lookingForOptions = [
    { value: 'guitarist', label: 'Guitarist' },
    { value: 'bassist', label: 'Bassist' },
    { value: 'drummer', label: 'Drummer' },
    { value: 'keyboardist', label: 'Keyboardist' },
    { value: 'violinists', label: 'Violinists' },
    { value: 'saxophonist', label: 'Saxophonist' },
  ];

  const handleChange = selectedOptions => {
    const selectedValues = selectedOptions.map(option => option.value);
    handleInputChange('looking_for', selectedValues);
  };

  return (
    <Select
      id='looking_for'
      name='looking_for'
      options={lookingForOptions}
      isMulti
      value={lookingForOptions.filter(option =>
        data.looking_for.includes(option.value)
      )}
      onChange={handleChange}
    />
  );
};
