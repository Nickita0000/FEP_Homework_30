export const ACTION_USER_CREATE = 'create'
export const ACTION_USER_REMOVE = 'remove'
export const ACTION_USER_EDIT = 'edit'
export const ACTION_USER_UPDATE = 'update'


export function create(user) {
    return { type: ACTION_USER_CREATE, payload: user}
}

export function remove(id) {
    return { type: ACTION_USER_REMOVE, payload: id}
}

export function edit(user) {
    return { type: ACTION_USER_EDIT, payload: user }
}

export function update(changes) {
    return { type: ACTION_USER_UPDATE, payload: changes }
}
