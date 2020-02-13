import React, { useState } from "react";
import { Button, Divider, Form, Icon, Modal } from "semantic-ui-react";

function NewMovieModal() {
  const [newMovie, setNewMovie] = useState({
    imgUrl: "",
    title: "",
    year: "",
    director: "",
    votes: 0
  });

  const handleChange = (e, { name, value }) =>
    setNewMovie({ ...newMovie, [name]: value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("week03-movie/api/movies/create", {
      method: "POST",
      body: JSON.stringify([newMovie]),
      headers: {
        "Content-Type": "application/json"
      }
    });
    setNewMovie({ imgUrl: "", title: "", year: "", director: "", votes: 0 });
  };

  return (
    <Modal
      centered={false}
      closeIcon
      trigger={
        <Button color={"blue"} as={"a"} icon labelPosition={"left"}>
          <Icon name={"plus"} />
          Add Movie
        </Button>
      }
    >
      <Modal.Header>
        <Icon name={"plus square"} />
        New Movie
      </Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths={"equal"}>
            <Form.Input
              name={"title"}
              value={newMovie.title}
              fluid
              label={"Title"}
              placeholder={"Title"}
              onChange={handleChange}
            />
            <Form.Input
              name={"year"}
              value={newMovie.year}
              fluid
              label={"Year"}
              placeholder={"Year"}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group widths={"equal"}>
            <Form.Input
              name={"imgUrl"}
              value={newMovie.imgUrl}
              fluid
              label={"Image URL"}
              placeholder={"Image URL"}
              onChange={handleChange}
            />
            <Form.Input
              name={"director"}
              value={newMovie.director}
              fluid
              label={"Director"}
              placeholder={"Director"}
              onChange={handleChange}
            />
          </Form.Group>
          <Divider />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default NewMovieModal;
