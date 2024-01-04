import { useContext, useEffect, useState } from "react";
// import useProduct from "../../Hook/useProduct";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ShowCard from "../ShowCard/ShowCard";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    // const [products] = useProduct();
    const [products, setProducts] = useState([]);
    const [data, setData] = useState(products);
    // const [search2, setSearch2] = useState('')
    const {search} = useContext(AuthContext);
    // console.log(data);
    console.log(search);

    const {refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('https://dummyjson.com/products')
            return setProducts(res.data.products);
        }
    })

    useEffect(() => {
        setTimeout(() => {
            setData(products)
        }, 1); 
    }, [setData, products])
    // console.log(products);
    return (
        <div>
            <h2>Total Products:   {data.length}</h2>
            {/* <div>
                            <form  onChange={(e) => setSearch(e.target.value)}>
                                <input className="text-black pl-3 px-6 py-1 rounded-full" type="text" placeholder="Search Product By Name" />
                            </form>
                        </div> */}
            <div>
                <div className="container mx-auto my-12">
                   <div className="flex justify-center md:px-4 xl:px-0">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                        {
                            data?.filter(item => {
                                return item.title.toLowerCase().includes(search.toLowerCase())
                            }).map((data, idx) => <ShowCard key={idx} data={data}></ShowCard>)
                        }
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;