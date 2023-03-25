import React from "react";
import { Typography, Divider } from "antd";
import { FilterTag } from "./FilterTag";

interface PropsType {
  title: string;
  tags: string[];
}

export const Filter: React.FC<PropsType> = ({ title, tags }) => {
  return (
    <div>
      <Typography.Text
        style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}
      >
        {title}:{" "}
      </Typography.Text>
      {tags.map((tag, index) => {
        if (index === tags.length - 1)
          return <FilterTag key={`filter${index}`}>{tag}</FilterTag>;
        return (
          <span key={`filter${index}`}>
            <FilterTag>{tag}</FilterTag>
            <Divider type="vertical" />
          </span>
        );
      })}
    </div>
  );
};
