import React, { useState } from "react";
import Button from "../Buttons/Button";

const AppointmentForm = () => {
    return (
        <div className="make-appointment-form">
            <p className="geoDetails">Organization details:</p>
            <span className="geoDetails--more"> 
            <label className="geoDetails">Name</label>
            <input type="text" name="Name" />
            </span>
            <br></br>
            <span className="geoDetails--more"> 
            <label className="geoDetails">Address</label>
            <input type="text" name="Address" />
            </span>
            <br></br>
            <label className="geoDetails">Choose date (calendar)</label>
            <input type="date" id="appointment" name="appointment" />
            <Button className="btnGeo" name="Make an appointment" link="/"></Button>
            <br /><br />
            <Button className="btnGeo" name="Cancel"></Button>
        </div>
    )
}

export default AppointmentForm
