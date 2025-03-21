import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/albums");
        if (!response.ok) {
          throw new Error("Failed to fetch albums");
        }
        const data = await response.json();
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <div>Loading albums...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleViewDetails = (albumId) => {
    const album = albums.find((album) => album.id === albumId);
    navigate(`/${albumId}`);
  };

  return (
    <div className="album">
      <h2>Browse the Sphere!</h2>
      <div>
        <ul className="albums-list">
          {albums.map((object) => (
            <li key={object.id}>
              <img
                src={`../src/albumimages/${object.albumart}`}
                alt={object.name}
                width="250px"
              />
              <br />
              <strong1>{object.name}</strong1> 
              <strong2>by {object.artistname}</strong2>
              <button onClick={() => handleViewDetails(object.id)}>
                See Details
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Albums;