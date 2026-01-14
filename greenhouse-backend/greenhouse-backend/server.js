const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Parser } = require('json2csv');

const app = express();
app.use(cors()); // Allows your React frontend to talk to this server
app.use(express.json());

// --- 1. MONGODB CONNECTION ---
const mongoURI = "mongodb+srv://CKRPS75:CKRPS%4075@cluster75.iy5v1jb.mongodb.net/?appName=Cluster75"; 

mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ Connection Error:", err));

// --- 2. DATA SCHEMAS ---
const LogSchema = new mongoose.Schema({ 
    temperature: Number, 
    humidity: Number, 
    soil: Number, 
    light: Number, 
    time: { type: Date, default: Date.now } 
});

const ConfigSchema = new mongoose.Schema({
    tempLimit: { type: Number, default: 31 },
    soilLimit: { type: Number, default: 30 },
    override: { type: Boolean, default: false },
    fanStatus: { type: Boolean, default: false },
    pumpStatus: { type: Boolean, default: false }
});

const Log = mongoose.model('Log', LogSchema);
const Config = mongoose.model('Config', ConfigSchema);

// --- 3. API ROUTES ---

// NEW: Endpoint for React to get the LATEST sensor readings
app.get('/api/latest', async (req, res) => {
    try {
        const latestLog = await Log.findOne().sort({ time: -1 }); // Get newest entry
        const settings = await Config.findOne() || await Config.create({});
        res.status(200).json({ sensors: latestLog, config: settings });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// ESP32 Sync: Receives data + Sends Settings
app.post('/api/sync', async (req, res) => {
    try {
        const newLog = new Log(req.body);
        await newLog.save(); // Save ESP32 data to MongoDB

        let settings = await Config.findOne() || await Config.create({});
        res.status(200).json(settings); // Send settings back to ESP32
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Manual Override Control (For React Dashboard)
app.post('/api/admin/config', async (req, res) => {
    try {
        const updated = await Config.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// CSV Export
app.get('/api/export', async (req, res) => {
    try {
        const logs = await Log.find().sort({ time: -1 }).lean();
        const fields = ['time', 'temperature', 'humidity', 'soil', 'light'];
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(logs);

        res.header('Content-Type', 'text/csv');
        res.attachment('greenhouse_report.csv');
        res.send(csv);
    } catch (err) {
        res.status(500).send("Export failed");
    }
});

const PORT = 5050;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));