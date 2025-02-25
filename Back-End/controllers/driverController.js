const { Driver, User } = require('../models/tableSchema');

exports.registerDriver = async (req, res) => {
    try {
        const { vehicleType, origin, destination, price, registrationNumber, licenseNumber, licenseHolderName } = req.body;
        
        const driver = await Driver.create({
            userId: req.user.userId, 
            vehicleType,
            origin,
            destination,
            price,
            registrationNumber,
            licenseNumber,
            licenseHolderName,
            status: 'pending'
        });

        res.status(201).json(driver);
    } catch (error) {
        res.status(500).json({ error: 'Failed to register driver' });
    }
};

exports.updateAvailability = async (req, res) => {
    try {
        const driver = await Driver.findOne({ where: { userId: req.user.userId } });

        if (!driver) return res.status(404).json({ message: 'Driver not found' });

        driver.availability = req.body.availability;
        await driver.save();

        res.json({ message: 'Availability updated', driver });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update availability' });
    }
};

exports.getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll({ include: User });
        res.json(drivers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch drivers' });
    }
};
