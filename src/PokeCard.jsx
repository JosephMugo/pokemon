import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './PokeCard.css';

const useStyles = makeStyles({
  root: {
    display: 'inline-block', 
    width: 250, 
    margin: 32,
    '&:hover': {
      boxShadow: 'inset 0 0 10px #000000'
    }
  }
});

const PokeCard = ({ pokemonJson }) => {
  const classes = useStyles();
  const firstToUpper = (string) => {
    return string[0].toUpperCase() + string.substring(1)
  }
  const name = firstToUpper(pokemonJson.name)
  const type = firstToUpper(pokemonJson.types[0].type.name)
  const moves = pokemonJson.moves.slice(0, 4)
    .map(move => {
      return <li>{move.move.name}</li>
    });
  const imgSrc = pokemonJson.sprites.back_default;
  const stat = pokemonJson.stats[0].base_stat;

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <div className='headerContainer'>
          <Typography variant='h5' component='h5'>
            {name}
          </Typography>
          <Typography variant='h5' component='h5'>
            {stat}
          </Typography>
        </div>
        <div className="imgContainer">
          <img alt="Pokemon" src={imgSrc} />
          <div className='type'>
            {type}
          </div>
        </div>
        <Typography variant='p' componenet='p'>Moves</Typography>
        <ul className="ulContainer">
          {moves}
        </ul>
      </CardContent>
    </Card>
  )
}
export default PokeCard