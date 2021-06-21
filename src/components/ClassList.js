import React from 'react'
import { connect } from 'react-redux'

function ClassList(props) {
    console.log(props);

    return (
        <div>
            {props.class.map((item) => { return <p>{item.name}</p> })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ClassList)