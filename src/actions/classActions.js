import axios from 'axios';
import axiosWithAuth from '../utility/axiosWithAuth'

export const CLASS_SET = "CLASS_SET";
export const CLASS_ADD = "CLASS_ADD";
export const CLASS_DELETE = "CLASS_DELETE";
export const CLASS_EDIT = "CLASS_EDIT";
export const SET_CURRENT_CLASS = 'SET_CURRENT_CLASS'

export const setClass = (id) => {
    return({type:SET_CURRENT_CLASS, payload: id})
}

// const defaultData = [
//     {
//         classID: 0,
//         name: "Smurf Yoga",
//         date: "someday",
//         time: "afternoon-ish",
//         duration: 30,
//         instructor: "Smurfette",
//         type: "yoga",
//         intensity: "mild",
//         location: "Smurf Village"    
//     },
//     {
//         classID: 1,
//         name: "Miyagi-Do Karate",
//         date: "today",
//         time: "sometime",
//         duration: 60,
//         instructor: "Daniel Larouso",
//         type: "karate",
//         intensity: "moderate",
//         location: "Miyagi Dojo"    
//     },
//     {
//         classID: 2,
//         name: "Zombie Run",
//         date: "Apocalypse Now",
//         time: "now",
//         duration: 120,
//         instructor: "Ted Bundy",
//         type: "cardio",
//         intensity: "advanced",
//         location: "Calamity Race Track"    
//     }
// ]

const addClass = (item) => {
    return ((dispatch) => {
        const neoClass = {
            name: item.name,
            type: item.type,
            start_time: item.time,
            duration: item.duration,
            level: item.intensity,
            location: item.location,
            attendees: 0,
            max_size: 10
        }
       axiosWithAuth().post("/api/classes/", neoClass)
            .then((resp) => {
                dispatch({type: CLASS_ADD, payload: resp.data});
            }).catch((err) => console.log(err));
    
        })
}

const editClass = (item) => {
    return ((dispatch, getState) => {
        const neoClass = {
            name: item.name,
            type: item.type,
            start_time: item.time,
            duration: item.duration,
            level: item.intensity,
            location: item.location,
            attendees: 0,
            max_size: 10
        }
        let newClasses = getState().class;
        
        const destString = "/api/classes/:class_id/" + item.class_id
        axiosWithAuth().put(destString, neoClass)
            .then((resp) => {
                newClasses = newClasses.filter((thing) => {
                    return (thing.id !== item.id );
                });
                newClasses = [
                    ...newClasses,
                    resp.data
                ];
                dispatch({type: CLASS_SET, payload: newClasses});            
            }).catch((err) => console.log(err));
        
    })
}

const loadClass = () => {
    return ((dispatch) => {
        axios.get("https://fittnesslambda.herokuapp.com/api/classes")
            .then((resp) => {
                dispatch({type: CLASS_SET, payload: resp.data});
            }).catch((err) => console.log(err));
    });
}

export {
    addClass,
    editClass,
    loadClass
}