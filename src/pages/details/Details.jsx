import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { stringify } from 'postcss';
const Details = () => {

    const { id } = useParams();
    const detailsData = useLoaderData();
    const cardData = detailsData || {};
    const [detailsCard, setdetailsCard] = useState([])
    

    useEffect(() => {
        const findDetails = cardData.find(card => card.id == id)
        setdetailsCard(findDetails);
    }, [id, detailsData])


    const { image,  title, color, briefDescription, price,category } = detailsCard || {}

   


    const clikedHandleing = () => {
        const items = JSON.parse(localStorage.getItem("donated")) || [];
        console.log(items);
        if (items.length === 0) {
            console.log("askiuhfiaswufhjvhjvdsaf");
            localStorage.setItem('donated', JSON.stringify([detailsCard]))
        }
        else {
            const findItem = items.find(i => i.id == id)
            if (findItem) {
                alert('already added')
                return
            }

            localStorage.setItem('donated', JSON.stringify([...items, detailsCard]))
            alert('added successfully')
        }


    }




    return (
        <div className="" >
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{briefDescription}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>  


        </div>
    )
  }
export default Details;