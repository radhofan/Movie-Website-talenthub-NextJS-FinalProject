import React from "react";

function DetailCat({ params }: { params: { id: string } }) {
  return <div>DetailCat {params.id}</div>;
}

export default DetailCat;
