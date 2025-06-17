import LogoPic from "../../media/logo_white.png";
import "./head.css";

export default function Head() {
    return (
        <div className="head">
            <img src={LogoPic} alt="Logo" className="logo"  />
        </div>
    )
}