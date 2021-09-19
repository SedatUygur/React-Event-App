import styled, { css } from 'styled-components';

export const Button = styled.button`
  -webkit-box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  background-color: #535a72;
  color: #ebecef;
  border-radius: 5px;
  border: none;
  padding: 8px 2.5rem;
  margin: auto 5px;
  font-weight: 700;
  cursor: pointer;
  outline: inherit;
  &:focus {
    background-color: #3e4252;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: #3ba935;
      &:focus {
        background-color: #2b7427;
      }
    `}

  ${(props) =>
    props.large &&
    css`
      width: calc(50% - 10px);
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;
