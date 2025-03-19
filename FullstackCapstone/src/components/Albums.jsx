import React, { useState, useEffect } from "react";
// import SingleAlbum from "./SingleAlbum";
// import { useNavigate } from 'react-router-dom';

const Albums = () => {
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await fetch(
          "/api/albums"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch albums");
        }
        const data = await response.json();
        setObjects(data);
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchObjects();
  }, []);

  if (loading) {
    return <div>Loading objects...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // const history = useNavigate();

  // const handleViewDetails = (bookId) => {
  //   setSelectedItem()
  //   history.push(`/${bookId}`);
  // };

  return (
    <div>
      <h2>Browse the 'Sphere!</h2>
      <div>
        <ul className="albums-list">
          {objects.albums.map((object) => (
            <li key={object.id}>
              <img src={object.albumArt} alt={object.name} />
              <br />
              <strong>{object.name}</strong> by {object.artistName}
              {/* <button onClick={() => handleViewDetails(object.id)}>See Details</button> */}
            </li>
          ))}
        </ul>
      </div>
      {/* {selectedItem && <SingleBook object={selectedItem} />} */}
    </div>
  );
};

export default Albums;