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
        className="w-28 rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-500 placeholder:font-semibold focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
