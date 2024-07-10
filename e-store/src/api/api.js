const BASE_URL = "http://localhost:5000";

const fetcher = async (url) => {
    let responseObject = {
        message: '',
        data: []
    };
    try {
        const response = await fetch(BASE_URL + url)
        if (!response.ok) {
            throw new Error(`http error ${response.status}`);
        }
        const responseData = await response.json();
        responseObject.data = responseData;
        responseObject.message = '';
    } catch (error) {
        responseObject.message = error.message;
    }
    return responseObject;
}


export const getCategories = () => {
    return fetcher('/categories');
}


export const getProducts = (id) => {
    console.log(id);
    return fetcher('/products?catId=' + id);
}