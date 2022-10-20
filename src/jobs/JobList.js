import React, { useState, useEffect } from "react";


import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";
import './JobList.css'

/** Show page with list of jobs.*/

function JobList() {
  console.debug("JobList");

  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    handleSearch();
  }, []);

  /** Triggered by search form onChange; reloads jobs. */
  async function handleSearch(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  function countJobs() {
    if(jobs.length === 0) {
      return <h5 className='JobList-Counter'>No jobs were found</h5>
    }else if(jobs.length === 1){
        return <h5 className='JobList-Counter'>1 job</h5>

    }else {
      return <h5 className='JobList-Counter'>{jobs.length} jobs</h5>

    }
  }

  if (!jobs) return <LoadingSpinner />;

  return (
     
      <div className="JobList">
  <div className="JobList-SearchForm">
    {countJobs()}
  <SearchForm handleSearch={handleSearch}/>
  </div>
  <div className='JobList-Jobs'>
    
 <JobCardList jobs={jobs}/>
    
  </div>

</div>
  );
}

export default JobList;
