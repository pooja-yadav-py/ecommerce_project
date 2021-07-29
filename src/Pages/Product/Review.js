import React from 'react';
import './Product.css';

export const Review = () => {
    return (
        <>
            <div className="col-md-5 product_review">
                <div className="product_review_inner">
                <div className="pl-3 pt-2"> 
                  <h5>Add Review</h5>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Title</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Review Title" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Comment</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write Review" rows={3} defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <p>Rating</p>
                      <div className="container ">
                        <div className="star-widget">
                         <input type="radio" name="rate" id="rate-5"/>
                         <label for="rate-5" className="fas fa-star" ></label>
                         <input type="radio" name="rate" id="rate-4"/>
                         <label for="rate-4" className="fas fa-star"></label>
                         <input type="radio" name="rate" id="rate-3"/>
                         <label for="rate-3" className="fas fa-star"></label>
                         <input type="radio" name="rate" id="rate-2"/>
                         <label for="rate-2" className="fas fa-star"></label>
                         <input type="radio" name="rate" id="rate-1"/>
                         <label for="rate-1" className="fas fa-star"></label>
                        </div>
                      </div>
                     </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Will You Recommend This Product</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <option hidden>choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <button type="button" className="btn btn-light">Publish Review</button>
                  </form>
                </div>
                </div>
                </div>
        </>
    );
}
export default Review;
