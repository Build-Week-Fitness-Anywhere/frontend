import axios from 'axios';
import axiosWithAuth from '../utility/axiosWithAuth'

export const CLASS_SET = "CLASS_SET";
export const CLASS_ADD = "CLASS_ADD";
export const CLASS_DELETE = "CLASS_DELETE";
export const CLASS_EDIT = "CLASS_EDIT";

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
        console.log(item);
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
                console.log(resp.data);
            }).catch((err) => console.log(err));
    
        dispatch({type: CLASS_ADD, payload: item})
        })
}

const editClass = (item) => {
    return ((dispatch, getState) => {
        let newClasses = getState().class;
        newClasses = newClasses.filter((thing) => {
            return (thing.id !== item.id );
        })
        newClasses = [
            ...newClasses,
            item
        ]
        dispatch({type: CLASS_SET, payload: newClasses});
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