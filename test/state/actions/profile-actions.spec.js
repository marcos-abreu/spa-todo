import { expect } from 'chai';
import { setProfileField } from '../../../src/state/actions/profile-actions';
import * as types from '../../../src/state/action-types';

describe('User Profile Actions', () => {
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
});
