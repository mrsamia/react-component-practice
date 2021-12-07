import '../style/button.css';

function Button({bttn=''}){
    return(
        <div>
            <button className="btn">{bttn}</button>
        </div>
    );

}
export default Button;