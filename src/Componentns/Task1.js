import React from 'react'

function Task1() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Task 1</h1>
            <h2>What is Axios?</h2>
            <p>Axios is a popular promise-based HTTP client for both the browser and Node.js. Think of it as a handy tool that makes it easier to send and receive data from web servers using JavaScript.</p>

            <h2>Axios vs. fetch(): Advantages</h2>
            <p>While the built-in <code>fetch()</code> API is powerful, Axios offers some compelling advantages:</p>

            <ul>
                <li><strong>Automatic JSON Data Transformation:</strong> Axios automatically tries to parse the response data as JSON, saving you the extra step of calling <code>.json()</code> like you often do with <code>fetch()</code>.</li>
                <li><strong>Built-in Request Interceptors:</strong> You can easily intercept requests before they're sent. This is super useful for things like adding authentication tokens or logging.</li>
                <li><strong>Built-in Response Interceptors:</strong> Similarly, you can intercept responses before they're handled by your code. This allows for global error handling or data transformation.</li>
                <li><strong>Wider Browser Support:</strong> Axios has better support for older browsers compared to <code>fetch()</code>, which might require polyfills.</li>
                <li><strong>More Concise Error Handling:</strong> Axios provides more detailed error objects, making it easier to pinpoint the cause of a request failure.</li>
                <li><strong>Automatic Prevention Against Cross-Site Request Forgery (CSRF):</strong> Axios has built-in mechanisms to help protect against CSRF attacks.</li>
            </ul>

            <p>In short, while <code>fetch()</code> is a capable standard, Axios often streamlines the process of making HTTP requests with its added features and ease of use.</p>
            <hr/>
        </div>
    )
}

export default Task1