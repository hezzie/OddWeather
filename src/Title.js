import React from "react";
import './App.css';


class Titles extends React.Component {
    render () {
        return (
            <div class="row">
                <div class="column left">
                    <h6>Odd Weather</h6>
                        <div class="grid">
                            <div class="span-row-2"><h2>08&#176;</h2></div>
                            <div><p id="city">Kigali</p></div>
                            <div id="icon"><h1>&#127783;</h1></div>
                            <div><p id="date">06:09 - Sunday, 19 Oct '19</p></div>
                            <div><p>Rainy</p></div>
                        </div>
                </div>
                <div class="column right">
                </div>
            </div>
        );
    }
};

export default Titles;