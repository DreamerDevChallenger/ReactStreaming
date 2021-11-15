function Search({ movies, moviesState }) {
  function search(e) {
    if (e.key === "Enter") {
      console.log("work");
    }
  }
  function handleChange(e) {
    let s = e.target.value;
    moviesState(function prevState() {
      return { prevState, s: s };
    });
    console.log(movies.s);
  }
  return (
    <section>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        onKeyPress={search}
      ></input>
    </section>
  );
}
export default Search;
