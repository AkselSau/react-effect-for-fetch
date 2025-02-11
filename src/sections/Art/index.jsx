import { useEffect } from "react";
import { useState } from "react";

function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art"
    const [art, SetArt] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        SetArt(jsonData);
      };
      fetchData();
    }, []);
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map((item, index) => (
          <li key={index}> 
            <div className="frame">
              <img src={`https://boolean-uk-api-server.fly.dev${item.imageURL}`}/>
            </div>
            <h3>{item.title}</h3>
            <p>Artist: {item.artist}</p>
            <h4>Publication History:</h4>
            <ul>
              {item.publicationHistory.map((values, index1) => (
                <li key={index1}>{values}</li>
              ))}
            </ul>
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
//https://boolean-uk-api-server.fly.dev/art
//https://boolean-uk-api-server.fly.dev/images/paris-street-rainy-day.jpg
export default ArtsSection
