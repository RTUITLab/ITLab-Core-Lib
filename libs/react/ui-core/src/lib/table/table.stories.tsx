import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './table';
import {ColumnsType} from './TableProps'
import React from 'react'
import {Button} from '../button/button'
import {Badge} from '../badge/badge'
import Input from '../input/input'
import {InputNumber} from '../input-number/input-number'
import CurrencyInput from '../currency-input/currency-input'

export default {
  component: Table,
  title: 'Table',
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {

  interface DataType {
    key: number | string;
    name: string | React.ReactNode;
    phone: string;
    age: number;
  }

  const columns: ColumnsType<DataType>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 1,
      colSpan: 2,
      width: 500,
      onCell: (value, index) => {

        if (index === 0) {
          return {rowSpan: 3}
        }
        else if(index === 1 || index === 2) {
          return {rowSpan: 0}
        }
        else {
          return {rowSpan: 1}
        }
      }
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      colSpan: 0,
      rowSpan: 0,
      key: 2,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 3,
      sorter: true
    },
  ]

  const data: DataType[] = [
    {
      key: 1,
      name: 'name1',
      phone: 'phone1',
      age:1,
    },
    {
      key: 4,
      phone: 'phone4',
      name: 'name4',
      age: 4,
    },
    {
      key: 2,
      name: 'name2',
      phone: 'phone2',
      age: 2,
    },
    {
      key: 5,
      name: <Button children={'батон'} />,
      phone: 'phone5',
      age: 5,
    },
    {
      key: 6,
      name: 'name6',
      phone: 'phone6',
      age: 6,
    },
    {
      key: 3,
      name: 'name3',
      phone: 'phone3',
      age: 3,
    },
  ]

  const footer: DataType = {
    key: 7,
    name: 'name7',
    phone: 'phone7',
    age: 7,
  }
  const footerNode = <div>Итого</div>

  return (
      <Table {...args} />
    )
};

export const Primary = Template.bind({});
Primary.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 1,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key: 4,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 5,
    },
  ],
  data: [
    {
      key: 1,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 2,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 3,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 4,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 5,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
  ]
};
export const Sorter = Template.bind({});
Sorter.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      key: 1,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
      sorter: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key: 4,
    },
    {
      title: 'City',
      dataIndex: 'city',
      sorter: true,
      key: 5,
    },
  ],
  data: [
    {
      key: 1,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 2,
      name: 'Oleg',
      phone: '8-800-555-35-35',
      age:10,
      county: 'Russia',
      city: 'Ekaterinburg'
    },
    {
      key: 3,
      name: 'Fedor',
      phone: '8-800-555-35-35',
      age:38,
      county: 'Russia',
      city: 'Barnaul'
    },
    {
      key: 4,
      name: 'Petr',
      phone: '8-800-555-35-35',
      age:45,
      county: 'Russia',
      city: 'Omsk'
    },
    {
      key: 5,
      name: 'Ivan',
      phone: '8-800-555-35-35',
      age:22,
      county: 'Russia',
      city: 'Novgorod'
    },
  ]
};
export const Footer = Template.bind({});
Footer.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      key: 1,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
      sorter: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key: 4,
    },
    {
      title: 'City',
      dataIndex: 'city',
      sorter: true,
      key: 5,
    },
  ],
  data: [
    {
      key: 1,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 2,
      name: 'Oleg',
      phone: '8-800-555-35-35',
      age:10,
      county: 'Russia',
      city: 'Ekaterinburg'
    },
    {
      key: 3,
      name: 'Fedor',
      phone: '8-800-555-35-35',
      age:38,
      county: 'Russia',
      city: 'Barnaul'
    },
    {
      key: 4,
      name: 'Petr',
      phone: '8-800-555-35-35',
      age:45,
      county: 'Russia',
      city: 'Omsk'
    },
    {
      key: 5,
      name: 'Ivan',
      phone: '8-800-555-35-35',
      age:22,
      county: 'Russia',
      city: 'Novgorod'
    },
  ],
  footer: <div>Simple footer</div>
};
export const FooterCell = Template.bind({});
FooterCell.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      key: 1,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
      sorter: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key: 4,
    },
    {
      title: 'City',
      dataIndex: 'city',
      sorter: true,
      key: 5,
    },
  ],
  data: [
    {
      key: 1,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 2,
      name: 'Oleg',
      phone: '8-800-555-35-35',
      age:10,
      county: 'Russia',
      city: 'Ekaterinburg'
    },
    {
      key: 3,
      name: 'Fedor',
      phone: '8-800-555-35-35',
      age:38,
      county: 'Russia',
      city: 'Barnaul'
    },
    {
      key: 4,
      name: 'Petr',
      phone: '8-800-555-35-35',
      age:45,
      county: 'Russia',
      city: 'Omsk'
    },
    {
      key: 5,
      name: 'Ivan',
      phone: '8-800-555-35-35',
      age:22,
      county: 'Russia',
      city: 'Novgorod'
    },
  ],
  footer: {
    key: 6,
    name: 'Names',
    phone: '8-800-555-35-35',
    age: 133,
    county: 'Russia',
    city: 'Cities'
  },
};
export const CustomComponents = Template.bind({});
CustomComponents.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      key: 1,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
      sorter: true,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key: 4,
    },
    {
      title: 'City',
      dataIndex: 'city',
      sorter: true,
      key: 5,
    },
  ],
  data: [
    {
      key: 1,
      name: <Badge children={'Steven'} />,
      phone: <Input defaultValue={'8-800-555-35-35'} readonly />,
      age:18,
      county: 'Russia',
      city: <CurrencyInput defaultValue={20000} />
    },
    {
      key: 2,
      name: 'Oleg',
      phone: <Input defaultValue={'8-800-555-35-35'} readonly />,
      age:10,
      county: 'Russia',
      city: 'Ekaterinburg'
    },
    {
      key: 3,
      name: 'Fedor',
      phone: <Input defaultValue={'8-800-555-35-35'} />,
      age:38,
      county: <Button children={'Батон'} />,
      city: 'Barnaul'
    },
    {
      key: 4,
      name: 'Petr',
      phone: <Input defaultValue={'8-800-555-35-35'} readonly />,
      age:45,
      county: 'Russia',
      city: <InputNumber id={'number1'} />
    },
    {
      key: 5,
      name: 'Ivan',
      phone: <Input defaultValue={'8-800-555-35-35'} readonly />,
      age:22,
      county: 'Russia',
      city: 'Novgorod'
    },
  ],
  footer: {
    key: 6,
    name: 'Names',
    phone: '8-800-555-35-35',
    age: 133,
    county: 'Russia',
    city: 'Cities'
  },
};
export const CustomStyle = Template.bind({});
CustomStyle.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 1,
      onCell: (value, index) => {
        if(index === 0) {
          return {style: {background: 'red'}}
        }
        else return {}
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
      onCell: (value, index) => {
        if(index === 1) {
          return {style: {color: 'red'}}
        }
        else return {}
      }
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
      onCell: (value, index) => {
        if(index === 2) {
          return {style: {fontSize: 10}}
        }
        else return {}
      }
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key: 4,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 5,
      onCell: (value, index) => {
        //data length
        if(index === 5) {
          return {style: {textAlign: 'left', background: 'black', color: 'white'}}
        }
        else return {}
      }
    },
  ],
  data: [
    {
      key: 1,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 2,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 3,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 4,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
    {
      key: 5,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow'
    },
  ],
  footer: {
    key: 6,
    name: 'Names',
    phone: '8-800-555-35-35',
    age: 133,
    county: 'Russia',
    city: 'Cities'
  },
};
export const Colspan = Template.bind({});
Colspan.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 1,
      onCell: (value, index) => {
        if(index === 0) {
          return {colSpan: 2}
        }
        else if(index === 5) {
          return {colSpan: 5}
        }
        else return {}
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
      onCell: (value, index) => {
        if(index === 0) {
          return {colSpan: 0}
        }
        else if(index === 1) {
          return {colSpan: 3}
        }
        else if(index === 5) {
          return {colSpan: 0}
        }
        else return {}
      }
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
      onCell: (value, index) => {
        if(index === 1) {
          return {colSpan: 0}
        }
        else if(index === 3) {
          return {colSpan: 3}
        }
        else if(index === 5) {
          return {colSpan: 0}
        }
        else return {}
      }
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key:4,
      onCell: (value, index) => {
        if(index === 1) {
          return {colSpan: 0}
        }
        else if(index === 3) {
          return {colSpan: 0}
        }
        else if(index === 5) {
          return {colSpan: 0}
        }
        else return {}
      }
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 5,
      onCell: (value, index) => {
        if(index === 3) {
          return {colSpan: 0}
        }
        else if(index === 5) {
          return {colSpan: 0}
        }
        else return {}
      }
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 6,
    },
  ],
  data: [
    {
      key: 1,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 2,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 3,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 4,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 5,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
  ],
  footer: {
    key: 6,
    name: 'Names',
    phone: '8-800-555-35-35',
    age: 133,
    county: 'Russia',
    city: 'Cities',
    salary: 1000,
  },
};
export const Rowspan = Template.bind({});
Rowspan.args = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 1,
      onCell: (value, index) => {
        if(index === 0) {
          return {rowSpan: 2}
        }
        else if(index === 1) {
          return {rowSpan: 0}
        }
        else return {}
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 2,
      onCell: (value, index) => {
        if(index === 1) {
          return {rowSpan: 3}
        }
        else if(index === 2) {
          return {rowSpan: 0}
        }
        else if(index === 3) {
          return {rowSpan: 0}
        }
        else return {}
      }
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 3,
      onCell: (value, index) => {
        if(index === 3) {
          return {rowSpan: 2}
        }
        else if(index === 4) {
          return {rowSpan: 0}
        }
        else return {}
      }
    },
    {
      title: 'Country',
      dataIndex: 'county',
      key:4,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 5,
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 6,
    },
  ],
  data: [
    {
      key: 1,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 2,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 3,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 4,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
    {
      key: 5,
      name: 'Steven',
      phone: '8-800-555-35-35',
      age:18,
      county: 'Russia',
      city: 'Moscow',
      salary: 1000,
    },
  ],
  footer: {
    key: 6,
    name: 'Names',
    phone: '8-800-555-35-35',
    age: 133,
    county: 'Russia',
    city: 'Cities',
    salary: 1000,
  },
};
