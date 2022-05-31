import React, { useEffect, useState } from "react";
import { getUsers } from "../Router/data";

export const UserCard = props => {
    return (
        <div className="m-3">
            <p>
                <b>Name:</b> <span>{props.name}</span>
            </p>
            <p>
                <b>Email:</b> {props.email}
            </p>
            <p>
                <b>Website:</b> {props.website}
            </p>
        </div>
    );
};

export const UserList = (props) => {
    let { data: users, searchKey } = props;
    let UserCardWithBorder = withBorder(UserCard);
    users = users.filter(user => user.name.toLowerCase().includes(searchKey.toLowerCase()));
    return (
        <div>
            <div>
                <div>
                    <h2>Users</h2>
                </div>
            </div>
            <div>
                {users.length > 0 && users.map((user) => <UserCardWithBorder key={user.id} {...user} />)}
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
        </div>
    );
};

export const UserAddressList = (props) => {
    let { data: users, searchKey } = props;
    let UserAddressCardWithBorder = withBorder(UserAddressCard);
    users = users.filter(user => user.name.toLowerCase().includes(searchKey.toLowerCase()));
    return (
        <div>
            <div>
                <div>
                    <h2>Users Address</h2>
                </div>
            </div>
            <div>
                {users.length > 0 && users.map((user) => <UserAddressCardWithBorder key={user.id} {...user} />)}
            </div>
        </div>
    )
}

const withBorder = WrappedComponent => {
    class WithBorder extends React.Component {
        render() {
            return (<div className="border" >
                <WrappedComponent {...this.props}></WrappedComponent>
            </div>)
        }
    }
    WithBorder.displayName = `WithBorder(${getDisplayName(WrappedComponent)})`;
    return WithBorder;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withSearch = WrappedComponent => {
    class WithSearch extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                searchKey: ""
            }
        }

        handleChange = event => {
            this.setState({ searchKey: event.target.value });
        }

        render() {
            return (<>
                <div className="d-flex justify-content-center align-item-center my-2">
                    <input value={this.state.searchKey} onChange={this.handleChange}></input>
                </div>

                <WrappedComponent searchKey={this.state.searchKey} {...this.props}></WrappedComponent>
            </>)
        }
    }
    WithSearch.displayName = `WithBorder(${getDisplayName(WrappedComponent)})`;
    return WithSearch;
}

const UserListWithSearch = withSearch(UserList);
const UserAddressListWithSearch = withSearch(UserAddressList);

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
        <div className="d-flex flex-row">
            {users.length === 0 && <p>Loading...</p>}
            {users.length > 0 &&
                <>
                    <div className="flex-grow-1">
                        <UserListWithSearch data={users}></UserListWithSearch>
                    </div>
                    <div className="flex-grow-1">
                        <UserAddressListWithSearch data={users}></UserAddressListWithSearch>
                    </div>
                </>}
        </div>
    );
}