import React, { useState, useEffect } from "react";


import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";
import './CompanyList.css'

/** Show page with list of companies.*/

function CompanyList() {

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    handleSearch()
  }, []);


    /** Triggered by search form onChange; reloads companies. */
 async function handleSearch(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  function countCompanies() {
    if(companies.length === 0) {
      return <h5 className='CompanyList-Counter'>No company were found</h5>
    }else if(companies.length === 1){
        return <h5 className='CompanyList-Counter'>1 company</h5>

    }else {
      return <h5 className='CompanyList-Counter'>{companies.length} companies</h5>

    }
  }

  if (!companies) return <LoadingSpinner />;


  return (
      
<div className="CompanyList">
  <div className="CompanyList-SearchForm">
    {countCompanies()}
  <SearchForm handleSearch={handleSearch}/>
  </div>
  <div className='CompanyList-Companies'>
    
  {companies.map(comp =>(
        <CompanyCard 
        key={comp.handle}
        handle={comp.handle}
        name={comp.name}
        description={comp.description}
        logoUrl={comp.logoUrl}
        />
    ))}
    
  </div>

</div>


  );
}

export default CompanyList;
