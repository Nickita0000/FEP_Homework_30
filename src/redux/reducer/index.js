import {
    ACTION_USER_CREATE,
    ACTION_USER_EDIT,
    ACTION_USER_REMOVE,
    ACTION_USER_UPDATE,
} from "../actions";


const initialState = {
    list: [
        {
            "name":"Ольга",
            "surname":"Профатилова",
            "phone":"1",
            "id":"42"
        },
        {
            "name":"Ольга"
            ,"surname":"Профатилова"
            ,"phone":"5667"
            ,"id":"43"
        },
        {
            "name":"Ольга",
            "surname":"Профатилова"
            ,"phone":"8",
            "id":"44"
        }
    ],
    userEdit: {},
}

export default function contactReducer(state = initialState, { type, payload }) {
    switch (type){
        case ACTION_USER_CREATE: return {
            ...state,
            list: [
                ...state.list,
                {
                    ...payload,
                    id: Math.random()
                }
            ]
        }
        case ACTION_USER_REMOVE:
            const newUserList = state.list.filter(user => user.id !== payload)

            return { ...state, list: newUserList }
        case ACTION_USER_EDIT:
            return { ...state, userEdit: payload }
        case ACTION_USER_UPDATE:
            const updatedUserList = state.list.map(userItem => userItem.id === payload.id ? payload : userItem)

            return { ...state, list: updatedUserList, userEdit: {} }
        default: return state
    }
}