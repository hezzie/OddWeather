import React from "react";
import convertDegrees from '../helpers';

class Titles extends React.Component {
    render () {
        const { error, data } = this.props.titleState;      
        return (
            <div>
                <h6>Odd Weather</h6>
                {!error && 
                    <div class="weatherGrid">
                        <div class="degree-span-row-2"><h2>{convertDegrees(data.list === undefined ? "": data.list[0].main.temp)}&#176;C</h2></div>
                        <div><p id="city">{data.list === undefined ? "" : data.city.name}</p></div>
                        <div id="icon"><img alt="" src = { `http://openweathermap.org/img/w/${data.list === undefined ? "" : data.list[0].weather[0].icon}.png`}/></div>
                        <div><p id="date">{data.list === undefined ? "" : data.list[0].dt_txt}</p></div>
                        <div><p>{data.list === undefined ? "" : data.list[0].weather[0].main}</p></div>
                    </div>
                }
            </div>
        );
    }
};

export default Titles;