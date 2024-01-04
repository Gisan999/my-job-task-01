import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

/* eslint-disable react/prop-types */
const ShowCard = ({ data }) => {
    const { brand, category, thumbnail, description, price, rating, title, } = data;
    // console.log(data);
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div>
                <div data-aos="fade-up" className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div data-aos="fade-up" className="flex justify-center">
                        <img className="transition duration-300 ease-in-out hover:scale-110 p-5 w-72 h-72 rounded-t-lg" src={thumbnail} alt="product image" />
                    </div>
                    <hr />
                    <div data-aos="fade-up" className="px-5 pb-5">
                        <h2 className="text-xl font-medium">{title}</h2>
                        <h3 className="text-xl font-medium">Brand: {brand}</h3>
                        <h3 className="text-lg italic text-gray-500 font-medium">Category: {category}</h3>
                        {
                            description.length > 20 ?
                                <p>{description.slice(0, 40)}</p>
                                :
                                <p>{description}</p>
                        }

                        <div data-aos="flip-right" className="flex items-center mt-2.5 mb-5">
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}/10</span>
                        </div>
                        <div data-aos="fade-up" className="flex items-center justify-between">
                            <div>
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {price}</span>
                            </div>
                            <div>
                                <button className="cta flex items-center">
                                    <span>Add To Cart</span>
                                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>

                            </div>

                        </div>
                        {/* <div  data-aos="flip-left" className="flex justify-around mt-4">
                          <Link to={`/products/${_id}`}>
                          <button className="btn btn-outline btn-info px-8  btn-sm">Details</button></Link>
                          <Link to={`/update/${_id}`}>
                          <button className="btn btn-outline btn-secondary px-8  btn-sm">Update</button></Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;