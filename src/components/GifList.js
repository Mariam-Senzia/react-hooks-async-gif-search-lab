import React from "react";

function GifList({listGif}) {

    return (
        /////map because it return array of 3 urls
        <div>
            <ul>
                {listGif.map((gifUrl, index) => { 
                   return( <li key={index}>
                        <img src={gifUrl} alt="Gif"/>
                    </li>
                   )
                })
                }
            </ul>
        </div>
    );
}

export default GifList;