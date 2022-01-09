import React, {  useRef } from 'react';
import { useAppSelector} from '../../../store/hooks';
import { State } from "../../../type";

const UserInfo = (): JSX.Element => {
    const renderCount = useRef(0);
    console.log("renders UserDisplay", renderCount.current++);
    const users = useAppSelector( (state: State) => state.users);

    if (users) {
        return (
        <React.Fragment>
            <div className="user-info">
                {users.map((user) => {
                    if(user.username !== null) {
                    return (
                        <div key={user.id}>
                        <div>
                            <label>username:</label>
                            <p>{user.username}</p>
                        </div>
                        <div>
                            <label>phone number:</label>
                            <p>{user.phone}</p>
                        </div>
                     </div>
                    );
                    } else {
                        return null;
                    }
                })}
            </div>
        </React.Fragment>
        );
    }else{
        return null;
    }
};

export const UserInfoTab = React.memo((UserInfo));
