import { useFilterStore } from "../stores/apiStore";

export default function ListFilter() {
  const { filter, setFilter } = useFilterStore();

  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={{
        width: "20rem",
        padding: "0.5rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        borderRadius: "5px",
      }}
    >
      <option value="all">All</option>
      <option value="added">Added</option>
      <option value="deleted">Deleted</option>
      <option value="updated">Updated</option>
    </select>
  );
}
