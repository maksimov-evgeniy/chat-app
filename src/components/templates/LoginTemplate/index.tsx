import React, { ReactChild, ReactFragment, ReactPortal } from "react";
import "./style.css";
import { Form } from "../../organisms/Form";
import { WelcomeText } from "../../molecules/WelcomeText";

export const LoginTemplate: React.FC = (props) => {
  const child: (ReactChild | ReactFragment | ReactPortal)[] =
    React.Children.toArray(props.children);
  return (
    <React.Fragment>
      <div className="login-template">
        <div className="login-template__login">
          <div className="login-tamplate__login-inner">
            <div className="login-template__wellcome-wrap">{child[0]}</div>
            {child[1]}
          </div>
        </div>
        <div className="login-template__picture"></div>
      </div>
    </React.Fragment>
  );
};
