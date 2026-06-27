/** @format */

import { memo, useState } from "react";

const ChildComponent = memo(({ name }: { name: string }) => {
  return <p>Chil component {name}</p>;
});

const MemoPage = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hello");

  const onCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Count : {count}</p>

      <button className="bg-blue-500" onClick={onCount}>
        add
      </button>

      <ChildComponent name={name} />
    </div>
  );
};

export default MemoPage;
