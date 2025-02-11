import { useEffect } from "react";
import { useState } from "react";

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/AkselSau/contact"
  const [users, SetUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      SetUsers(jsonData);
    };
    fetchData();
  }, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((item, index) => (
            <li key={index} style={{background: item.favouriteColour}}>
              <img src={item.profileImage} alt={`${item.firstName} ${item.lastName}`} />
              <h3>{item.firstName} {item.lastName}</h3>
              <p>Email: {item.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
//https://boolean-uk-api-server.fly.dev/AkselSau/contact
export default UsersSection
