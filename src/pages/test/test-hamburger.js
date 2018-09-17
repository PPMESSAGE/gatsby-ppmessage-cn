import React, { Component } from 'react'
import Hamburger from '../../components/hamburger'



class TestHamburger extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: ''
        }
    }

    render () {

        return (
            <div style={{"top":"200px", "right": "20px", "position":"absolute"}}>
                <Hamburger>
                    <div>Hello World</div>
                </Hamburger>
            </div>
        )
    }
}

export default TestHamburger
