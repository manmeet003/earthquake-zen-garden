import React from 'react';
import { useParams } from 'react-router';
import classes from './EarthQuakeDetail.module.css';

const EarthQuakeDetails = (props) => {
   const params = useParams();
   const data = props.earthQuakes;
   const FetchData = data.filter((earthquake)=> {
       return earthquake.id === params.id
   })
    return (
        // <p>{FetchData && FetchData[0].properties.place}</p>
        <div className={classes.details}>
            <h4>{FetchData[0].properties.title}</h4>
            <div>
                <span className={classes.heading}>Title</span> <span>{FetchData[0].properties.title}</span> <br/>
                <span className={classes.heading}>Magnitude</span> <span>{FetchData[0].properties.mag}</span><br/>
                <span className={classes.heading}>Time</span> <span>{new Date(FetchData[0].properties.time).toLocaleString()}</span><br/>
                <span className={classes.heading}>Status</span> <span>{FetchData[0].properties.status}</span><br/>
                <span className={classes.heading}>Tsunami</span> <span>{FetchData[0].properties.tsunami}</span><br/>
                <span className={classes.heading}>Type</span> <span>{FetchData[0].properties.type}</span>
            </div>
        </div>
    )
}
export default EarthQuakeDetails;