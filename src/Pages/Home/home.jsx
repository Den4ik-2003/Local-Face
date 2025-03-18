import FiveScreenHome from "../../Components/FiveScreenHome/fiveScreenHome"
import FourScreenHome from "../../Components/FourScreenHome/fourScreenHome"
import MainScreenHome from "../../Components/MainScreenHome/mainScreenHome"
import SevenScreenHome from "../../Components/SevenScreenHome/sevenScreenHome"
import SixScreenHome from "../../Components/SixScreenHome/sixScreenHome"
import ThereeScreenHome from "../../Components/ThereeScreenHome/thereeScreenHome"
import TwoScreenHome from "../../Components/TwoScreenHome/twoScreenHome"

function Home() {
    return (
        <div>
            <MainScreenHome />
            <TwoScreenHome />
            <ThereeScreenHome />
            <FourScreenHome />
            <FiveScreenHome />
            <SixScreenHome />
            <SevenScreenHome />
            
        </div>
    )
}

export default Home