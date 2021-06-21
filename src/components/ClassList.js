import React from 'react'
import { connect } from 'react-redux'

import { ClassCard } from './classCard'

function ClassList(props) {
    return (
        <div id="class-list" name="class-list" className="class-list">
            {props.class.map((item) => { return <ClassCard class={item} key={item.classID} /> })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ClassList)