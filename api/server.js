const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Reescritura de rutas
server.use(jsonServer.rewriter({
    '/api/drivers/:id/show': '/drivers/:id',
    '/api/orders/:id/show': '/ordersOnTrip/:id',
    '/api/vehicles/:id/show': '/vehicles/:id',
}))

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
