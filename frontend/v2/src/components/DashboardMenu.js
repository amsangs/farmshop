const DashboardMenu = {
	render: (props) => {
		return `
    <div class="dashboard-menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li class="${props.selected === 'dashboard' ? 'selected' : ''}">
          <a href="/#/dashboard">Dashboard</a>
        </li>
        <li class="${props.selected === 'orders' ? 'selected' : ''}">
          <a href="/#/orderlist">Orders</a>
        </li>
        <li class="${props.selected === 'products' ? 'selected' : ''}">
          <a href="/#/productlist">Products</a>
        </li>
        <li class="${props.selected === 'users' ? 'selected' : ''}">
          <a href="/#/userlist">Accounts</a>
        </li>
      </ul>
    </div>
    `;
	},
};
export default DashboardMenu;
