import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import './CompanyDetails.css'

/** Company Detail page.*/

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (

<div className="CompanyDetails">

          <h1 className="CompanyDetails-Title">{company.name}</h1>
          <p className='CompanyDetails-Description'>{company.description}</p>
          <JobCardList jobs={company.jobs}/>
      </div>
     

      
      
  );
}

export default CompanyDetail;
