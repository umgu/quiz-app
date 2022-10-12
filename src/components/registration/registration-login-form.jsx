import * as React from 'react';
import "./registration.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserDetails } from '../../redux/actions';

export default function RegistrationForm({type}) {
  console.log("---Registration---");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    if (firstName && lastName && gender) {
      dispatch(saveUserDetails({firstName, lastName, gender}));
      navigate("/quiz/start");
    }
    else {
      alert("Enter valid detail!!!");
    }
  };

  return (
    <div className="form-container">
      <div className="form d-flex flex-column">
        <h3>{type==='registration'?"Register":"Login"}</h3>

        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" className="form-control mb-2" placeholder="First name" />

        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control mb-2" placeholder="Last name" />

        {type==='registration'?<div className="radio-btns">
          <div className="me-2">
            <input onChange={(e)=>setGender(e.target.value)} className="form-check-input me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="me-2">
            <input onChange={(e)=>setGender(e.target.value)} className="form-check-input me-1" type="radio" name="flexRadioDefault" value="female" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>:null}
        <button type="submit" className="btn btn-dark btn-block mt-1" onClick={handleSubmit}>{type==='registration'?"Start Quiz":"Login"}</button>
      </div>
    </div>
  );
}