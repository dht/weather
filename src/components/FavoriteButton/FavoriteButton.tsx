import { Button } from '@mui/material';
import classnames from 'classnames';
import { Container, Heart } from './FavoriteButton.style';

type FavoriteButtonProps = {
  full?: boolean;
  onClick: () => void;
};

export const FavoriteButton = (props: FavoriteButtonProps) => {
  const { full } = props;

  const className = classnames('material-icons', {
    full,
  });

  return (
    <Container>
      <Heart className={className}>favorite</Heart>
      <Button onClick={props.onClick}>Add to Favorites</Button>
    </Container>
  );
};
