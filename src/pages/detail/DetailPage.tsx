import React from "react";
import { useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { touristUserId } = useParams();
  return <h1>旅游路线详情页, 路线id: {touristUserId}</h1>;
};
