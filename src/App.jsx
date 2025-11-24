import { useState } from "react";
// import "./App.css";
import { data } from "./data";

function App() {
  const [expandedNodes, setExpandedNodes] = useState(new Set());

  function toggleNode(id) {
    setExpandedNodes((prev) => {
      let newNodes = new Set(prev);
      if (newNodes.has(id)) newNodes.delete(id);
      else newNodes.add(id);
      return newNodes;
    });
  }

  function renderTree(node) {
    const isExpanded = expandedNodes.has(node.id);

    return (
      <div>
        <div onClick={() => toggleNode(node.id)}>
          {node.children ? (isExpanded ? "-" : "+") : "•"} {node.name}
        </div>
        <div style={{ marginLeft: "20px" }}>
          {isExpanded && node.children && node.children.map(renderTree)}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        justifyContent: "center",
        // alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.map(renderTree)}
    </div>
  );
}

// return (
//   <>
//     {data.map((i) => (
//       <>
//         // if has children show name and children or else show only name
//         {i.children ? (
//           <div>
//             <span>+</span>
//             <span>{i.name}</span>
//           </div>
//         ) : (
//           <div>{i.name}</div>
//         )}
//       </>
//     ))}
//   </>
// );

export default App;
