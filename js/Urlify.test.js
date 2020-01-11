import { describe, it } from 'mocha';
import { expect } from 'chai';
import { urlify } from './Urlify';

describe('Urlify', function () {
  it('should replace spaces with %20', function () {
    expect(urlify('Mr John Smith    ', 13)).to.equal('Mr%20John%20Smith');
  });
});
