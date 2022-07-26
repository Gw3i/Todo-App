export default function FetchRecipes({ list }) {
  return (
    <>
      <h2>Beer List</h2>
      <ul>
        {list.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </>
  );
}
