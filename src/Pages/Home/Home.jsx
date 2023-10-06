import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import { useEffect, useState } from "react";


const Home = () => {
    const data = useLoaderData()
    const [searchData, setSearchData] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    console.log(searchData);


    useEffect(() => {
        const filterData = data.filter((filterItem) =>
            filterItem.name.toLowerCase().includes(searchData.toLowerCase())
        );

        setFilteredData(filterData)
        // console.log(filterData);
    }, [data, searchData])

    const handleSearch = e => {
        const value = e.target.value
        // console.log('click', e.target.name.value);
        // console.log('click');
        setSearchData(value)
        console.log('click');
    }

    return (
        <div className="grid justify-center items-center">
            <h1>this is home</h1>
           
            <input
                type="text"
                name="name"
                value={searchData}
                onChange={handleSearch}
                placeholder="Type here" className="mb-4 input input-bordered input-primary w-full max-w-xs" />
            <div>
                {/* {
                    filteredData.map(item => <li key={item.id}> {item.name}</li>)
                } */}
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    filteredData?.map(singleData => <HomeCard key={singleData.id} singleData={singleData}></HomeCard>)
                }
            </div>


        </div>

    );
};

export default Home;