import { useState } from "react";
import { Typography } from "@mui/material";
import { useFilterStore } from "../stores/apiStore";

export default function CompanyList() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const { filter } = useFilterStore();

  const handleGetResults = async () => {
    try {
      const url =
        "http://application-integration-hub-1-env.eba-j9mt9jac.eu-north-1.elasticbeanstalk.com/api/compareIds";
      const apiToken = "oxL0Y-iGT7WO-qR1SCqXuA";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          id1: id1,
          id2: id2,
        }),
      });

      if (!response.ok) {
        throw new Error("API isteği başarısız.");
      }

      const data = await response.text();
      const arr = data.split("}\n{");
      const res1 = JSON.parse(arr[0] + "}");
      const res2 = JSON.parse("{" + arr[1]);

      setResult1(res1);
      setResult2(res2);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
      // Kullanıcıya hata mesajını göstermek için uygun bir yöntem kullanabilirsiniz.
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <input
          type="text"
          placeholder="ID 1"
          value={id1}
          onChange={(e) => setId1(e.target.value)}
          style={{ textAlign: "center" }}
        />
        <input
          type="text"
          placeholder="ID 2"
          value={id2}
          onChange={(e) => setId2(e.target.value)}
          style={{ textAlign: "center" }}
        />
        <button onClick={handleGetResults}>Getir</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: "left",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {result1 && (
          <div>
            <Typography sx={{ fontSize: "24px" }}>ID {id1} Verileri</Typography>
            {renderCompanyData(result1, filter)}
          </div>
        )}
        {result2 && (
          <div>
            <Typography sx={{ fontSize: "24px" }}>ID {id2} Verileri</Typography>
            {renderCompanyData(result2, filter)}
          </div>
        )}
      </div>
    </div>
  );
}

const mapCompany = (item) => ({
  id: item.id,
  add: Object.keys(item.add).map((key) => ({
    key,
    value: typeof item.add[key] === "string" ? item.add[key] : "",
  })),
  // elements:Object.keys(item.elements).map((key)=>({
  //     key,
  //     value:typeof item.elements[key] ==="string"?item.elements[key]:""
  // })),
  delete: Object.keys(item.delete).map((key) => ({
    key,
    value: typeof item.delete[key] === "string" ? item.delete[key] : "",
  })),
  update: Object.keys(item.update).map((key) => ({
    key,
    value: typeof item.update[key] === "string" ? item.update[key] : "",
  })),
});

function renderCompanyData(company, filter) {
  const { add, delete: deletes, update } = mapCompany(company);

  return (
    <div>
      {(filter === "all" || filter === "added") && add && (
        <div>
          <div style={{ fontWeight: "bold", fontSize: "24px" }}>ADDEDS</div>
          {renderItems(add)}
        </div>
      )}
      {(filter === "all" || filter === "deleted") && deletes && (
        <div>
          <div style={{ fontWeight: "bold", fontSize: "24px" }}>DELETEDS</div>
          {renderItems(deletes)}
        </div>
      )}
      {/* {(filter === "elements" || filter === "elements") && elements && (
        <div>
          <div style={{fontWeight:"bold",fontSize:"24px"}}>Elements</div>
          {renderItems(elements)}
        </div>
      )} */}
      {(filter === "all" || filter === "updated") && update && (
        <div>
          <div style={{ fontWeight: "bold", fontSize: "24px" }}>UPDATEDS</div>
          {renderItems(update)}
        </div>
      )}
    </div>
  );
}

function renderItems(items) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div style={{ color: "red" }}>{item.key}:</div> {item.value}
        </div>
      ))}
    </div>
  );
}

// import { useState } from "react";
// import { Typography } from "@mui/material";
// import { COMPANIES_DATA } from "../data";
// import { useFilterStore } from "../stores/apiStore";

// export default function CompanyList() {
//   const [id1, setId1] = useState("");
//   const [id2, setId2] = useState("");
//   const [result1, setResult1] = useState(null);
//   const [result2, setResult2] = useState(null);
//   const { filter } = useFilterStore();

//   const handleGetResults = () => {
//     const company1 = COMPANIES_DATA.find((company) => company.id === id1);
//     const company2 = COMPANIES_DATA.find((company) => company.id === id2);

//     if (company1) {
//       setResult1(company1);
//     } else {
//       setResult1(null);
//     }

//     if (company2) {
//       setResult2(company2);
//     } else {
//       setResult2(null);
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "10px",
//         }}
//       >
//         <input
//           type="number"
//           placeholder="ID 1"
//           value={id1}
//           onChange={(e) => setId1(e.target.value)}
//           style={{ textAlign: "center" }}
//         />
//         <input
//           type="number"
//           placeholder="ID 2"
//           value={id2}
//           onChange={(e) => setId2(e.target.value)}
//           style={{ textAlign: "center" }}
//         />
//         <button onClick={handleGetResults}>Getir</button>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           flexWrap: "wrap",
//           gap: "20px",
//           textAlign: "left",
//           justifyContent: "center",

//           width: "100%",
//         }}
//       >
//         {result1 && (
//           <div>
//             <Typography sx={{ fontSize: "24px" }}>ID {id1} Verileri</Typography>
//             {renderCompanyData(result1, filter)}
//           </div>
//         )}
//         {result2 && (
//           <div>
//             <Typography sx={{ fontSize: "24px" }}>ID {id2} Verileri</Typography>
//             {renderCompanyData(result2, filter)}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function renderCompanyData(company, filter) {
//   const { add, delete: deletes, update } = company;

//   return (
//     <div>
//       {(filter === "all" || filter === "added") && (
//         <div>
//           {add && (
//             <div>
//               <div style={{ fontWeight: "bold", fontSize: "24px" }}>ADDEDS</div>
//               {renderItems(add)}
//             </div>
//           )}
//         </div>
//       )}
//       {(filter === "all" || filter === "deleted") && (
//         <div>
//           {deletes && (
//             <div>
//               <div style={{ fontWeight: "bold", fontSize: "24px" }}>
//                 DELETEDS
//               </div>
//               {renderItems(deletes)}
//             </div>
//           )}
//         </div>
//       )}
//       {(filter === "all" || filter === "updated") && (
//         <div>
//           {update && (
//             <div>
//               <div style={{ fontWeight: "bold", fontSize: "24px" }}>
//                 UPDATEDS
//               </div>
//               {renderItems(update)}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// function renderItems(items) {
//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           <div style={{ color: "red" }}>{item.key}:</div> {item.value}
//         </div>
//       ))}
//     </div>
//   );
// }
