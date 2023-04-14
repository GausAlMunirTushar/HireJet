import app from './app.js';

// Port
const PORT = process.env.PORT || 8080;

// Server Listening
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} Mode on http://localhost:${PORT}`);
})