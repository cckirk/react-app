function Main(props) {
    const mainStyle = {
        /* */
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
    <div>
        style = {mainStyle}
        <h2>{props.greet}</h2> 
        <p>this is a paragraph tag</p>
    </div>)
}

export default Main