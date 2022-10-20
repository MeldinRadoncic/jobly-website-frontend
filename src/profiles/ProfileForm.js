import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";


import JoblyApi from "../api/api";
import UserContext from "../auth/UserContext";
import LoadingSpinner from "../common/LoadingSpinner";
import './Profile.css'



/** Profile editing form.
 *
 * Displays profile form and handles changes to local form state.
 * Submitting the form calls the API to save, and triggers user reloading
 * throughout the site.
 *
 * Confirmation of a successful save is normally a simple <Alert>, but
 * you can opt-in to our fancy limited-time-display message hook,
 * `useTimedMessage`, but switching the lines below.
 *
 * Routed as /profile
 * Routes -> ProfileForm -> Alert
 */

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const [saveConfirmed, setSaveConfirmed] = useState(false);


  async function handleSubmit(evt) {
    evt.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
      
    } catch (errors) {
      setFormErrors(errors);
      return errors;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);
    // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (

    <>
    <div className="Profile">
      <form className="Profile-Form">
        <h3 className="Profile-Heading">Edit Profile</h3>
<h5 className="Profile-Form-Username-Heading">{formData.username}</h5>

<label htmlFor='firstName'>First Name</label>
                 <input
                 id="firstName"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleChange}
                />

<label htmlFor='lastName'>Last Name</label>
                 <input
                 id="lastName"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                />
     

      <label htmlFor='email'>Email</label>
                 <input
                 id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                />

<label htmlFor='password'>Password</label>
                 <input
                 id="password"
                     name="password"
                     type='password'
                     required
                     value={formData.password}
                     onChange={handleChange}
                />

                {formErrors.length ?
                <p className="errors-paragraph">{formErrors}</p>
                :
                 null
                 }

                {saveConfirmed ? <Button onClick={handleSubmit} variant="success">{!saveConfirmed ? <LoadingSpinner/>: <FaCheckCircle size={26}/>}</Button>
                :
                <Button onClick={handleSubmit} variant="success">Save Changes</Button>
                }
                
      </form>

    </div>
    </>


      // <di className="Profile">
      //   <h3>Profile</h3>
      // </di
      //       <form>
      //         <div className="form-group">
      //           <label>Username</label>
      //           <p className="form-control-plaintext">{formData.username}</p>
      //         </div>
      //         <div className="form-group">
      //           <label>First Name</label>
      //           <input
      //               name="firstName"
      //               className="form-control"
      //               value={formData.firstName}
      //               onChange={handleChange}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label>Last Name</label>
      //           <input
      //               name="lastName"
      //               className="form-control"
      //               value={formData.lastName}
      //               onChange={handleChange}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label>Email</label>
      //           <input
      //               name="email"
      //               className="form-control"
      //               value={formData.email}
      //               onChange={handleChange}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label>Confirm password to make changes:</label>
      //           <input
      //               type="password"
      //               name="password"
      //               className="form-control"
      //               value={formData.password}
      //               onChange={handleChange}
      //           />
      //         </div>

      //         {formErrors.length
      //             ? <Alert type="danger" messages={formErrors} />
      //             : null}

      //         {saveConfirmed
      //             ?
      //             <Alert type="success" messages={["Updated successfully."]} />
      //             : null}

      //         <button
      //             className="btn btn-primary btn-block mt-4"
      //             onClick={handleSubmit}
      //         >
      //           Save Changes
      //         </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
  );
}

export default ProfileForm;
