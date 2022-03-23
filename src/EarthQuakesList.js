import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EarthQuakesList.module.css';

const EarthQuakesList = (props) => {
    const data = props.earthQuakesList;

    return (
        <div className={classes.listHeader}>
            <h2>{props.metadata.title}</h2>
            <div className={classes.earthquakeTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Magnitude</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(earthquake => {
                            return (<tr>
                                <td><Link to={`/details/${earthquake.id}`}>{earthquake.properties.place}</Link></td>
                                <td>{earthquake.properties.mag}</td>
                                <td>{new Date(earthquake.properties.time).toLocaleString()}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default EarthQuakesList;