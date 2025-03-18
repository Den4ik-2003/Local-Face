import "./sevenScreenHome.css"

function SevenScreenHome() {
    return (
        <div className="sevenScreenHome">
            <h1>Latest Articles</h1>
            <div className="sevenScreenHomeCards">
                <div className="sevenScreenHomeCard">
                    <img src="./images/sevenScreenHome1.jpg" alt="Image" />
                    <h3>The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir</h3>
                    <p>Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.</p>
                    <input className="sevenScreenHomeBtn" type="button" value="Read More" />
                </div>
                <div className="sevenScreenHomeCard">
                    <img src="./images/sevenScreenHome2.jpg" alt="Image" />
                    <h3>The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories</h3>
                    <p>A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.</p>
                    <input className="sevenScreenHomeBtn" type="button" value="Read More" />
                </div>    
                <div className="sevenScreenHomeCard">
                    <img src="./images/sevenScreenHome3.jpg" alt="Image" />
                    <h3>The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance</h3>
                    <p>Rose, often referred to as the "Queen of Flowers," has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.</p>
                    <input className="sevenScreenHomeBtn" type="button" value="Read More" />
                </div>
            </div>   
        </div>
    )
}

export default SevenScreenHome;