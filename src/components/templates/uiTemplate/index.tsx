import React from "react";
import "./style.css";

import { InputFull } from "../../molecules/InputFull";
import { Button } from "../../atoms/Button";

export const UITemplate: React.FC = () => {
  return (
    <React.Fragment>
      <div className="ui-template">
        <div className="ui-template__top"></div>
        <div className="ui-template__bottom">
          <Button buttonText="Log In" onClick={() => console.log("Hello!")} />
          <Button buttonText="Log In" hover={true} />
          <Button buttonText="Log In" active={true} />
          <Button buttonText="Log In" disabled={true} />
        </div>
      </div>
    </React.Fragment>
  );
};
