import Form from './Form.js';
import List from './List.js'
import { useDispatch, useSelector } from "react-redux";
import {create, edit, remove, update} from "./redux/actions";

function App() {
    const list = useSelector((state) => state.list)
    const userEdit = useSelector((state) => state.userEdit)
    const dispatch = useDispatch()

    function onFormSubmit(user) {
        if(user.id){
            dispatch(update(user))
        } else {
            dispatch(create(user))
        }
    }

    function onUserListRemove(id) {
        dispatch(remove(id))
    }

    function onUserListEdit(user) {
        dispatch(edit(user))
    }

    return (
      <div>
        <Form
            userEdit={userEdit}
            onFormSubmit={onFormSubmit}
        />
        <List
            list = {list}
            onUserListRemove={onUserListRemove}
            onUserListEdit={onUserListEdit}
        />
      </div>
    );
}

export default App;
