import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!term) return;
    navigate(`/order/${term}`);
    setTerm("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Order"
      />
    </form>
  );
};

export default SearchOrder;
