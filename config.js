module.exports = {
  // Cambiar a false luego de la primera ejeción
  db: { setup: true },
  secret: process.env.PHOTOBOOKS_SECRET || 'ph0t0b00ks'
}
