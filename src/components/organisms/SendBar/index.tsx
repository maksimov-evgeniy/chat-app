import React from "react";
import "./style.css";
import { Textarea } from "../../atoms/Textarea";
import { ButtonClip } from "../../atoms/ButtonClip";
import { ButtonLetter } from "../../atoms/ButtonLetter";

export const SendBar: React.FC = () => {
  return (
    <form className="send-bar">
      <ButtonClip className="send-bar__button-clip" />
      <Textarea placeholder="Write something..." />
      <ButtonLetter className="send-bar__button-letter" />
    </form>
  );
};
