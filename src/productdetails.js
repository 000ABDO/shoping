export default function Details() {
  let data = JSON.parse(localStorage.getItem("productDe"));
  return (
    <div className="text-center">
      <img src={data.image}></img>
      <h1>{data.title}</h1>
      <h3 className="text-primary">{data.price} $</h3>
      <p>{data.text}</p>
    </div>
  );
}
