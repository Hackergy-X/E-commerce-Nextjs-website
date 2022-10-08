import Navbar from  './Navbar';

const layout = (props) => {
    return(
        <div className="layout">
            <Navbar />
            {props.children}
        </div>
    )
}

export default layout;