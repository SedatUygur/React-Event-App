import React, { useState } from 'react';

import Action from './Action';
import { Details, Location, Media } from './DetailsTabs';

import { Button } from '../../styled-components/Button';
import {
  Tab,
  TabHeader,
  TabUnderline,
  TabUnderlineBackground,
} from '../../styled-components/Tab';
import {
  MainContainer,
  EventDetailsContainer,
  ButtonArea,
} from '../../styled-components/EventDetails';

const EventDetails = ({ data, setData, selected, setSelected }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);

  const setAction = (actionString) => {
    let tempArray = JSON.parse(JSON.stringify(data)); // Creating a duplicate array, not a reference

    //Under normal circumstances, this function would make an api call
    //using the selected event's id, and the following findIndex wouldn't be neccesary

    const index = tempArray.data.findIndex((item) => item.id === selected.id); //Find the index of the selected event

    if (index !== -1) {
      tempArray.data[index].details[4].value = actionString; //Change the "Aksiyon" value
      setData(tempArray); //Update the array
      setSelected(tempArray.data[index]);
    } else {
      alert('A problem occured!');
    }
  };

  return (
    <MainContainer>
      <h1>Event Details</h1>
      <EventDetailsContainer>
        <div>
          {selected.details[4].value === '-' ? (
            <ButtonArea>
              <Button
                large
                onClick={() => {
                  setAction('Aksiyon Gerekmiyor');
                }}
              >
                NO ACTION NEEDED
              </Button>
              <Button
                primary
                large
                onClick={() => {
                  setIsActionModalOpen(true);
                }}
              >
                TAKE ACTION
              </Button>
            </ButtonArea>
          ) : (
            ''
          )}
        </div>
        <Tab>
          <TabHeader
            selected={currentTab === 0 ? true : false}
            onClick={() => {
              setCurrentTab(0);
            }}
          >
            DETAILS
          </TabHeader>
          <TabHeader
            selected={currentTab === 1 ? true : false}
            onClick={() => {
              setCurrentTab(1);
            }}
          >
            LOCATION
          </TabHeader>
          <TabHeader
            selected={currentTab === 2 ? true : false}
            onClick={() => {
              setCurrentTab(2);
            }}
          >
            MEDIA
          </TabHeader>
        </Tab>
        <TabUnderline current={currentTab} />
        <TabUnderlineBackground />
        {currentTab === 0 ? <Details selected={selected} /> : ''}
        {currentTab === 1 ? <Location selected={selected} /> : ''}
        {currentTab === 2 ? <Media selected={selected} /> : ''}
      </EventDetailsContainer>
      <Action
        isActionModalOpen={isActionModalOpen}
        setIsActionModalOpen={setIsActionModalOpen}
        setAction={setAction}
      />
    </MainContainer>
  );
};

export default EventDetails;
