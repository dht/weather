import { Autocomplete, TextField } from '@mui/material';
import { useRemoteOptions } from './Search.hooks';
import { Container } from './Search.style';
import { Json } from '../../redux/types';

type SearchProps = {
  onSelect: (item: Json) => void;
};

export const Search = (props: SearchProps) => {
  const [value, options, { onChange, onInputChange }] = useRemoteOptions();

  function onSelect() {
    props.onSelect(value?.item);
  }

  return (
    <Container>
      <Autocomplete
        id='weather-locations'
        sx={{ width: 300 }}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.title)}
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        onSelect={onSelect}
        noOptionsText='No locations'
        onChange={onChange}
        onInputChange={onInputChange}
        renderInput={(params) => <TextField {...params} label='Search a city' fullWidth />}
      />
    </Container>
  );
};
