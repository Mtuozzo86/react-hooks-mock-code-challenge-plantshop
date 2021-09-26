import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const displayPlants = plants.map((item) => {
    return (
      <PlantCard
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
      />
    );
  });

  return <ul className="cards">{displayPlants}</ul>;
}

export default PlantList;
