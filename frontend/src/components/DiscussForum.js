import Description from "../styles/Description/index";
import Post from "../styles/Post/index";
import React, { useState } from "react";
import "../styles/Description";

export default function DiscussForum() {
  const [data, setData] = useState([]);

  const addData = (disData) => {
    setData([...data, disData]);
  };
  return (
    <div className="container">
      <div className="main">
        <Description addData={addData} />
        {data.map((data) => {
          return <Post item={data} />;
        })}
      </div>
    </div>
  );
}
