import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import NewMovieModal from "./newMovieModal/NewMovieModal";

function NavigationBar() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary>
      <Menu.Item
        name={"Home"}
        active={activeItem === "Home"}
        onClick={handleItemClick}
      >
        Home
      </Menu.Item>

      <Menu.Item
        name={"Movies"}
        active={activeItem === "Movies"}
        onClick={handleItemClick}
      >
        Movies
      </Menu.Item>

      <Menu.Item position={"right"}>
        <NewMovieModal />
      </Menu.Item>
    </Menu>
  );
}

export default NavigationBar;
