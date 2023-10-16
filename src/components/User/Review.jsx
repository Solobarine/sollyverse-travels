import React from 'react'

const Review = (props) => {
    const { rating, title, review, user } = props.review
    const array = [1, 2, 3, 4, 5]
    return (
        <div className='singleReview'>
            <div className="userProfile">
                <img src="" alt="" />
                <p className='user'>
                    {user.firstName[0].toUpperCase()}.
                    &nbsp;
                    {user.lastName[0].toUpperCase()
                    +
                    user.lastName.substring(1)}
                </p>
            </div>
            <h4>{title}</h4>
            <p className="content">{review}</p>
            <div className='starArray'>
                {
                    array.map(item => (
                        (item <= rating)
                        ? <i className="fa-solid fa-star"></i>
                        : <i className="fa-regular fa-star"></i>
                    ))
                }
            </div>
        </div>
    )
}
export default Review