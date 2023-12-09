import React from "react";

type TUserProfilePageParams = {
  params: {
    id: string;
  };
};

const USerProfilePage: React.FC<TUserProfilePageParams> = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Your profile id: {params.id}</h1>
    </div>
  );
};

export default USerProfilePage;
