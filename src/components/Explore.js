import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Explore = () => {
  const data = {
    columns: [
      {
        label: 'Project Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label:'Domain',
        field: 'domain',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Mentor',
        field: 'mentor',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 100
      },
      {
        label: 'File',
        field: 'file',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        domain: 'AI & ML',
        mentor: 'Raymond',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'Heart rate prediction',
        domain: 'AI & ML',
        mentor: 'boyle',
        year: '2019-22',
        file: 'link'
      },
      {
        name: 'E-commerce',
        domain: 'Android app dev / Flutter',
        mentor: 'Hilary',
        year: '2019-22',
        file: 'link'
      },
      {
        name: 'Social Media clone',
        domain: 'Android app dev / Flutter',
        mentor: 'Desmond',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'Tracking app',
        domain: 'IOT/ Flutter/ Android app dev',
        mentor: 'Amy',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'Tiger Nixon',
        domain: 'AI & ML',
        mentor: 'Diaz',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'Block chain project',
        domain: 'Block chain/ Web app',
        mentor: 'Cheddar',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'portfolio',
        domain: 'Web Dev',
        mentor: 'Jake',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'chip tracker',
        domain: 'IOT',
        mentor: 'Holt',
        year: '2019-22',
        file: 'link'
      },
      {
        name: 'Tiger Nixon',
        domain: 'AI & ML',
        mentor: 'Raymond',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'Tiger Nixon',
        domain: 'AI & ML',
        mentor: 'Raymond',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'Tiger Nixon',
        domain: 'AI & ML',
        mentor: 'Raymond',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'Tiger Nixon',
        domain: 'AI & ML',
        mentor: 'Raymond',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'portfolio',
        domain: 'Web Dev',
        mentor: 'Jake',
        year: '2020-23',
        file: 'link'
      },
      {
        name: 'chip tracker',
        domain: 'IOT',
        mentor: 'Holt',
        year: '2019-22',
        file: 'link'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default Explore;