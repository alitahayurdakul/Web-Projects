import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div className="NotFound-container">
            <h1>Not Found</h1>
            <p>For Homepage: <Link className="link" to="/">this</Link></p>
            <p>For Update: <Link className="link" to="/update">this</Link></p>
            <p>For Add: <Link className="link" to="/add">this</Link></p>
        </div>
    )
}
export default NotFound;
