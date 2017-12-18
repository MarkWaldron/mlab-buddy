const config = require('../config');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const system = require('../../index');

describe('Lib functions', () => {
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

  describe('mLab Buddy Accounts', () => {
     reqOptions.accountId = config.api.accountId;
    
    it('Should get account id', () => {
      expect(system.accounts.getAccount(reqOptions)).to.eventually.have.property('_id');
    });

    it('Should get account id', () => {
      expect(system.accounts.getAccount(reqOptions)).to.eventually.have.property('name');
    });

    it('Should get charges for accounts', () => {
      expect(system.accounts.getCharges(reqOptions)).to.eventually.be.a('array');
    });

    it('Should get charges for accounts', () => {
      expect(system.accounts.getInvoices(reqOptions)).to.eventually.be.a('array');
    });

    it('Should get maintenance events for accounts', () => {
      expect(system.accounts.getMaintenanceEvents(reqOptions)).to.eventually.be.a('array');
    });
    
    it('Should fail with invalid credentials', () => {
      let brokenOptions = Object.assign({}, reqOptions, {
        accountId: '123',
      });
      system.accounts.getAccount(brokenOptions)
      .then(res => {
        expect(res.code).to.be.equal(403);
        expect(res.description).to.be.equal('Forbidden');
        expect(res.message).to.be.equal('User does not have permission to perform operation');
      });
    });
  });

  describe('mLab Buddy Clouds', () => {
    reqOptions.cloudId = config.api.cloudId;
   
   it('Should get clouds', () => {
     expect(system.clouds.getClouds(reqOptions)).to.eventually.be.a('array');
   });

   it('Should get clouds', () => {
     expect(system.clouds.getCloud(reqOptions)).to.eventually.be.a('object');
   });
   
   it('Should fail with invalid credentials', () => {
     let brokenOptions = Object.assign({}, reqOptions, {
       cloudId: '123'
     });
     system.clouds.getCloud(brokenOptions)
     .then(res => {
      expect(res.code).to.be.equal(500);
      expect(res.description).to.be.equal('Internal Server Error');
     });
   });
 });

 describe('mLab Buddy Plans', () => {
  reqOptions.planId = config.api.planId;
 
 it('Should get plans', () => {
   expect(system.plans.getPlans(reqOptions)).to.eventually.be.a('array');
 });

 it('Should get plan', () => {
   expect(system.plans.getPlan(reqOptions)).to.eventually.be.a('object');
 });
 
 it('Should fail with invalid credentials', () => {
   let brokenOptions = Object.assign({}, reqOptions, {
     planId: '123'
   });
   system.plans.getPlan(brokenOptions)
   .then(res => {
    expect(res.code).to.be.equal(404);
    expect(res.description).to.be.equal('Not Found');
   });
 });
});


});