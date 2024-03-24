import React, { useEffect, useState } from "react";
import "./SearchRecipeByRegion.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ImageCard from "../ImageCard";
import apiUrl from "../../config";

const SearchRecipeByRegion = () => {
  const navigate=useNavigate('')
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleSearchRecipe = async(e) => {
    e.preventDefault()
    // Implement your search logic here using the searchTerm state
    console.log("Search clicked with term:", searchTerm);
    let res=await fetch(`https://apis-new.foodoscope.com/recipe-search/sub-regions?searchText=${searchTerm}&pageSize=10`,{
      method:'get',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${apiUrl}`
      }
    });
    res=await res.json()
    console.log(res)
    navigate(`/recipebySubregion/${searchTerm}`);
  };
  // useEffect(() => {
  //   if (searchTerm) {
  //     navigate(`/recipeby/${searchTerm}`);
  //   }
  // }, [searchTerm, navigate]);
  const SearchByRegion=(region)=>{
    console.log(region)
    navigate(`/recipebyRegion/${region}`);
  }
  return (
    <div className="search-recipe-container">
      <h2 className="subregion-heading">
        Wanna try something from a different place
      </h2>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by sub-region..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch
          className="search-icon"
          style={{
            fontSize: "26px",
            marginLeft: "12px",
            cursor: "pointer",
          }}
          onClick={(e)=>handleSearchRecipe(e)}
        />
      </div>
      <div>
        {" "}
        <h2
          style={{ textAlign: "left", marginLeft: "90px", marginTop: "30px" }}
        >
          Regions{" "}
        </h2>
      </div>

      {/* Integrate Image Cards */}
      <div className="image-cards-container">
        <ImageCard
          imageSrc="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
          title="Indian Delight"
          description="Curry tales and samosa delights – a spice-infused journey."
          onClick={()=>SearchByRegion("Indian")}
        />
        <ImageCard
          imageSrc="https://voicesfromthekitchen.org/wp-content/uploads/2021/10/Chinese-Cuisine-1.jpg"
          title="Chinese Fusion"
          description="Dumpling dances and stir-fry wonders – sweet meets savory."
          onClick={()=>SearchByRegion("Chinese")}
        />
        <ImageCard
          imageSrc="https://adventures.com/media/19161/canadian-poutine-food-dish.jpg"
          title="Canadian Treat"
          description="Poutine perfection – fries, curds, and savory gravy unite."
          onClick={()=>SearchByRegion("Canadian")}
        />
        <ImageCard
          imageSrc="https://www.willflyforfood.net/wp-content/uploads/2021/09/irish-food-full-irish-breakfast.jpg.webp"
          title="Irish Comfort"
          description="Hearty stew, colcannon warmth – an Emerald Isle embrace."
          onClick={()=>SearchByRegion("Irish")}
        />
        <ImageCard
          imageSrc="https://www.remotelands.com/travelogues/app/uploads/2022/09/Korean-cuisine-header-2.jpg"
          title="Korean Symphony"
          description="Bulgogi bites, kimchi kicks – Korea's flavor symphony."
          onClick={()=>SearchByRegion("Korean")}
        />
        <ImageCard
          imageSrc="https://media.cnn.com/api/v1/images/stellar/prod/170327170425-40-australian-foods-meat-pie.jpg?q=w_1600,h_900,x_0,y_0,c_fill"
          title="Australian Feast"
          description="Meat pies to seafood delights – an Aussie global feast."
          onClick={()=>SearchByRegion("Australian")}
        />
        <ImageCard
          imageSrc="https://cdn.shopify.com/s/files/1/0613/0437/3481/articles/Korean_food_culture.jpg?v=1678097095"
          title="Korean Innovation"
          description="Barbecue sizzles, kimchi stews – Korea's tasty innovation."
          onClick={()=>SearchByRegion("Korean")}
        />
        <ImageCard
          imageSrc="https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy.jpg"
          title="Italian Elegance"
          description="Pasta simplicity, pizza perfection – la dolce vita on a plate."
          onClick={()=>SearchByRegion("Italian")}
        />
      </div>
    </div>
  );
};

export default SearchRecipeByRegion;
