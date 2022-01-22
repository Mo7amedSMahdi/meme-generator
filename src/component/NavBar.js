import trollFace from '../images/Troll-Face.png';

export default function NavBar(){
    return(
        <nav>
            <img src={trollFace} className="nav--image"/>
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </nav>
    )
}