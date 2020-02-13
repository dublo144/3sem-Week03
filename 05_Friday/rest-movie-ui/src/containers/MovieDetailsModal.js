import React from "react";
import { Button, Icon, Image, List, Modal, Rating } from "semantic-ui-react";

function MovieDetailsModal(props) {
  const { movie } = props;

  const handleVotes = type => {
    let url = "";

    if (type === "like") {
      url = "https://madsbrandt.codes/week03-movie/api/movies/like/";
    } else if (type === "dislike") {
      url = "https://madsbrandt.codes/week03-movie/api/movies/dislike/";
    }
    url += movie.id;
    fetch(url, {
      method: "PUT"
    });
  };

  return (
    <Modal
      centered={false}
      closeIcon
      trigger={
        <Button color={"blue"} floated={"right"}>
          Details
        </Button>
      }
    >
      <Modal.Header>
        <Icon name={"list"} />
        {movie.title}
      </Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={movie.imgUrl} />
        <Modal.Description>
          <List size={"huge"}>
            <List.Item>
              <List.Header>Title</List.Header>
              {movie.title}
            </List.Item>
            <List.Item>
              <List.Header>Year</List.Header>
              {movie.year}
            </List.Item>
            <List.Item>
              <List.Header>Director</List.Header>
              {movie.director}
            </List.Item>
            <List.Item>
              <List.Header>Rating</List.Header>
              <Rating
                icon="star"
                size="large"
                maxRating={5}
                rating={movie.rating}
              />
            </List.Item>
          </List>
          <Button.Group>
            <Button negative onClick={() => handleVotes("dislike")}>
              <Icon name={"thumbs down outline"} />
              Dislike
            </Button>
            <Button.Or />
            <Button positive onClick={() => handleVotes("like")}>
              <Icon name={"thumbs up outline"} />
              Like
            </Button>
          </Button.Group>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default MovieDetailsModal;
