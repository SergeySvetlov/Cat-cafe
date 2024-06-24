import React from "react";
import Title from "../../ui/title/title";
import Gallery from "../../blocks/gallery/gallery";
import Buy from "../../blocks/buy/buy";
function BuyPage({buyOptions, images}) {
    return (
        <>
            <Title hide level={1}>Страница покупки</Title>
            <Gallery images={images}/>
            <Buy buyOptions={buyOptions}/>
        </> 
    )
}

export default BuyPage; 