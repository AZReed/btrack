import React from 'react';
import AddUser from "../containers/AddUser"
import Search from "../containers/Search"

const Menu = () => {
	return (
		<div id="menu" className="clearfix">
			<div className="float-left">
				<Search />
			</div>
			<div className="float-right">
				<AddUser/>
			</div>
		</div>
	);
}

export default Menu;