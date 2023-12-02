const loginReducer = (state=0, action) => {
    switch(action.type){
        case 'LOGIN':
            return state += 1;

    }
}

// action
// {
//     type:'',
//     payload:''
// }