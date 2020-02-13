import React from "react";
import { Card, Dimmer, Loader } from "semantic-ui-react";
import Movie from "./Movie";

function MovieList(props) {
  const { data, isLoading } = props;

  return (
    <Card.Group itemsPerRow={3}>
      {isLoading && (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      )}

      {data && data.map((movie, index) => <Movie movie={movie} key={index} />)}
    </Card.Group>
  );
}

export default MovieList;
