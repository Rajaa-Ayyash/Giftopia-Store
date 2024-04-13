import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./ProductRating.css"; 

export default function ProductRating ({ rating, feedbacksNumber }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="icon" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <div className="product-rating">
      <div className="rating">
        <div>{ratingStar} </div>
        <h4>{rating}Star Rating</h4>
        <p>({feedbacksNumber} User feedback)</p>
      </div>
    </div>
  );
};

