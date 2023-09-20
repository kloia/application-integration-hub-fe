import { useState } from "react";
import { COMPANIES_DATA } from "../data";

export default function DataInput() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [result, setResult] = useState(null);

  const fetchData = () => {
    const company1 = COMPANIES_DATA.find((company) => company.id === id1);
    const company2 = COMPANIES_DATA.find((company) => company.id === id2);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="ID1 numarası girin"
        value={id1}
        style={{ padding: "5px", borderRadius: "5px" }}
        onChange={(e) => setId1(e.target.value)}
      />
      <input
        type="number"
        placeholder="ID2 numarası girin"
        value={id2}
        style={{ padding: "5px", borderRadius: "5px" }}
        onChange={(e) => setId2(e.target.value)}
      />
      <button
        onClick={fetchData}
        style={{ padding: "5px", borderRadius: "5px" }}
      >
        Senkronize Et
      </button>
    </div>
  );
}
