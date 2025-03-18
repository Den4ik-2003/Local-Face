import "./twoScreenBlog.css";

function TwoScreenBlog() {
  return (
    <div className="twoScreenBlog">
      <div className="twoScreenBlogSearch">
        <input type="text" placeholder="Search here" />
        <div className="twoScreenBlogFlex">
          <p>Filter by Category</p>
          <img src="./icons/ArrowBottom.svg" alt="Arroe" />
        </div>
        <div className="twoScreenBlogFlex">
          <p>Sort by</p>
          <img src="./icons/ArrowBottom.svg" alt="Arroe" />
        </div>
      </div>

      <div className="twoScreenBlogLists">
        <div className="twoScreenBlogList">
          <img src="./images/twoScreenBlog1.jpg" alt="Image" />
          <h4>
            Finding Your Signature Scent: A Guide to Perfume Personalities
          </h4>
          <p>
            Embark on a journey of self-discovery as we delve into the concept
            of perfume personalities. From bold and adventurous to elegant and
            timeless, there's a fragrance that perfectly complements your
            essence. Let us help you find your signature scent, a fragrant
            expression of your unique style.
          </p>
          <input className="twoScreenBlogBtn" type="button" value="Read More" />
        </div>

        <div className="twoScreenBlogList">
          <img src="./images/twoScreenBlog2.jpg" alt="Image" />
          <h4>
            The Art of Curating a Luxury Perfume Collection: A Symphony of
            Scents and Stories
          </h4>
          <p>
            A luxury perfume collection is not just an assortment of fragrances;
            it is a reflection of one's taste, personality, and experiences.
            Each bottle holds a unique olfactory journey, crafted with the
            finest ingredients and artistic mastery.
          </p>
          <input className="twoScreenBlogBtn" type="button" value="Read More" />
        </div>

        <div className="twoScreenBlogList">
          <img src="./images/twoScreenBlog3.jpg" alt="Image" />
          <h4>Decoding Fragrance Notes: Unraveling the Symphony of Scents</h4>
          <p>
            Ever wondered how perfumers compose their masterpieces? Unravel the
            mystery behind fragrance notes – top, middle, and base – and learn
            how each layer contributes to the overall olfactory experience of a
            perfume. Get ready to appreciate your favorite scents on a whole new
            level!
          </p>
          <input className="twoScreenBlogBtn" type="button" value="Read More" />
        </div>
      </div>

      <div className="twoScreenBlogLists">
        <div className="twoScreenBlogList">
          <img src="./images/twoScreenBlog4.jpg" alt="Image" />
          <h4>
            The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of
            a Fragrant Elixir
          </h4>
          <p>
            Lavender, with its enchanting aroma and rich history, has been
            cherished for centuries as a symbol of relaxation, healing, and
            timeless beauty. In the world of perfumery, lavender plays a key
            role in creating captivating fragrances loved by many.
          </p>
          <input className="twoScreenBlogBtn" type="button" value="Read More" />
        </div>

        <div className="twoScreenBlogList">
          <img src="./images/twoScreenBlog5.jpg" alt="Image" />
          <h4>A Journey Through Time: Unearthing Perfumery's Rich History</h4>
          <p>
            In our blog collection, we invite you to embark on a journey through
            time, where we explore the fascinating history of perfumery. From
            ancient civilizations to modern-day masterpieces, we unravel the
            tales of how scents have adorned humanity throughout the ages.
          </p>
          <input className="twoScreenBlogBtn" type="button" value="Read More" />
        </div>

        <div className="twoScreenBlogList">
          <img src="./images/twoScreenBlog6.jpg" alt="Image" />
          <h4>
            The Timeless Elegance of Rose Perfumes: Unveiling the Queen of
            Flowers in Fragrance
          </h4>
          <p>
            Rose, often referred to as the "Queen of Flowers," has held a
            special place in human culture and history for centuries. Beyond its
            captivating beauty, this iconic bloom has also inspired perfumers to
            create some of the most timeless and exquisite fragrances in the
            world.
          </p>
          <input className="twoScreenBlogBtn" type="button" value="Read More" />
        </div>
      </div>
      <div className="twoScreenBlogContainer">
        <input className="twoScreenBlogBtn2" type="button" value="Load More" />
      </div>
    </div>
  );
}
   
export default TwoScreenBlog;
