import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/*
    Métodos HTTP: Get, Post, Put, Patch, Delete
*/

app.register(cors)

app.get('/habits', async () => {
    const habits = await prisma.habit.findMany({
        where: { 
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running...');
}) 