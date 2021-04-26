import React from "react";

const ListGroup = (props) => {
  const {
    genres,
    textProperty,
    onItemSelect,
    valueProperty,
    selectedGenre,
  } = props;
  return (
    <ul className="list-group">
      <li className="list-group-item" aria-current="true">
        All Genres
      </li>

      {genres.map((genre) => (
        <li
          onClick={() => onItemSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
