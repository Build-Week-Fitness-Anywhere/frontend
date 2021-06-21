import React, { useEffect } from 'react'

import ClassList from './ClassList'

import { loadClass } from '../actions/classActions'
import { connect } from 'react-redux';

function InstructorDashboard(props) {

    useEffect(() => {
        props.loadClass()
    }, []);

    return (
        <div id="instructor-dashboard">
            <ClassList />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.class
    }
}

export default connect(mapStateToProps, { loadClass })(InstructorDashboard)