/** @format */

import { useRef } from "react";
import useCopy from "../../hooks/useCopy";

const Dashboard = () => {
  const { onCopy, copied } = useCopy();

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <p>Dashboard</p>

      <button
        className="bg-red-500"
        onClick={() => onCopy("Dashboard hello world")}
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <input
        type="text"
        ref={ref}
        onChange={(e) => {
          if (ref.current) {
            ref.current.value = e.target.value;
          }
        }}
      />
    </div>
  );
};

export default Dashboard;
