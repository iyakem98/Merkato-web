import React from 'react'
import './NewsHeader.css'
import { Button } from 'react-bootstrap'


const NewsHeader = () => {
  return (
    <section class="newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="content">
                                <form>
                                    <h1>Subscribe to our newsletter!</h1>
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Enter your email"/>
                                        <span class="input-group-btn">
                                            <Button class="btn btn-success" type="submit">Subscribe Now</Button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
  )
}

export default NewsHeader