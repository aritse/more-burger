module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burgerName: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = function(models) {
    Burger.belongsTo(models.Customer);
  };

  return Burger;
};
