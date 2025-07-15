import React from "react";

import { CardWrapper } from "./cardWrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div></div>
    </CardWrapper>
  );
};

export default ErrorCard;
