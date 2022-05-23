import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUsers } from "../Router/data";

export const UserCard = props => {
    return (
        <div className="m-3">
            <p>
                <b>Name:</b> {props.name}
            </p>
            <p>
                <b>Email:</b> {props.email}
            </p>
            <p>
                <b>Website:</b> {props.website}
            </p>
            <hr />
        </div>
    );
};

export const UserList = (props) => {
    let { data: users } = props;
    return (
        <div>
            <div>
                <div>
                    <h2>Users</h2>
                </div>
            </div>
            <div>
                {users.length > 0 && users.map((user) => <UserCard key={user.id} {...user} />)}
            </div>
        </div>
    )
}

export const UserAddressCard = props => {
    return (
        <div className="m-3">
            <p>
                <b>Name:</b> {props.name}
            </p>
            <p>
                <b>Address:</b> {props.address.street} {props.address.suite}, {props.address.city}
            </p>
            <hr />
        </div>
    );
};

export const UserAddressList = (props) => {
    let { data: users } = props;
    return (
        <div>
            <div>
                <div>
                    <h2>Users Address</h2>
                </div>
            </div>
            <div>
                {users.length > 0 && users.map((user) => <UserAddressCard key={user.id} {...user} />)}
            </div>
        </div>
    )
}

export default function HOC() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const data = await getUsers();
        setUsers(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {users.length === 0 && <p>Loading...</p>}
                {users.length > 0 &&
                    <>
                        <UserList data={users}></UserList>
                        <hr></hr>
                        <UserAddressList data={users}></UserAddressList>
                    </>}
            </nav>
            <Outlet />
        </div>
    );
}