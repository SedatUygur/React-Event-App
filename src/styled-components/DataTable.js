import styled, { css } from 'styled-components';

export const DataTable = styled.div`
  width: 100%;
  padding: 5px;
  margin-top: 4.5rem;
  overflow: scroll;
  font-size: 0.9rem;
`;

export const DataTableHead = styled.div`
  height: 4.5rem;
  width: 40%;
  background-color: #ebecef;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Select = styled.select`
  -webkit-box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  background-color: #ebecef;
  color: #535a72;
  border-radius: 5px;
  border: 2px solid #535a72;
  padding: 8px 2.5rem;
  margin: auto 5px;
  font-weight: 700;
  cursor: pointer;
  outline: inherit;
`;

export const DataRowContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ffffff;
  margin: 10px 0;
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr 1fr;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background-color: #fff5b3;
    `}
`;
export const DataRowHighlightBox = styled.div`
  height: 100%;
  width: 15px;
  ${(props) =>
    props.active &&
    css`
      background-color: #e9cf30;
    `}
`;
export const DataRowHeader = styled.div`
  margin-top: 10px;
  font-weight: 700;
`;
