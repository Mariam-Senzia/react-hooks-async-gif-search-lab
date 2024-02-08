import React,{useState} from "react";

function GifSearch({handleSubmit}) {
    ////controlled,so set state
    const [search, setSearch] = useState("");

    function handleChange(e) {
        e.preventDefault();
        //////set state to the input value
        setSearch(e.target.value); 
    }

    function formSubmit(e) {
        e.preventDefault();
        ////set our callback to the search
        handleSubmit(search)
    }

   return (
      <form onSubmit={formSubmit}>
        <label>Enter a Search Term : </label>
        <input 
        type="text" 
        placeholder="Search...." 
        value={search}
        onChange={handleChange}
        />
        <button>Find Gifs</button>
      </form>
   );
}

export default GifSearch;