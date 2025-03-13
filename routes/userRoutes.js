// app.get('/api/users', async (req, res) => {
//     try {
//         const result = await client.query('SELECT * FROM users');
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });