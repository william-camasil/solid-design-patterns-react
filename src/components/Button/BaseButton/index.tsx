import React from 'react';

/*
SOLID > "O" = Open Closed Principle (Princípio do aberto fechado)
O princípio do aberto fechado sugere que uma classe deve estar aberta para extensões, 
mas fechada para modificações, ou seja, é possível adicionar novas 
funcionalidades sem alterar o código existente, mantendo a estabilidade do sistema. 
Um exemplo é o BaseButton reutilizável, que pode ser estendido com novos estilos ou 
funcionalidades sem modificar seu código original.
*/

type ButtonProps = {
  title: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

const BaseButton = ({ title, onClick, style }: ButtonProps) => {
  return (
    <button style={{ ...defaultStyle, ...style }} onClick={onClick}>
      {title}
    </button>
  );
};

const defaultStyle: React.CSSProperties = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default BaseButton;
