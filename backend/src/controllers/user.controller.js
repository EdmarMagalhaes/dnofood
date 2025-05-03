const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUsers(req, res) {
    const users = await prisma.user.findMany();
    res.json(users);
}

async function createUser(req, res) {
    const { name, email, password, address } = req.body;
    const user = await prisma.user.create({
        data: { name, email, password, address }
    });
    res.json(user);
}

module.exports = { getUsers, createUser };