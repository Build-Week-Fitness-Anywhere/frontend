import React from 'react'
import { connect } from 'react-redux'

function ClassList() {
    return (
        <div>
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ClassList)