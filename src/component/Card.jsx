import data from "../data/data.json";

function Card() {
  return (
    <div className="cards">
      {data.map((data) => (
        <>
          <div class="element">
            <img src={data.image} className="images" />
            <h2 class="title">{data.title}</h2>
            <p class="description">{data.description}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Card;
