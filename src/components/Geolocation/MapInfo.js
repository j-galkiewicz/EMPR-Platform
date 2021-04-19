import React, { useState } from "react";

const MapInfo = () => {
    return (
        <div className="map-frontpage">
            <h3 className="map-frontpage--title">Welcome to myGiving</h3>
            <h5 className="map-frontpage--subtitle">Saving lives has never  been so easy!</h5>
            <br></br>
            <ul className="map-frontpage--ul">As you come here you've already half way to go. 
            Please follow the steps below to reach your goal and save someone's life:</ul>
                <br></br>
                <li className="map-frontpage--li"> get familiar with the map on the left side, try to find your location (+ / - buttons)</li>
                <li className="map-frontpage--li"> once you get closer to your location click on the blood donation place near to you</li>
        </div>
    )
}

export default MapInfo
