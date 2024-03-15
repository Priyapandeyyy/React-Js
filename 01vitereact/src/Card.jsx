import logo from './assets/logo.jpeg'
export default function Card() {
    return(
        <div className="Card">
        <img className="card-image" src={logo} alt="Tere Liye"></img>
        <h2 className='card-title' >Priya Pandey</h2>
        <p className='card-text' >I am a 3rd year Computer Science Student. I am leaning React JS right now ✌️.</p>
        </div>
    );
}
