import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProduct = () => {
    const {refetch ,data: products = []} = useQuery({
        queryKey: ['assets'],
        queryFn: async () => {
            const res = await axios.get('https://dummyjson.com/products')
            return res.data;
        }
    })
    return [products.products, refetch];
};

export default useProduct;