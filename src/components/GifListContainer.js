import React,{useEffect,useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer () {
    const [listGif, setListGif] = useState([]);

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=daqB9gz5LZSaRAGfFWoiOKtBAhUknLSr&rating=g")
        .then((res) => res.json())
        .then((list) => {
            // console.log(list.data)
            ///access list and data,array within array
            ////slice to get from 0-3
            ////set to 3 urls because its an array of 3
            const urls = list.data.slice(0, 5).map((item) => {
                return item.images.original.url
            })
            // console.log(urls)
           setListGif(urls);
        }
        );
    },[]);
    // console.log(listGif)

    function handleSubmit(search) {
        // e.preventDefault();
        const newArr = [...listGif,search ];
        setListGif(newArr)
    }
    
    return (
        <div>
            <GifList listGif={listGif}/>
            <GifSearch handleSubmit={handleSubmit} listGif={listGif} />
        </div>
    );
}

export default GifListContainer;