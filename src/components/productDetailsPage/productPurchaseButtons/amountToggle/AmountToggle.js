import { FaMinus, FaPlus } from "react-icons/fa";
import "./AmountToggle.css";

export default function AmountToggle ({ amount, decrease, increase }) {
  return (
      <div className="amount-toggle">
        <button className="decrease-button" onClick={()=>decrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button className="increase-button" onClick={()=>increase()}>
          <FaPlus />
        </button>
      </div>
  );
};
