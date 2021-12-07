import '../style/input.css';

function Input({
    name='',
    placeholder=''
}){
    return(
        <div>
            <input type="text" name={name} placeholder={placeholder}/>
        </div>
    );

}
export default Input;