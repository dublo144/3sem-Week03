import React from "react";
import { Card, Image, Rating } from "semantic-ui-react";
import MovieDetailsModal from "../../containers/MovieDetailsModal";

function Movie(props) {
  const { movie } = props;

  return (
    <Card>
      <Image src={movie.imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>
          <span className={"date"}>{movie.year}</span>
        </Card.Meta>
        <Card.Description>{movie.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating icon="star" size="large" maxRating={5} rating={movie.rating} />
        <MovieDetailsModal movie={movie} />
      </Card.Content>
    </Card>
  );
}

export default Movie;
