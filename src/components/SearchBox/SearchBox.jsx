import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={css.SearchBox}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={css.input}
        />
      </label>
    </div>
  );
}
