import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import DataTable from 'react-data-table-component'

const CounteriesTable = () => {
  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all')
      setCountries(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const colums = [
    {
      name: 'Country Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Country Native Name',
      selector: (row) => row.nativeName,
    },
    {
      name: 'Country Capital',
      selector: (row) => row.capital,
    },
    {
      name: 'Country Flag',
      selector: (row) => (
        <img width={50} height={50} src={row.flag} alt="img" />
      ),
    },
    {
      name: 'Action',
      cell: (row) => (
        <button
          className="btn btn-primary"
          onClick={() => alert(row.alpha2Code)}
        >
          Alpha2Code of Country
        </button>
      ),
    },
  ]

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <DataTable
      title="country List"
      columns={colums}
      data={countries}
      pagination
      fixedHeader
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={<button className="btn btn-info">Export</button>}
      subHeader
      fixedHeaderScrollHeight="800px"
    />
  )
}

export default CounteriesTable
