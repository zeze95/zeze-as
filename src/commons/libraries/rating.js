import { Rate } from "antd";
import { useState } from "react";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default const App = () => {
  const [value, setValue] = useState(3);

  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
};

