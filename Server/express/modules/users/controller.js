const Usuario = require("../../../models/Usuario");

module.exports = {
  getAll: async (_, res) => {
    try {
      const data = await Usuario.find({});
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send({
        status: "Hubo un error en la consulta",
        message: error,
      });
    }
  },
  create: async ({ body }, res) => {
    try {
      const { telefono } = body;

      /* Checar si el usuario existe con el telefono */
      const existeUsuario = await Usuario.findOne({ telefono });
      if (existeUsuario) {
        throw new Error("El Usuario ya existe");
      }

      /* Crear Usuario */

      const usuario = new Usuario(body);
      await usuario.save();

      res.status(200).send({
        status: "Success",
        message: "Usuario creado con éxito",
        data: usuario,
      });
    } catch (error) {
      res.status(400).send({
        status: "Hubo un error al crear el usuario",
        message: error.toString(),
      });
    }
  },
};
