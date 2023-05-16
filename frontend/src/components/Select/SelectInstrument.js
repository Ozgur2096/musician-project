import Select from 'react-select';

export const SelectInstrument = ({ handleInputChange, data }) => {
  const instrumentOptions = [
    { value: 'guitar', label: 'Guitar' },
    { value: 'piano', label: 'Piano' },
    { value: 'drums', label: 'Drums' },
    { value: 'bass', label: 'Bass' },
    { value: 'violin', label: 'Violin' },
    { value: 'saxophone', label: 'Saxophone' },
  ];

  const handleChange = selectedOptions => {
    const selectedValues = selectedOptions.map(option => option.value);
    handleInputChange('instrument', selectedValues);
  };

  return (
    <Select
      id='instrument'
      name='instrument'
      options={instrumentOptions}
      isMulti
      value={instrumentOptions.filter(option =>
        data.instrument.includes(option.value)
      )}
      onChange={handleChange}
    />
  );
};
