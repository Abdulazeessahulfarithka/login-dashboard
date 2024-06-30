import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '1') {
      navigate('/portal/createorganisation');
    } else if (value === '2') {
      navigate('/portal/createadmin');
    }
  };

  return (
    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
      <option value="" selected disabled>
        Create
      </option>
      <option value="1">Create Organisation</option>
      <option value="2">Create Admin</option>
    </select>
  );
}

export default Card;
