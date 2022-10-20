import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";


import "./JobCard.css";
import UserContext from "../auth/UserContext";

/** Show limited information about a job.*/

function JobCard({ id, title, salary, equity, companyName }) {

  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(function updateAppliedStatus() {

    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  /** Apply for a job */
  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  function jobSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();
  
    for (let i = salaryStr.length - 1; i >= 0; i--) {
      digitsRev.push(salaryStr[i]);
      if (i > 0 && i % 3 === 0) digitsRev.push(",");
    }
  
    return digitsRev.reverse().join("");
  }

  return (
    
      <Card className="JobCard"> 
        <Card.Body className={applied ? 'JobCard-Applied' : null}>
          <Card.Title>{title} 
          </Card.Title>
          <Card.Text>{companyName}</Card.Text>
          {salary && <Card.Text>Salary: {jobSalary(salary)}</Card.Text>}
          {equity !== undefined && <Card.Text>Equity: {equity}</Card.Text>}
          {applied ? <Button  variant="success"><FaCheckCircle/> APPLIED</Button>
        :
        <Button onClick={handleApply} variant='primary'>APPLY</Button>  
        }
        </Card.Body>
      </Card>
  );
}


export default JobCard;
