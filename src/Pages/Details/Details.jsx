import { Link, useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const data = useLoaderData()
    const { userId } = useParams()
    // console.log(userId);
    // console.log(data);
    // const { id, name, dollar } = data
    const donatedCard = data.find(card => card.id == userId)
    console.log(donatedCard);


    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{donatedCard.id}</h2>
                    <p>{donatedCard.name}</p>
                    <p>{donatedCard.age}</p>
                    <div className="card-actions">
                        <Link>
                            <button className="btn btn-primary">click here to details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;