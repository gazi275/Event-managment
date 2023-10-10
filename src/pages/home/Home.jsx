import { useLoaderData } from "react-router-dom";
import Banner from "../../component/banner/Banner";
import Footer from "../../component/footer/Footer";
import Cards from "../../component/cards/Cards";
import { useEffect } from "react";



const Home = () => {
    const cards = useLoaderData();
    useEffect(() => {
        fetch("create.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    console.log("c==>", cards);
    return (
        <div>

            <Banner></Banner>

            <Cards className="mt-10" cards={cards} ></Cards>


            <Footer></Footer>
        </div>
    );
};

export default Home;

