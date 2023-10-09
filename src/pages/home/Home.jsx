import { useLoaderData } from "react-router-dom";
import Banner from "../../component/banner/Banner";
import Footer from "../../component/footer/Footer";
import Cards from "../../component/cards/Cards";



const Home = () => {
   const cards = useLoaderData();
   console.log("c==>",cards);
    return (
        <div>
            
            <Banner></Banner>
            {
                <Cards cards={cards} ></Cards>

            }
            <Footer></Footer>
        </div>
    );
};

export default Home;

