import React from "react";
import "./App.css";
import iconsObject from "./icons";

class Titles extends React.Component {
    state = {
        icon: "Clouds",
    }

    render () {
      


        // console.log('our-obj',Thunderstorm)
        
        // console.log(this.props.iconType)

        // const iconItem = icons.filter(icon => icon.main === this.props.iconType)[0];
        // const {icon} = iconItem;
console.log(iconsObject[this.state.icon]);

        return (
            <div class="row">
                <div class="column left">
                    <h6>Odd Weather</h6>
                        <div class="grid">
                            <div class="span-row-2"><h2>08&#176;</h2></div>
                            <div><p id="city">Kigali</p></div>
                            <div id="icon"><img alt="" src = { `${iconsObject[this.state.icon]}` }/></div>
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