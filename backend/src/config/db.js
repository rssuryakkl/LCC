const mongoose = require("mongoose");
const { spawn } = require("child_process");
const fs = require("fs");

function autoStartMongoDB() {
  const mongodPaths = [
    "C:\\data\\bin\\mongod.exe",
    "C:\\Program Files\\MongoDB\\Server\\9.0\\bin\\mongod.exe"
  ];

  const mongodExe = mongodPaths.find(p => fs.existsSync(p));
  if (!mongodExe) return false;

  const dbPath = "C:\\data\\db";
  if (!fs.existsSync(dbPath)) {
    fs.mkdirSync(dbPath, { recursive: true });
  }

  try {
    console.log("MongoDB is not running. Launching MongoDB automatically...");
    const child = spawn(mongodExe, ["--dbpath", dbPath, "--bind_ip", "127.0.0.1", "--port", "27017"], {
      detached: true,
      stdio: "ignore",
      windowsHide: true
    });
    child.unref();
    return true;
  } catch (err) {
    console.error("Failed to auto-start MongoDB:", err.message);
    return false;
  }
}

async function connectDB(retries = 2) {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Warehouse";
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    if (error.message.includes("ECONNREFUSED") && retries > 0) {
      const started = autoStartMongoDB();
      if (started) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return connectDB(retries - 1);
      }
    }
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
