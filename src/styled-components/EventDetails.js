import styled, { css, keyframes } from 'styled-components';

// Main Component
export const MainContainer = styled.div`
  width: 100%;
  font-size: 0.9rem;
`;

export const EventDetailsContainer = styled.div`
  height: 600px;
  background-color: #ffffff;
  margin-right: 1rem;
`;

export const ButtonArea = styled.div`
  padding: 2rem 0.5rem;
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  margin-top: 10px;
  font-weight: 700;
`;

//Details Tab

export const DetailsContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

//Location Tab

export const LocationContainer = styled.div`
  padding: 2rem;
  overflow: scroll;
`;

// Media Tab

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  padding: 2rem;
  justify-content: center;
  cursor: pointer;
`;
export const Image = styled.img`
  position: absolute;
  width: 90%;
  height: 400px;
  object-fit: cover;
`;
export const ImageOverlay = styled.img`
  width: 90%;
  height: 400px;
  position: absolute;
  object-fit: cover;
  
  ${(props) =>
    props.modal &&
    css`
      height: calc(100% - 5.1rem);
      width: 100%;
      top: 0;
      left: 0;
      border: 15px solid white;
      margin-left: -1rem;
    `};
`;

export const ExpandButton = styled.img`
  position: absolute;
  left: 90%;

  ${(props) =>
    !props.modal &&
    css`
      top: 390px;
    `};
  ${(props) =>
    props.modal &&
    css`
      bottom: 5rem;
      left: 95%;
    `};
`;

export const MediaModal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  ${(props) =>
    props.open &&
    css`
      display: flex;
    `};
`;

export const MediaModalContent = styled.div`
  margin: 7% auto auto auto;
  width:40%;
  display: block;
  position: relative;
  padding-bottom: 4rem;
  cursor: pointer;
`;

export const AudioContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  padding-top: 2rem;
`;

//Action Modal

export const ActionModal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  ${(props) =>
    props.open &&
    css`
      display: block;
    `};
`;

export const ActionModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
  min-height: 200px;
  border-radius:15px;
  position: relative;
`;

export const ActionModalClose = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  z-index: 30;
`;

export const ActionModalOption = styled.div`
  width: calc(100% - 3rem);
  height: 70px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #ebecef;
  -webkit-box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 11px -10px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      background-color: #172c49;
      color: #ebecef;
    `};
`;

export const ActionModalTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

export const Loader = styled.img`
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
  margin: 0;
  padding: 0;
`;

export const BigText = styled.h1`
  color: #3da836;
  font-size: 2rem;

  ${(props) =>
    props.error &&
    css`
      color: #d92323;
    `};
`;
