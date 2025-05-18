import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button onClick={handleDelete} className={css.deleteButton}>
        Delete
      </button>
    </li>
  );
}
