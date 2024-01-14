import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "inline-block rounded-full bg-blue-600 font-semibold uppercase tracking-wide text-slate-200 transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 py-2.5 text-xs",
    secondary:
      "inline-block rounded-full border-2 border-slate-400 font-semibold uppercase tracking-wide text-slate-400 transition-colors duration-300 hover:bg-slate-400 hover:text-slate-800 focus:bg-slate-400 focus:text-slate-800 focus:outline-none focus:ring focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
