import React, { useState } from 'react';
import DataTable from './components/DataTable';
import EventDetails from './components/EventDetails/EventDetails';
import { example_response } from './data';
function App() {
  const [data, setData] = useState(example_response);
  const [selected, setSelected] = useState();

  return (
    <div className="App">
      <div
        style={{
          height: 'calc(100vh - 2.5rem)',
          margin: '2.5rem 0 0 2.5rem',
          backgroundColor: '#EBECEF',
          display: 'grid',
          gridTemplateColumns: ' 2fr 1fr',
          gridGap: '20px',
          overflow: 'hidden',
        }}
      >
        <DataTable
          data={data}
          setData={setData}
          selected={selected}
          setSelected={setSelected}
        />
        {selected ? (
          <EventDetails
            data={data}
            setData={setData}
            selected={selected}
            setSelected={setSelected}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
