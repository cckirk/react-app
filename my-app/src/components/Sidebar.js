function Sidebar(props) {

    const asideStyle = {
        background: "azure",
        width: "calc (30% - 10px)",
        marginLeft: "10px",
        height: "100%", /* Full-height: remove this if you want "auto" height */
        width: "160px", /* Set the width of the sidebar */
        position: "fixed", /* Fixed Sidebar (stay in place on scroll) */
        zLndex: "1", /* Stay on top */
        top: "0", /* Stay at the top */
        left: "0",
        backgroundColor: "lightgrey", /* Black */
        overflowX: "hidden", /* Disable horizontal scroll */
        paddingTop: "20px",
    }

    return (
    <aside 
        style={asideStyle}
        className="sidebar-component">
        <h2>{props.greet}</h2>
        <li>This is the first option</li>
        <li>This is the second option</li>
        <li>This is the third option</li>
    </aside>
    )
}

export default Sidebar;