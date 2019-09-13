import React from 'react';
import { Button, Input } from 'antd';
import {
  Table,
  ProFilterButton,
  ProFormItem,
  ProSearch,
  ProSelect,
  ProTableLight,
  DeleteModal,
  InfoBox,
  InfoBoxItem,
  ProMaskedInput,
  ProSidebarTab,
  ProContent,
} from '../lib';

const columns = [
  {
    title: '№',
  },
  {
    title: 'Tarix',
  },
  {
    title: 'Sənəd',
  },
  {
    title: 'Təchizatçı',
  },
  {
    title: 'Məbləğ',
  },
];

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <h1>Pro Components</h1>
    <hr />
    <Table columns={columns} />
    <hr />
    <ProTableLight columns={columns} />
    <hr />
    <ProFilterButton>ProFilterButton</ProFilterButton>
    <hr />
    <ProFormItem label="ProFormItem">
      <Input type="text" />
    </ProFormItem>
    <hr />

    <ProFormItem label="ProMaskedInput">
      <ProMaskedInput
        name="phoneNumber"
        mask="mobilePhoneMask"
        value="(+342) 42 3__-__-__"
      />
    </ProFormItem>
    <hr />

    <ProSidebarTab time="28/03/2019" address="Adress" name="ProSidebarTab" />

    <hr />

    <ProSearch />
    <hr />
    <ProSelect />
    <hr />
    <ProContent title="ProContent">
      <InfoBox title="InfoBox">
        <InfoBoxItem label="InfoBoxItem label" text="InfoBoxItem" />
      </InfoBox>
    </ProContent>

    <hr />

    <Button type="danger" onClick={DeleteModal(1, console.log)}>
      Delete Modal
    </Button>
  </div>
);

export default App;
