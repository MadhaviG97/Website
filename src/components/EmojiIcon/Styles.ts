import styled from 'styled-components';

type Props = {
  color: string;
  emojiSize: number;
  marginBottom: number;
  marginRight: number;
  size: number;
  transparentBackground: boolean;
};

export const Container = styled.div<Props>`
  align-items: center;
  background-color: ${(props) => (props.transparentBackground ? 'transparent' : props.color)};
  border-radius: 50%;
  display: flex;
  font-size: ${(props) => props.emojiSize}px;
  height: ${(props) => props.size}px;
  justify-content: center;
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-right: ${(props) => props.marginRight}px;
  width: ${(props) => props.size}px;
`;
