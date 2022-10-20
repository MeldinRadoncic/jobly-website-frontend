import React from "react";
import * as Yup from 'yup'




function validationSchema(){

    const validationSchema = Yup.object().shape({
        username:Yup.string().required().min(2).label("Username"),
        password:Yup.string().required().min(5).min(4).label("Password"),
        firstName:Yup.string().min(2).max(15).required().label("First Name"),
        lastName:Yup.string().required().min(2).max(25).label("Last Name"),
        email:Yup.string().email().required().label("Email")
        })
        
        return validationSchema

}


export default validationSchema;