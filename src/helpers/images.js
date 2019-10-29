
import Rainy from '../images/rainy.jpeg';
import Snowy from '../images/snow.jpeg';
import Foggy from '../images/fog.jpeg';
import Clear from '../images/clear.jpeg';
import Smoky from '../images/smoky.jpeg';
import Misty from '../images/misty.jpeg';
import Hazy from '../images/hazy.jpeg';
import Dusty from '../images/dusty.jpeg';
import Tornady from '../images/tornady.jpeg';
import Cloudy from '../images/cloudy.jpeg';
import Default from '../images/default.jpeg';

const changingImages = {
    undefined: Default,
    Thunderstorm: Rainy,
    Drizzle: Rainy,
    Rain: Rainy,
    Snow: Snowy,
    Mist: Misty,
    Smoke: Smoky,
    Haze: Hazy,
    Dust: Dusty,
    Sand: Dusty,
    Fog: Foggy,
    Ash: Foggy,
    Squall: Foggy,
    Tornado: Tornady,
    Foggy: Foggy,
    Clear: Clear,
    Clouds: Cloudy,
};

export default changingImages;
