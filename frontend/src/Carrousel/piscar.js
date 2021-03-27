import { keyframes } from 'styled-components';

export const Piscar = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.8;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
    display: flex;
  }
`;