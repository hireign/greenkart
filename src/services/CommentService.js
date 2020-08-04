import Axios from "axios";
/**
 * Service for comment related API calls
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */

/**
 * Get product comment from product id
 *
 * @param {integer} id
 * @returns {Product} product details
 */
function getComments(id) {
    return fetch("/review?id=" + id)
}

function createComment(productID, comment, rating) {
    const requestOptionsPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            productID, 
            comment, 
            rating
        })
    };
    return fetch("/review", requestOptionsPost)
}

// type: "increase" || "decrease"
function rateComment(commentID, type) {
    const requestOptionsPut = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            commentID,
            type
        })
    };
    return fetch("/review", requestOptionsPut)
}

/**
 * API to fetch ratings based on product id
 *
 * @author [Hiren Khant](hr266981@dal.ca)
 */
export async function getRatingByID(args) {
    console.log("get rating called for id: " + args);
    let res = await Axios.get(`/productrating/${args}`);
    return res.data;
  }

export default {
    getComments, createComment, rateComment
}
