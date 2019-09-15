const request = require('supertest');
const router = require('../api/server.js');

describe('events route is working properly', () => {
    it('returns the proper http status code on get', async () => {
        const code = 200; 
        const res = await request(router).get('/api/events');
        expect(res.status).toBe(code);
    })
    
    it('returns proper data type', async () => {
        const d = "application/json"
        const res = await request(router).get('/api/events');
        expect(res.type).toBe(d)
    })
})