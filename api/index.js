let users = []; // Array to store user data

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (use specific domains in production)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle POST request to store user data
    if (req.method === 'POST') {
        const userData = JSON.parse(req.body); // Parse the incoming JSON data
        userData.timestamp = new Date().toISOString(); // Add a timestamp
        users.push(userData); // Store user data in the array
        res.status(200).json({ message: 'User data stored successfully!' }); // Respond with success message
    } 
    // Handle GET request to fetch user data
    else if (req.method === 'GET') {
        const sortedUsers = users.sort
