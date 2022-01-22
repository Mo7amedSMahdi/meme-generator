import memesData from '../data/memesData'

export default function Meme() {
    let url
    function handleClick() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        
    }
    const memeImage = <img src={url} alt/>
  return (
    <main>
      <div className="form">
        <input
          id="toptText"
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          id="bottomText"
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="form--button" 
        onClick={handleClick}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="result">
          {memeImage}
      </div>
    </main>
  );
}
