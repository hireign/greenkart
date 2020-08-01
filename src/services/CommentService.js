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

function createComment(productID, comment, rating, userID) {
    const requestOptionsPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            productID, 
            comment, 
            rating, 
            userID
        })
    };
    fetch("/review", requestOptionsPost)
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
    fetch("/review", requestOptionsPut)
}
export default {
    getComments, createComment, rateComment    
}
