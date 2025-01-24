import React from "react";
import "../css/About.css";

export const About = () => {
  const deliveryPartners = [
    {
      name: "Swiggy",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftyroo.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fswiggy.jpg&f=1&nofb=1&ipt=a45d50fc9dec6348f5d308da8c31962c70f7e9944b20c728967e987aa5cfa9fa&ipo=images",
    },
    {
      name: "Zomato",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F020%2F336%2F761%2Fnon_2x%2Fzomato-logo-zomato-icon-free-free-vector.jpg&f=1&nofb=1&ipt=e76c675a44240f058434039e4a6706338183b47c78c479c3aefc728b9ccabbac&ipo=images",
    },
    {
      name: "Uber Eats ",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-marcas.com%2Fwp-content%2Fuploads%2F2020%2F11%2FUber-Eats-Simbolo.png&f=1&nofb=1&ipt=1b3a5fbd263e9bb39ef9ef7b73a8313ec70b9cba15fd0c6d89dd07913ad37ce9&ipo=images",
      
    },
    {
      name: "Food Panda",
      photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.whwakKnyD_oImj6W_glAgwHaHa%26pid%3DApi&f=1&ipt=4092e6bcde8b2b01e36e82d20de8a5b9bd08f6fbf8e699e85280080da59ef2cd&ipo=images",
      
    },
  ];
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Savory</h2>
        <p>
          At Savory, we revolutionize the way people experience food delivery. 
          Our mission is to seamlessly connect food lovers with their favorite 
          dishes from top-rated restaurants, ensuring every meal is delivered fresh and on time.
        </p>
      </div>

      <div className="about-content">
        <h3>Our Story</h3>
        <p>
          Established in 2023, Savory started with a vision to create a platform 
          where food meets convenience. Today, we partner with thousands of restaurants 
          and delivery partners to bring a variety of cuisines right to your doorstep.
        </p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>
            <strong>Vast Selection:</strong> Explore menus from your favorite local 
            and international restaurants.
          </li>
          <li>
            <strong>Lightning-Fast Delivery:</strong> Hot and fresh meals delivered 
            faster than you can imagine.
          </li>
          <li>
            <strong>Secure and Easy Payments:</strong> Multiple payment options, 
            ensuring your transactions are safe and simple.
          </li>
          <li>
            <strong>Delivery Partner Network:</strong> Powered by a trusted fleet 
            of skilled delivery partners, ensuring timely and reliable service.
          </li>
          <li>
            <strong>Customer-Centric:</strong> Your satisfaction is our priority, 
            with 24/7 support and easy issue resolution.
          </li>
        </ul>

        <h3>Empowering Delivery Partners</h3>
        <div className="delivery-partners">
          {deliveryPartners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={partner.photo} alt={partner.name} className="partner-photo" />
              <h4>{partner.name}</h4>
              <p>{partner.tagline}</p>
            </div>
          ))}
        </div>

        <h3>Join Us</h3>
        <p>
          We are more than just a food delivery service. We are a community of food 
          enthusiasts, restaurant owners, and delivery partners working together to 
          create memorable dining experiences. Whether you're a food lover, a chef, 
          a restaurant owner, or a delivery partner, Savory has a place for you.
        </p>
      </div>
    </div>
  );
};
