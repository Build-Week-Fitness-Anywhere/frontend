import React from 'react'
import { connect } from 'react-redux'
import '../styles/classList.css'
import ClassCard from './classCard'

function ClassList(props) {
    return (
        <div id="class-list" name="class-list" className="class-list">
            {props.classList.map((item) => { 
                return <ClassCard class={item} key={item.class_id} />
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.class
    }
}

export default connect(mapStateToProps)(ClassList)