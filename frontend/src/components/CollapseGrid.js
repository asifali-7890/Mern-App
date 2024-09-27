import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const CollapsibleGrid = ({ data, handleDelete }) => {
    const [collapsed, setCollapsed] = React.useState(Array(data.length).fill(true)); // Initialize collapse state for each item

    const toggleCollapse = (index) => {
        setCollapsed((prevCollapsed) =>
            prevCollapsed.map((isCollapsed, i) => (i === index ? !isCollapsed : isCollapsed))
        );
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((ele, index) => (
                <div key={ele._id} className="col">
                    <div
                        className={`card ${collapsed[index] ? 'collapse show' : 'collapse'}`} // Manage collapse state
                        onClick={() => toggleCollapse(index)} // Toggle collapse on click
                    >
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                            <p className="text-muted">{ele.age}</p>
                            <div className="flex justify-between"> {/* Added flex container for alignment */}
                                <Link to={`/${ele._id}`} className="card-link">Edit</Link>
                                <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CollapsibleGrid;