import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./CompanyCard.css";

/** Show limited information about a company*/

function CompanyCard({ name, description, logoUrl, handle }) {

  return (
    
      <Card className='CompanyCard'>
        <Card.Body className="CompanyCard-Body">
        {logoUrl && <Card.Img className="CompanyCard-Image" variant="top" src={logoUrl} alt={logoUrl}/>}

        <Card.Title>
        <Link to={`/companies/${handle}`}>{name}</Link>
        </Card.Title>

        <Card.Text>
          {description}
        </Card.Text>
        </Card.Body>
      </Card>

  );
}

export default CompanyCard;
