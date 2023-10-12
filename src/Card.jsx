function Card(data) {
  return (
    <div>
      {data.map((data) => (
        <>
          <img src={data.image} />,<h1>{data.title}</h1>,
          <p>{data.description}</p>
        </>
      ))}
    </div>
  );
}

export default Card;
