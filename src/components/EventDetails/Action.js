import React, { useState } from 'react';
import { Button } from '../../styled-components/Button';
import {
  Header,
  ButtonArea,
  ActionModal,
  ActionModalContent,
  ActionModalClose,
  ActionModalOption,
  ActionModalTextArea,
  Loader,
  LoaderContainer,
  BigText,
} from '../../styled-components/EventDetails';
import {
  Tab,
  TabHeader,
  TabUnderline,
  TabUnderlineBackground,
} from '../../styled-components/Tab';
import loader from '../../assets/loader.svg';
import ok from '../../assets/ok.svg';
import error from '../../assets/error.svg';

const Action = ({ isActionModalOpen, setIsActionModalOpen, setAction }) => {
  const [currentActionTab, setCurrentActionTab] = useState(0);
  const [option, setOption] = useState();
  const [resolution, setResolution] = useState('');
  const [responseOK, setResponseOK] = useState(false);

  const TakeAction = () => {
    if (resolution) {
      setResponseOK(true);
      if (option === 0) {
        setAction('Mark As Resolved');
      } else {
        setAction('Change Asset');
      }
    } else {
      setResponseOK(false);
    }
    setCurrentActionTab(2);

    setTimeout(() => {
      setCurrentActionTab(3);
    }, 1000);
  };

  return (
    <ActionModal open={isActionModalOpen}>
      <ActionModalContent>
        <ActionModalClose
          onClick={() => {
            setIsActionModalOpen(false);
            setCurrentActionTab(0);
            setOption();
            setResolution('');
          }}
        >
          &times;
        </ActionModalClose>
        {currentActionTab === 0 || currentActionTab === 1 ? (
          <>
            <Tab modal>
              <TabHeader selected={currentActionTab === 0}>
                1 SELECT ACTION
              </TabHeader>
              <TabHeader selected={currentActionTab === 1}>
                2 TAKE ACTION
              </TabHeader>
            </Tab>
            <TabUnderline modal current={currentActionTab} />
            <TabUnderlineBackground modal />
          </>
        ) : (
          ''
        )}
        {currentActionTab === 0 ? ( //Is the user on the first tab?
          <>
            <ActionModalOption
              onClick={() => {
                setOption(0);
              }}
              selected={option === 0}
            >
              <Header>Mark As Resolved</Header>
              <p>
                Mark this event as resolved and enter the details of the
                resolution.
              </p>
            </ActionModalOption>
            <ActionModalOption
              onClick={() => {
                setOption(1);
              }}
              selected={option === 1}
            >
              <Header>Change Asset</Header>
              <p>Change the asset with another one.</p>
            </ActionModalOption>
          </>
        ) : currentActionTab === 1 && option === 0 ? ( //If not, what option did the user choose?
          <>
            <Header>Mark As Resolved</Header>
            <p>
              Mark this event as resolved and enter the details of the
              resolution.
            </p>
            <p style={{ fontWeight: 'bold' }}>Resolution Detail*</p>
            <ActionModalTextArea
              maxLength={'300'}
              value={resolution}
              onChange={(e) => {
                setResolution(e.target.value);
              }}
            />
          </>
        ) : currentActionTab === 1 ? (
          <>
            <Header>Change Asset</Header>
            <p>Change the asset with another one.</p>
            <p style={{ fontWeight: 'bold' }}>Resolution Detail*</p>
            <ActionModalTextArea
              maxLength={'300'}
              value={resolution}
              onChange={(e) => {
                setResolution(e.target.value);
              }}
            />
          </>
        ) : currentActionTab === 2 ? (
          <LoaderContainer>
            <Loader src={loader} />
          </LoaderContainer>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: '60px' }}
              src={responseOK ? ok : error}
              alt="media"
            />
            <BigText error={!responseOK}>
              {responseOK ? 'ACTION HAS BEEN TAKEN!' : 'A PROBLEM OCCURED!'}
            </BigText>
            <p>
              {responseOK
                ? 'You can see the action details from the details tab.'
                : 'We cannot continue due to a problem. Please try again later.'}
            </p>
          </div>
        )}

        <ButtonArea>
          {currentActionTab === 0 ? (
            <Button
              disabled={option !== 1 && option !== 0}
              primary
              onClick={() => {
                setCurrentActionTab(1);
              }}
            >
              NEXT
            </Button>
          ) : currentActionTab === 1 ? (
            <>
              <Button
                onClick={() => {
                  setCurrentActionTab(0);
                }}
              >
                BACK
              </Button>
              <Button
                primary
                onClick={() => {
                  TakeAction();
                }}
              >
                TAKE ACTION
              </Button>
            </>
          ) : (
            ''
          )}
        </ButtonArea>
      </ActionModalContent>
    </ActionModal>
  );
};

export default Action;
