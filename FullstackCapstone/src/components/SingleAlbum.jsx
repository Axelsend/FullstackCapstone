import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleAlbum() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `http://localhost:3000/api/albums/${albumId}`
        );
        const data = await response.json();
        setAlbum(data.singleAlbum);
      } catch (error) {
        console.error("Error fetching album details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumDetails();
  }, [albumId]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!album) {
    return <p>Album not found</p>;
  }

  const handleBackToAlbums = () => {
    history("/");
  };

  return (
    <div className="item-details">
      <button onClick={() => handleBackToAlbums()}>Back to All Albums</button>
      <h2>{album.name}</h2>
      <a href={album.spotifylink} target="_blank">
        Spotify Link
      </a>
      <h3>By: {album.artistname}</h3>
      <h5>Release Year: {album.releaseyear}</h5>
      <h5>Genre: {album.genre}</h5>
      <img
        src={`../src/albumimages/${album.albumart}`}
        alt={album.name}
        width="300px"
      />
      <ul>
        <h3>Tracklist</h3>
        <li>{album.song1}</li>
        <li>{album.song2}</li>
        <li>{album.song3}</li>
        <li>{album.song4}</li>
        <li>{album.song5}</li>
        <li>{album.song6}</li>
        <li>{album.song7}</li>
        <li>{album.song8}</li>
        <li>{album.song9}</li>
        <li>{album.song10}</li>
        <li>{album.song11}</li>
        <li>{album.song12}</li>
        <li>{album.song13}</li>
        <li>{album.song14}</li>
        <li>{album.song15}</li>
      </ul>
    </div>
  );
}

export default SingleAlbum;
