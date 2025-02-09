import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    name: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulated API call (replace with real API)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const result = await response.json();
        setData({
          name: result.name,
          description: 'No detailed description available',
        });
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="detail-view">
      <button className="close-button" onClick={() => navigate(-1)}>
        Close
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{data?.name}</h2>
          <p>{data?.description}</p>
        </div>
      )}
    </div>
  );
};

export default DetailView;
