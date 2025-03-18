import MainScreenProductsList from "../../Components/MainScreenProductsList/mainScreenProductsList";
import ThereeScreenProductsList from "../../Components/ThereeScreenProductsList/thereeScreenProductsList";
import TwoScreenProductsList from "../../Components/TwoScreenProductsList/twoScreenProductsList";

export default function ProductsList() {
  return (
    <div className="productsList">
      <MainScreenProductsList />
      <TwoScreenProductsList />
      <ThereeScreenProductsList />
    </div>
  );
}
