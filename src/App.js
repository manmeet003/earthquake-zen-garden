import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import EarthQuakeDetails from './EarthQuakeDetail';
import EarthQuakesList from './EarthQuakesList';
import Header from './Header';
import Profile from './Profile';

const App = () => {
    const [siteData, setSiteData]= useState([])
    const [headerData, setHeaderData] = useState({})
    const [profileData, setProfileData] = useState({})
    const [metaData, setMetaData] = useState({})

    useEffect(() => {
        getEarthQuakesList();
    }, [])

    function getEarthQuakesList(){
        axios.get('./data.json').then(response=> {
            setSiteData(response.data.data.features);
            setHeaderData(response.data.site);
            setProfileData(response.data.profile);
            setMetaData(response.data.data.metadata);
        })
    }

    return (
        <div>
            <Header header={headerData} profile= {profileData}/>
            <Route path="/" exact><EarthQuakesList earthQuakesList = {siteData}  metadata = {metaData}/></Route> 
            <Route path="/details/:id"><EarthQuakeDetails earthQuakes = {siteData}/></Route>
            <Route path="/profile"><Profile profiledata={profileData}/></Route>
        </div>
    )
}

export default App;