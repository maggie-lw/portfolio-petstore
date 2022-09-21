import SearchBar from "../components/Search/SearchBar";
import ProductList from "../components/Products/ProductList";

export default function Home() {

  

  return (
    <div>
      <div>
        <h1>Welcome to React Games Store!</h1>
      </div>
      <SearchBar />
      <ProductList />
    </div>
  );
}
