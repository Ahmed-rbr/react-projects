import React, { useState } from "react";
import Data from "./Data";

const TreeRec = ({ lvl = 0, parentKey = "", data }) => {
  const [isOpen, setOpen] = useState({});

  const handleOpen = (id) => {
    setOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    data &&
    data.length > 0 &&
    data.map((node, index) => {
      const currentKey = parentKey ? `${parentKey}-${index}` : `p-${index}`;
      const hasChildren = node.children && node.children.length > 0;

      return (
        <div key={currentKey}>
          <div
            onClick={() => hasChildren && handleOpen(currentKey)}
            style={{ marginLeft: `${lvl * 16}px` }}
            className={`cursor-pointer ${!hasChildren ? "opacity-50" : ""}`}
          >
            {node.label} {hasChildren ? (isOpen[currentKey] ? "-" : "+") : "-"}
          </div>

          {hasChildren && isOpen[currentKey] && (
            <TreeRec
              data={node.children}
              lvl={lvl + 1}
              parentKey={currentKey}
            />
          )}
        </div>
      );
    })
  );
};

const Tree = () => {
  return (
    <div className="h-screen flex w-1/5 flex-col bg-blue-300 p-2">
      <TreeRec data={Data} />
    </div>
  );
};

export default Tree;
