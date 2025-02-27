import express from 'express'; 
  
const app = express();
const PORT = 3000

const responseHealth = (req, res) => {
  console.log({ req })
  res.send("I am healthy");
}

app.get("/health", responseHealth);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
})
