import React, { useState } from "react";
import { Tag } from "antd";

interface PropsType {
  onSelect?: () => void;
  children?: React.ReactNode;
}

export const FilterTag: React.FC<PropsType> = (props) => {
  // 点击切换选中效果
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <Tag.CheckableTag
      checked={checked}
      onChange={(checked) => handleChange(checked)}
      {...props}
    />
  );
};
