import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { useState } from "react";

function Rating(props) {
  const [rating, setRating] = useState(props.rating)

  return (
    <div  style={styles.starStyle}>  
      <h1>Rating: {rating}</h1>
      {rating >= 1 ? (
        <IoIosStar onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(1)} />
      )}
      {rating >= 2 ? (
        <IoIosStar onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(2)} />
      )}
      {rating >= 3 ? (
        <IoIosStar onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(3)} />
      )}
      {rating >= 4 ? (
        <IoIosStar onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(4)} />

      )}
      {rating >= 5 ? (
        <IoIosStar onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(5)} />
      )}
    </div>
  );
}
export default Rating;

const styles = {
  starStyle: {
    color: 'orange'
  }
}
