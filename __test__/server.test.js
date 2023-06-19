'use strict'

require('dotenv').config()

const supertest = require('supertest')
const { app } = require('../src/server')
const { db } = require('../src/models')
const muke = supertest(app)

describe('Server test', () => {
it('should respond with 404 on a bad route', async () => {
    const res = await muke.get('/2');
    expect(res.status).toEqual(404);
  })
  it('should respond with 404 on a bad method', async () => {
    const res = await muke.put('/');
    expect(res.status).toEqual(404);
  })

})

beforeAll(async () => {
    await db.sync()
})

afterAll(async () => {
    await db.drop()
})

describe('CRUD', () => {
    it('should create a record using POST', async () => {
        const res = await muke.post('/clothes').send({
            name: "Shirt",
            color: "Blue",
            size: "Medium"
        })
        expect(res.status).toBe(201);
    })
    it('should read a list of records using GET', async () => {
        const res = await muke.get('/clothes')
        expect(res.status).toBe(200);
    })
    it('should read a record using GET', async () => {
        const res = await muke.get('/clothes/1')
        expect(res.status).toBe(200);
    })
    it('should update a record using PUT', async () => {
        const res = await muke.put('/clothes/1').send({
            name: "Shirt",
            color: "Blue",
            size: "small"
        })
        expect(res.status).toBe(202);
    })
    it('should destroy a record using DELETE', async () => {
        const res = await muke.delete('/clothes/1')
        expect(res.status).toBe(204);
    })

})
