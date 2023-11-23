import { Autocomplete, TextField } from '@mui/material';
import { Container } from './Search.style';

const top100Films = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];

export const Search = () => {
  return (
    <Container>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Movie' />}
      />
    </Container>
  );
};
