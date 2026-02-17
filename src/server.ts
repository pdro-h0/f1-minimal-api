import fastify from 'fastify';
import cors from "@fastify/cors"
const server = fastify({ logger: true })

server.register(cors, {
  origin: "*"
})

const teams = [
  { id: 1, name: "McLaren", base: "Working, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "Williams", base: "Grove, United Kingdom" },
  { id: 8, name: "RB (Visa Cash App RB)", base: "Faenza, Italy" },
  { id: 9, name: "Sauber", base: "Hinwil, Switzerland" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" }
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "George Russell", team: "Mercedes" },
  { id: 6, name: "Oscar Piastri", team: "McLaren" },
  { id: 7, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 8, name: "Carlos Sainz", team: "Williams" },
  { id: 9, name: "Alexander Albon", team: "Williams" },
  { id: 10, name: "Pierre Gasly", team: "Alpine" }
];

server.get("/team", async (req, res) => {
  res.type("application/json").code(200)
  res.send(teams)
  return
})

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200)
  res.send(drivers)
  return
})

interface DriversRequest {
  id: string
}
server.get<{ Params: DriversRequest }>("/drivers/:id", async (req, res) => {
  const { id } = req.params
  const driver = drivers.find(driver => driver.id === +id)
  if (!driver) {
    res.status(404).send("Driver not found")
    return
  }
  res.type("application/json").code(200)
  res.send({ driver })
  return
})

server.listen({ port: 3333 }, () => {
  console.log("SERVER RUNNING ON PORT 3333")
})