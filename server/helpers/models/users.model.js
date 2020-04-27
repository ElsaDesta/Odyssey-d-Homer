module.exports = (Sequelize, connector) => {
  const users = connector.define(
    "users",
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return users;
};
