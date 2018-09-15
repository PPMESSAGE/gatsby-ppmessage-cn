import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    'one', 'two', 'three'
]

const arrowClosed = (
    <span className="arrow-closed" />
)
const arrowOpen = (
    <span className="arrow-open" />
)

class CustomArrowExample extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: ''
        }
    }

    render () {
        const defaultOption = this.state.selected

        return (
            <section>
                <h3>Custom Arrow Example</h3>
                <Dropdown
                    arrowClosed={arrowClosed}
                    arrowOpen={arrowOpen}
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                />

                
            </section>
        )
    }
}

export default CustomArrowExample
