import React, { useState } from 'react';
import {
  DataTable as DataTableContainer,
  DataRowContainer,
  DataRowHeader,
  DataRowHighlightBox,
  DataTableHead,
  Select,
} from '../styled-components/DataTable';
import { Button } from '../styled-components/Button';
const DataTable = ({ data, setData, selected, setSelected }) => {
  const [sortBy, setSortBy] = useState(0);

  const SelectRow = (item) => {
    setSelected(item);
  };

  return (
    <div style={{ overflow: 'scroll' }}>
      <DataTableHead>
        <h1 style={{ paddingLeft: '1rem' }}>Events</h1>

        <p>Sort by:</p>
        <Select
          type="drowdown"
          placeholder="Sort by"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value={0}>Date</option>
          <option value={1}>Type</option>
          <option value={2}>Route Name</option>
          <option value={3}>Category</option>
          <option value={4}>Action</option>
        </Select>

        <Button
          onClick={() => {
            setData(SortEvents(data, sortBy));
          }}
        >
          SORT
        </Button>
      </DataTableHead>

      <DataTableContainer>
        <div>
          {data.data &&
            data.data.map((item, index) => (
              <DataRow
                data={item}
                key={index}
                SelectRow={SelectRow}
                selected={selected}
              />
            ))}
        </div>
      </DataTableContainer>
    </div>
  );
};

export default DataTable;

const DataRow = ({ data, SelectRow, selected }) => {
  return (
    <div
      onClick={() => {
        SelectRow(data);
      }}
    >
      <DataRowContainer
        selected={selected && selected.id === data.id ? true : false}
      >
        <DataRowHighlightBox
          active={data.details[4].value === '-' ? true : false}
        />
        <div>
          <DataRowHeader>{data.details[0].title}</DataRowHeader>
          <p>{data.details[0].value.replace('T', ' ').replace('Z', ' ')}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[1].title}</DataRowHeader>
          <p>{data.details[1].value}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[2].title}</DataRowHeader>
          <p>{data.details[2].value}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[3].title}</DataRowHeader>
          <p>{data.details[3].value}</p>
        </div>
        <div>
          <DataRowHeader>{data.details[4].title}</DataRowHeader>
          <p>{data.details[4].value}</p>
        </div>
      </DataRowContainer>
    </div>
  );
};

const SortEvents = (array, index) => {
  const tempArray = JSON.parse(JSON.stringify(array));

  const result = tempArray.data.sort((a, b) =>
    a.details[index].value > b.details[index].value ? 1 : -1
  );
  tempArray.data = result;
  return tempArray;
};
