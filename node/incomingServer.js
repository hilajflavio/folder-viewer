const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    // Define the directory path you want to read files from
    const directoryPath = './dir/INCOMING_SCANS'

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
            // Create an array to store file information
            const fileData = []

            // Loop through the files and get information about each file
            files.forEach((file) => {
                const filePath = path.join(directoryPath, file)
                fs.stat(filePath, (statErr, stats) => {
                    if (statErr) {
                        console.error('Error getting file stats:', statErr)
                    } else {
                        // Calculate a relative path based on the server's location
                        const relativePath = `\\node\\${path
                            .relative(__dirname, filePath)
                            .replace(/\//g, '\\')}`

                        // Push file information (name and relative path) to the array
                        fileData.push({
                            name: file,
                            path: relativePath,
                            size: stats.size // Add more file properties as needed
                        })

                        // If all files have been processed, send the response
                        if (fileData.length === files.length) {
                            res.writeHead(200, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ files: fileData }))
                        }
                    }
                })
            })
        }
    })
})

const port = 3000 // Define the port for your server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
