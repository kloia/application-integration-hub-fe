import { useState, useEffect } from "react";
const mockData = [
  {
    id: "1",
    add: {
      label: "abc",
    },
    delete: {
      matchSpecification: "null",
      boundaryScope: "ALL",
    },
    update: {
      type: "NOTEXPRESSION",
      logicalOperator: "OR",
      stringValue: "amd64",
      operator: "NOT_EQUAL",
      scope: "EXCLUDE_ALL_DOWNSTREAM",
      accessType: "READ",
    },
  },
  {
    id: "2",
    add: {
      matchSpecification: "null",
      boundaryScope: "ALL",
    },
    delete: {
      label: "abc",
    },
    update: {
      type: "EXPRESSION",
      logicalOperator: "AND",
      stringValue: "amd640",
      operator: "EQUAL",
      scope: "INCLUDE_ALL_DOWNSTREAM",
      accessType: "READ-WRITE",
    },
  },
];
function DataTable() {
  const [syncData, setSyncData] = useState([]);

  const fetchData = () => {
    // Bu kısımda mock veriyi gerçek bir API'den alıyormuş gibi düşünebilirsiniz.
    setSyncData(mockData);
  };

  useEffect(() => {
    fetchData(); // Sayfa yüklendiğinde veriyi çek
  }, []);

  return (
    <div>
      <h1>Senkronize</h1>
      <button onClick={fetchData}>Senkronize Et</button>
      <h2>Senkronize Edilen Veriler</h2>
      <ul>
        {syncData.map((item) => (
          <li key={item.id}>
            <p>id: {item.id}</p>
            <p>add: {item.add.label}</p>
            <p>delete: {item.delete.label}</p>
            <p>update: {item.update.stringValue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataTable;

// import React, { useState } from 'react';

// const mockData = [
//   {
//     "id": "1",
//     "add": {
//       "label": "abc"
//     },
//     "delete": {
//       "matchSpecification": "null",
//       "boundaryScope": "ALL"
//     },
//     "update": [
//       {
//         "type": "NOTEXPRESSION",
//         "logicalOperator": "OR",
//         "stringValue": "amd64",
//         "operator": "NOT_EQUAL",
//         "scope": "EXCLUDE_ALL_DOWNSTREAM",
//         "accessType": "READ"
//       },
//       {
//         "type": "EXPRESSION",
//         "logicalOperator": "AND",
//         "stringValue": "another change",
//         "operator": "EQUAL",
//         "scope": "INCLUDE_ALL_DOWNSTREAM",
//         "accessType": "READ-WRITE"
//       }
//     ]
//   },
//   {
//     "id": "2",
//     "add": {
//       "matchSpecification": "null",
//       "boundaryScope": "ALL"
//     },
//     "delete": {
//       "label": "abc"
//     },
//     "update": [
//       {
//         "type": "EXPRESSION",
//         "logicalOperator": "AND",
//         "stringValue": "yet another change",
//         "operator": "EQUAL",
//         "scope": "INCLUDE_ALL_DOWNSTREAM",
//         "accessType": "READ-WRITE"
//       }
//     ]
//   }
// ];

// function SyncComponent() {
//   const [syncData, setSyncData] = useState([]);

//   const fetchData = () => {
//     // Bu kısımda mock veriyi gerçek bir API'den alıyormuş gibi düşünebilirsiniz.
//     setSyncData(mockData);
//   };

//   return (
//     <div>
//       <h1>Senkronizasyon Komponenti</h1>
//       <button onClick={fetchData}>
//         Veriyi Al
//       </button>

//       <h2>Senkronize Edilen Veriler</h2>
//       <ul>
//         {syncData.map((item) => (
//           <li key={item.id}>
//             <h3>ID: {item.id}</h3>
//             <p>Eklenen: {item.add.label || "N/A"}</p>
//             <p>Silinen: {item.delete.label || "N/A"}</p>
//             <p>Güncellenen:</p>
//             <ul>
//               {item.update.map((updateItem, index) => (
//                 <li key={index}>
//                   <p>Type: {updateItem.type}</p>
//                   <p>StringValue: {updateItem.stringValue}</p>
//                   {/* Diğer update özelliklerini ekleyin */}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SyncComponent;
