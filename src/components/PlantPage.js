import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => setPlants(data));
  }, []);

  const [plants, setPlants] = useState([]);
  const [searched, setSearched] = useState("");

  function handleForm(formData) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      const setNewPlant = [...plants, formData];
      setPlants(setNewPlant);
    });
  }

  const filtered = plants.filter((item) => {
    return item.name.toLowerCase().includes(searched.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm handleForm={handleForm} />
      <Search handleSearch={setSearched} />
      <PlantList plants={filtered} />
    </main>
  );
}

export default PlantPage;
