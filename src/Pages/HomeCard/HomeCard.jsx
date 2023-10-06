import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';



const HomeCard = ({ singleData }) => {
    const {id, name, age} = singleData
    // console.log(data);
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{id}</h2>
                    <p>{name}</p>
                    <p>{age}</p>
                    <div className="card-actions">
                        <Link to={`/details/${id}`}>
                        <button className="btn btn-primary">click here to details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
HomeCard.propTypes = {
    singleData: PropTypes.node
}