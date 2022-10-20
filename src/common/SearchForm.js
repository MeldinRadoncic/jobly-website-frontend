import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {FaSearch} from 'react-icons/fa'


import "./SearchForm.css";

/** 
 * Appears on CompanyList and JobList so that these can be filtered
 * down.*/

function SearchForm({ handleSearch}) {

  const [term, setTerm] = useState("");


  /** Update form fields */
  function handleChange(evt) {
    handleSearch(term.trim() || undefined);
    setTerm(term.trim());
    setTerm(evt.target.value);

  }

  return (

      <div className="SearchForm">
      <Form className="SearchForm-Form">
      <span><FaSearch size={26}/></span>
                <Form.Control
                placeholder="Search Jobly "
                name={term}
                value={term}
                onChange={handleChange}
                />
                
      </Form>

      </div>
  );
}

export default SearchForm;
