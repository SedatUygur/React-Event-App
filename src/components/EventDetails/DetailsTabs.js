import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Map from '../Map';
import overlay from '../../assets/overlay.svg';
import expandIcon from '../../assets/expandIcon.svg';
import shrinkIcon from '../../assets/shrinkIcon.svg';

import {
  DetailsContainer,
  Header,
  LocationContainer,
  ImageContainer,
  ImageOverlay,
  Image,
  ExpandButton,
  AudioContainer,
  MediaModal,
  MediaModalContent,
} from '../../styled-components/EventDetails';

export const Details = ({ selected }) => {
  return (
    <DetailsContainer>
      <div>
        <Header>{selected.details[5].title}</Header>
        <p>{selected.details[5].value}</p>
      </div>
      <div>
        <Header>{selected.details[6].title}</Header>
        <p>{selected.details[6].value}</p>
      </div>
      <div>
        <Header>{selected.details[7].title}</Header>
        <p>{selected.details[7].value}</p>
      </div>
    </DetailsContainer>
  );
};

export const Location = ({ selected }) => {
  return (
    <LocationContainer>
      {selected.location && selected.location.latitude ? (
        <Map
          lat={selected.location.latitude}
          long={selected.location.longitude}
        />
      ) : (
        <Header>There is no location information.</Header>
      )}
    </LocationContainer>
  );
};

export const Media = ({ selected }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {selected.media[0].type === 'image' ? (
        <>
          <ImageContainer
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <Image src={selected.media[0].url} />

            <ImageOverlay src={overlay} />
            <ExpandButton src={expandIcon} />
          </ImageContainer>
          <MediaModal
            onClick={() => {
              setIsModalOpen(false);
            }}
            open={isModalOpen}
          >
            <MediaModalContent>
              <img src={selected.media[0].url} alt="media" style={{  width: '100%' }} />
              <ImageOverlay modal src={overlay} />
              <ExpandButton modal src={shrinkIcon} />
            </MediaModalContent>
          </MediaModal>
        </>
      ) : selected.media[0].type === 'audio' ? (
        <AudioContainer>
          <ReactAudioPlayer src={selected.media[0].url} controls />
        </AudioContainer>
      ) : (
        <Header>No media content.</Header>
      )}
    </div>
  );
};
