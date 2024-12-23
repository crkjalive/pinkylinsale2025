const isLogged = (req, res, next) => {
  const logged = true
  if (logged) {
    next()
  } else {
    res.send("Usuario debe logearse para acceder a las rutas CRUD")
  }
}
exports.isLogged = isLogged
