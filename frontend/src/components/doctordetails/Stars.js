import axios from "axios";
import { React, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Starts = (props) => {
           
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(undefined);
  const stars = Array(5).fill(0);
  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHover(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };
  useEffect(() => {
    setRating(props.stars)
  }, [])

  return (
    <div style={styles.container}>

      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              color={
                (hover ||rating) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "4% 0 0 -20%"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Starts;
