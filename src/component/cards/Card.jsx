import { Link } from "react-router-dom";


const Card = ({card}) => {
    console.log(card);
    return (
        <>
       
        <div className=" gap-4">
           
<div class=" bg-blue-200 flex flex-col border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div >
        <img class="rounded-t-lg w-full h-[250px]" src={card.image} alt="" />
    </div>
    <div class="p-5 flex-grow text-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.category}</h2>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
            <div className="flex justify-between" >
                <p className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white"> Location: {card.location}</p>
                <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Date: {card.date}</p>
            </div>
        
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
        <Link to={`/eventDetails/${card.id}`}> <div  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </div>
        </Link>
    </div>
</div>

        </div>
        
        </>
    );
};

export default Card;