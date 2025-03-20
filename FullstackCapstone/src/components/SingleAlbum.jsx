import React, { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SingleAlbum() {

  const { albumId } = useParams();
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const history = useNavigate()

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      setLoading(true);

      try {
        const response = await fetch(`http://localhost:3000/api/albums/${albumId}`);
        const data = await response.json();
        setAlbum(data.singleAlbum);
      } catch (error) {
        console.error('Error fetching album details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumDetails();
  }, [albumId]);
  console.log("Before Loading", album)
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
      <h2>{album.name}</h2>
      <h3>By: {album.artistname}</h3>
      <img src={`../src/albumimages/${album.albumart}`} alt={album.name} width="300px"/>
      <button onClick={() => handleBackToAlbums()}>Back to All Albums</button>
    </div>

  );
};

export default SingleAlbum;