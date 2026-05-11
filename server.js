const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.static("public"));

// connect sqlite
const db = new sqlite3.Database("./data.db");

// create table
db.run(`
    CREATE TABLE IF NOT EXISTS parking_prices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT,
        location TEXT,
        price INTEGER
    )
`);

// API：取得所有資料
app.get("/prices", (req, res) => {
    db.all("SELECT * FROM parking_prices", [], (err, rows) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(rows);
        }
    });
});

// API：新增資料
app.post("/prices", (req, res) => {
    const { date, location, price } = req.body;

    db.run(
        "INSERT INTO parking_prices (date, location, price) VALUES (?, ?, ?)",
        [date, location, price],
        function (err) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    message: "新增成功",
                    id: this.lastID
                });
            }
        }
    );
});

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});