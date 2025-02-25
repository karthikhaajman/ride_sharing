const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const User = sequelize.define('User', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false, validate: { isEmail: true } },
}, { timestamps: true });

const Vehicle = sequelize.define('Vehicle', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false, references: { model: User, key: 'id' } },
    registrationNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
    type: { type: DataTypes.ENUM('car', 'bike'), allowNull: false },
    licenseNumber: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

Vehicle.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

const Driver = sequelize.define('Driver', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false, references: { model: User, key: 'id' } },
    vehicleType: { type: DataTypes.ENUM('car', 'bike'), allowNull: false },
    availability: { type: DataTypes.BOOLEAN, defaultValue: true },
    origin: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    registrationNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
    licenseNumber: { type: DataTypes.STRING, allowNull: false },
    licenseHolderName: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('pending', 'approved', 'rejected'), defaultValue: 'pending' },
    helmetRequired: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { timestamps: true });

Driver.belongsTo(User, { foreignKey: 'userId' });

const Rider = sequelize.define('Rider', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false, references: { model: User, key: 'id' } },
    origin: { type: DataTypes.STRING, allowNull: false },
    destination: { type: DataTypes.STRING, allowNull: false },
    vehicleType: { type: DataTypes.ENUM('car', 'bike', 'any'), defaultValue: 'any' },
    genderPreference: { type: DataTypes.ENUM('male', 'female', 'any'), defaultValue: 'any' },
}, { timestamps: true });

Rider.belongsTo(User, { foreignKey: 'userId' });

const Ride = sequelize.define('Ride', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    driverId: { type: DataTypes.UUID, allowNull: false, references: { model: Driver, key: 'id' } },
    riderId: { type: DataTypes.UUID, allowNull: true, references: { model: Rider, key: 'id' } },
    vehicleType: { type: DataTypes.ENUM('car', 'bike'), allowNull: false },
    status: { type: DataTypes.ENUM('pending', 'ongoing', 'completed', 'cancelled'), defaultValue: 'pending' },
    seatsAvailable: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    src: { type: DataTypes.STRING, allowNull: false },
    dest: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

Ride.belongsTo(Driver, { foreignKey: 'driverId' });
Ride.belongsTo(Rider, { foreignKey: 'riderId' });

const Rating = sequelize.define('Rating', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    rideId: { type: DataTypes.UUID, allowNull: false, references: { model: Ride, key: 'id' } },
    givenBy: { type: DataTypes.UUID, allowNull: false, references: { model: User, key: 'id' } },
    rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
    feedback: { type: DataTypes.TEXT, allowNull: true },
}, { timestamps: true });

Rating.belongsTo(Ride, { foreignKey: 'rideId' });
Rating.belongsTo(User, { foreignKey: 'givenBy' });

const Auth = sequelize.define('Auth', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false, references: { model: User, key: 'id' } },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

Auth.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Auth, { foreignKey: 'userId' });

const TripHistory = sequelize.define('TripHistory', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    riderId: { 
        type: DataTypes.UUID, 
        allowNull: false, 
        references: { model: Rider, key: 'id' } 
    },
    driverId: { 
        type: DataTypes.UUID, 
        allowNull: false, 
        references: { model: Driver, key: 'id' } 
    },
    rideId: { 
        type: DataTypes.UUID, 
        allowNull: false, 
        references: { model: Ride, key: 'id' } 
    },
    fare: { type: DataTypes.FLOAT, allowNull: false },
    paymentStatus: { 
        type: DataTypes.ENUM('pending', 'completed', 'failed'), 
        defaultValue: 'pending' 
    },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { timestamps: true });

TripHistory.belongsTo(Rider, { foreignKey: 'riderId' });
TripHistory.belongsTo(Driver, { foreignKey: 'driverId' });
TripHistory.belongsTo(Ride, { foreignKey: 'rideId' });


module.exports = { 
    User, 
    Vehicle, 
    Driver, 
    Rider, 
    Ride, 
    Rating, 
    Auth, 
    TripHistory 
};
