import axios from 'axios';


export function verItem() {
    return(
        axios({
            method: 'GET',
            url: "http://rem-rest-api.herokuapp.com/api/todo",
       })
       
    )
}

export function enviarItem(data) {
    return(
        axios({
            method: 'POST',
            url: "http://rem-rest-api.herokuapp.com/api/todo",
            data: data
       })
       
    )
}