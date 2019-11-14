const request = require('supertest');

const server = require('./server');

it('should set db environment to testing', function() {
  expect(process.env.DB_ENV).toBe('testing');
})

describe('server', function(){
  describe('GET /', function(){
    it(`should return 'api': 'up' `, function(){
      return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      })
    })
  })
})


describe('server', function(){
  describe('POST /smurfs', function(){
    it(`should return json formatted response `, function(){
      return request(server)
      .get('/smurfs')
      .then(res => {
        expect(res.type).toMatch(/json/i);
      })
    })
  })
})

describe('server', function(){
  describe('GET /smurfs', function(){
      it('should return all smurfs', function(){
          return request(server)
          .get('/smurfs')
          .then(res=>expect(res.status).toBe(200))
      })
  })
})

describe('server', function(){
  describe('GET /smurfs', function(){
    it(`should return name property with the value jojo inside the body `, function(){
      return request(server)
      .get('/smurfs')
      .then(res => {
        expect(res.body.name).toBe("jojo");
      })
    })
  })
})
