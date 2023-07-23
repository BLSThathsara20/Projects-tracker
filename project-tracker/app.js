const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

// Allow all origins for development purposes (update this in production)
app.use(cors());

const port = 5002; // Change the port number as per your preference

// MySQL database configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "personal_project_tracker",
};

// Create a MySQL connection
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
  
    // Create the database if it doesn't exist
    const createDbQuery = `CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``; // Wrap database name with backticks
    connection.query(createDbQuery, (err) => {
      if (err) {
        console.error("Error creating database:", err);
        return;
      }
  
      // Use the database for further queries
      connection.query(`USE ${dbConfig.database}`, (err) => {
        if (err) {
          console.error("Error using database:", err);
          return;
        }
  
        // Create the 'projects' table if it doesn't exist
        const createTableQuery = `
          CREATE TABLE IF NOT EXISTS projects (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            deadline DATE NOT NULL,
            status ENUM('not_started', 'in_progress', 'completed') NOT NULL,
            description TEXT NOT NULL,
            assigner VARCHAR(255) NOT NULL,
            tasks JSON NOT NULL
          )
        `;
  
        connection.query(createTableQuery, (err) => {
          if (err) {
            console.error("Error creating 'projects' table:", err);
            return;
          }
  
          console.log("Connected to MySQL and database is ready!");
        });
      });
    });
  });

// Middleware to parse request bodies as JSON
app.use(express.json());

// Create a new project
app.post("/api/projects", (req, res) => {
  const { name, deadline, status, description, assigner, tasks } = req.body;
  if (!name || !deadline || !status || !description || !assigner || !tasks) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const insertQuery =
    "INSERT INTO projects (name, deadline, status, description, assigner, tasks) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(
    insertQuery,
    [name, deadline, status, description, assigner, JSON.stringify(tasks)],
    (err, result) => {
      if (err) {
        console.error("Error creating project:", err);
        return res.status(500).json({ error: "Failed to create project." });
      }

      const projectId = result.insertId;
      res.status(201).json({
        id: projectId,
        name,
        deadline,
        status,
        description,
        assigner,
        tasks,
      });
    }
  );
});

// Get all projects
app.get("/api/projects", (req, res) => {
  const selectQuery = "SELECT * FROM projects";
  connection.query(selectQuery, (err, results) => {
    if (err) {
      console.error("Error fetching projects:", err);
      return res.status(500).json({ error: "Failed to fetch projects." });
    }

    res.json(results);
  });
});

// Update a project
app.put("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  const { name, deadline, status, description, assigner, tasks } = req.body;

  if (!name || !deadline || !status || !description || !assigner || !tasks) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const updateQuery =
    "UPDATE projects SET name = ?, deadline = ?, status = ?, description = ?, assigner = ?, tasks = ? WHERE id = ?";
  connection.query(
    updateQuery,
    [name, deadline, status, description, assigner, JSON.stringify(tasks), id],
    (err, result) => {
      if (err || result.affectedRows === 0) {
        console.error("Error updating project:", err);
        return res.status(500).json({ error: "Failed to update project." });
      }

      res.json({
        id,
        name,
        deadline,
        status,
        description,
        assigner,
        tasks,
      });
    }
  );
});

// Update project status
app.put("/api/projects/:id/status", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    if (!status) {
      return res.status(400).json({ error: "Status field is required." });
    }
  
    try {
      const connection = await pool.getConnection();
      const updateQuery = "UPDATE projects SET status = ? WHERE id = ?";
      const result = await connection.query(updateQuery, [status, id]);
  
      if (result[0].affectedRows === 0) {
        return res.status(500).json({ error: "Failed to update project status." });
      }
  
      res.json({ id, status });
  
      connection.release();
    } catch (err) {
      console.error("Error updating project status:", err);
      res.status(500).json({ error: "Failed to update project status." });
    }
  });
  

// Delete a project
app.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM projects WHERE id = ?";
  connection.query(deleteQuery, [id], (err, result) => {
    if (err || result.affectedRows === 0) {
      console.error("Error deleting project:", err);
      return res.status(500).json({ error: "Failed to delete project." });
    }

    res.json({ id, message: "Project deleted successfully." });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
