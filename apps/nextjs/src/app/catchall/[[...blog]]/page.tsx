import React from "react";
type TCatchAllRoutes = {
  params: {
    slug: string;
  };
};

const CatchAllRoutes: React.FC<TCatchAllRoutes> = ({ params }) => {
  console.log(params);

  return <div>
    <h1>Catch ALL Routes</h1>
  </div>;
};

export default CatchAllRoutes;
