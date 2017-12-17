const config = require('../config');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const system = require('../../index');

describe('test function', () => {
  let reqOptions = {
    accessKey: config.api.key,
    accessKeySecret: config.api.secret,
    timeout: 10000,
  };
  
  describe('mLab Buddy Me', () => {
    it('Should have property username', () => {
      expect(system.me.getMe(reqOptions)).to.eventually.have.property('username');
    });
    
    it('Should have property email', () => {
      expect(system.me.getMe(reqOptions)).to.eventually.have.property('email');
    });
    
    it('Should have property account', () => {
      expect(system.me.getMe(reqOptions)).to.eventually.have.property('account');
    });

    it('Should fail with invalid credentials', () => {
      let brokenOptions = Object.assign({}, reqOptions, {
        accessKey: '',
      });
      system.me.getMe(brokenOptions)
      .then(res => {
        expect(res.code).to.be.equal(403);
        expect(res.description).to.be.equal('Forbidden');
        expect(res.message).to.be.equal('User does not have permission to perform operation');
      });
    });
  
  });
});