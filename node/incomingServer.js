const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    // Define the directory path you want to read files from
    const directoryPath = 'C:/Users/Flavio/Desktop/INCOMING_SCANS'

    // Set CORS headers to allow requests from any origin (*)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    // Check if it's a preflight request (OPTIONS) and respond immediately
    if (req.method === 'OPTIONS') {
        res.writeHead(204) // No content needed for preflight
        res.end()
        return
    }

    // Use the fs.readdir() function to read the files in the directory
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Failed to read directory' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ files }))
        }
    })
})

const port = 3000 // Define the port for your server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
