import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.get("/", (req, res) => {
  res.send("Servidor ON");
});

app.get("/api/user", (req, res) => {
  res.send(users);
});

app.post("/api/user", (req, res) => {
  let user = req.body;

  if (!user.firstName || !user.lastName || !user.id) {
    return res
      .status(400)
      .send({ status: "error", error: "Valores incompletos" });
  }

  users.push(user);
  res.send({ status: "success", message: "Usuario creado" });
});

app.put("/api/user/:id", (req, res) => {
  const userID = req.params.id;
  const updateUsers = req.body;

  const index = users.findIndex((user) => user.id === +userID);

  if (index === -1) {
    return res
      .status(404)
      .send({ status: "Error", error: "Usuario no encontrado" });
  }

  users[index] = updateUsers;
  res.send({ status: "success", message: users[index] });
});

app.delete("/api/user/:id", (req, res) => {
  const userID = req.params.id;
  const currentLength = users.length;

  users = users.filter((user) => +userID !== user.id);

  if (currentLength === users.length) {
    return res
      .status(404)
      .send({ status: "Error", error: "Usuario no encontrado" });
  }

  res.send({ status: "success", message: users });
});

app.listen(8080, () => {
  console.log("Servidor en puerto 8080");
});
