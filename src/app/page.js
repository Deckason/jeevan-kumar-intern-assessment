import React from 'react'
import SideNav from "../app/components/sideNav/SideNav"
import Nav from './components/nav/Nav';
import Consultants from "./components/consultants/Consultants"
import ConsultantsTable from './components/consultants/ConsultantsTable';
import CardsContainer from './components/cardCounts/CardsContainer';
import Filters from './components/filters/Filters';

const page = () => {
  return (
    <div className='container'>
      <div className='navBar'>
        <Nav />
      </div>
      <div className='main'>
        <aside className='aside'>
          <SideNav />
        </aside>
        <div className='dashboardContent'>
          <Consultants />
          <Filters />
          <CardsContainer />
          <ConsultantsTable />
        </div>
        
      </div>
    </div>
  )
}
export default page
