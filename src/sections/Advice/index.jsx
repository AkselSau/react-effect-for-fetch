import { useEffect } from "react";
import { useState } from "react";

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice"
  const [advice, SetAdvice] = useState([]);
  const [favourite, setFavourite] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    SetAdvice(jsonData);
  };
  fetchData();
  }, []);
  
  const handleClick = async () => {
    await fetch(url)
    .then((res) => res.json())
    .then((data) => SetAdvice(data))
  }
  const handleFavouriteClick = () => {
    setFavourite([...favourite, advice?.slip?.advice]);
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice?.slip?.advice}</p>
        <button onClick={handleClick}>Get More Advice</button>
        <button onClick={handleFavouriteClick}>Save to Favourties</button>
      </section>

      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
        {favourite.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}
//https://api.adviceslip.com/advice
export default AdviceSection
