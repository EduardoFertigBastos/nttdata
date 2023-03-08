import React, { useEffect, useState } from 'react';


import Movie from 'interface/Movie';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { addMovie, favMoviesStore, removeMovie } from 'Store/favMoviesStore';

import { useSettings } from 'hooks/settings';


import { Actor, Container, Description, FavoriteButton, Information, Poster, Review, Title } from './styles';


interface Props {
  movie: Movie
};

const CardMovie: React.FC<Props> = ({ movie }) => {
  
  const [favorite, setFavorite] = useState(
    favMoviesStore.getState().movies.includes(movie.imdbID)
  );
    
  const handleFavorite = () => {

    if (favMoviesStore.getState().movies.includes(movie.imdbID)) {
      setFavorite(false)
      favMoviesStore.dispatch(removeMovie(movie.imdbID))
      return;
    }
    
    setFavorite(true)
    favMoviesStore.dispatch(addMovie(movie.imdbID))
  }

  const calcStars = (rating: number) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (rating - 2 >= 0) {
        stars.push(<BsStarFill />);
        rating -= 2;
      } else if (rating - 1 >= 0) {
        stars.push(<BsStarHalf />);
        rating -= 1;
      } else {
        stars.push(<BsStar />);
      }
    }

    return stars;
  }


  return (
    <Container>
      <Information>
        <Title>
          {movie.Title}
        </Title>
        <Description>
          {movie.Plot}
        </Description>

        <Actor>
          <span>Actores</span> {movie.Actors}
        </Actor>
        <Review>
          <span>Review</span>
          {
            calcStars(Number(movie.imdbRating)).map((star, index) => (
              <span key={index}>{star}</span>
            ))
          }
        </Review>

        <FavoriteButton onClick={handleFavorite}>
          Favorite 
          {
            favMoviesStore.getState().movies.includes(movie.imdbID)
             ? <AiFillHeart style={{ color: 'red' }}/>
             : <AiOutlineHeart />
          }
        </FavoriteButton>
      </Information>
      <Poster>
        <img src={movie.Poster} alt={movie.Title} />
      </Poster>
    </Container>
  );
}

export default CardMovie;
