import { expect } from 'chai';
import sinon from 'sinon';
import * as types from '../../../src/state/action-types';

import {
  setProfileField,
  saveProfile,
  __RewireAPI__ as profileActionsRewireAPI
} from '../../../src/state/actions/profile-actions';

describe('User Profile Actions', () => {
  let noop;

  before(() => {
    noop = () => {};
  });

  describe('When setting a user profile field', () => {
    let optionsFake;

    before(() => {
      optionsFake = { key: 'some-key', value: 'some value' };
    });

    it('should return a action object with SET_PROFILE_FIELD type', () => {
      const result = setProfileField(optionsFake);
      expect(result.type).to.be.equal(types.SET_PROFILE_FIELD);
    });

    it('should return `key` and `value` as informed', () => {
      const result = setProfileField(optionsFake);
      expect(result).to.have.property('key').and.to.be.equal(optionsFake.key);
      expect(result).to.have.property('value').and.to.be.equal(optionsFake.value);
    });
  });

  describe('when saving user profile information', () => {
    let saveProfileStub,
        dispatchStub,
        getStateStub,
        profileFake;

    before(() => {
      profileFake = {
        'first-name': 'First',
        'last-name': 'Last',
        'phone': '4166666666',
        'address': 'some address'
      };

      dispatchStub = sinon.stub();
      getStateStub = sinon.stub().returns({ profile: profileFake });
      saveProfileStub = sinon.stub().returns(Promise.resolve(profileFake));
      profileActionsRewireAPI.__Rewire__('api', {
        saveProfile: saveProfileStub
      });
    });

    after(() => {
      profileActionsRewireAPI.__ResetDependency__('api');
    });

    it('should persist the information on the server', () => {
      saveProfileStub.reset();

      const resultFuncton = saveProfile();
      resultFuncton(dispatchStub, getStateStub);

      expect(saveProfileStub.calledOnce).to.be.true;
    });

    describe('after synching with the server', () => {
      it('should dispatch action type `SAVE_PROFILE`', (done) => {
        dispatchStub.reset();

        const resultFuncton = saveProfile();
        resultFuncton(dispatchStub, getStateStub)
        .then(function(result) {

          expect(dispatchStub.getCall(0).args[0]).to.have.property('type').to.be.equal(types.SAVE_PROFILE);
          done();

        });

      });

      it('should dispatch the updated profile', () => {

      });
    });
  });
});


// export function saveProfile() {
//   return function(dispatch, getState) {
//     const state = getState();
//
//     api.saveProfile(state.profile)
//     .then(function(profile) {
//       return dispatch({
//         type: types.SAVE_PROFILE,
//         profile
//       });
//     });
//   };
// }
