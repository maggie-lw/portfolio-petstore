import { useRef } from "react";
import { useRouter } from "next/router";

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const searchKeywordRef = useRef();
  const router = useRouter();

  const submitSearchHandler = (event) => {
    event.preventDefault();
    const keyword = searchKeywordRef.current.value;
    
    router.push('/search');
  };

  return (
    <form onSubmit={submitSearchHandler} className={classes.form}>
      <input
        placeholder="Begin your search here"
        id="search-keyword"
        type="text"
        ref={searchKeywordRef}
      />
      <br />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
