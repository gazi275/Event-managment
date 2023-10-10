import Card from "./Card";


const Cards = ({cards}) => {
    
    return (
        <>
        <div className="text-center mt-24  ">
            <h2 className="text-4xl font-bold">Events</h2>
            <p className="text-lg">Get Ready To Roar</p>
        </div>
        <div className=" px-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {
                cards?.map(card=> <Card key={card.id} card={card}></Card>)
            }
        </div>
        </>
    );
};

export default Cards;