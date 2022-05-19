import './slide.css';

import img from '../../image/Wildlife_cover.png'
function Slide() {
    return (
        <div className="grid wide">
            <img src={img} className="slide__image"></img>
        </div>
    );
}
export default Slide;