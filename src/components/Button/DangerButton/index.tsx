import React from "react";
import BaseButton from "../BaseButton";

// Extende o BaseButton, alterando apenas seu estilo para ser um botão de perigo

type DangerButtonProps = {
  title: string;
  onClick: () => void;
}

const DangerButton = ({ title, onClick }: DangerButtonProps) => {
  return <BaseButton title={title} onClick={onClick} style={dangerStyle} />;
};

const dangerStyle: React.CSSProperties = {
  backgroundColor: "red",
};

export default DangerButton;
