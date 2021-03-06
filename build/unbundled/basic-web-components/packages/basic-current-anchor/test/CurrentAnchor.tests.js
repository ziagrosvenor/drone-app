import { assert } from 'chai';
import CurrentAnchor from '../src/CurrentAnchor'; // jshint ignore:line


describe("CurrentAnchor", () => {

  it("makes the link current if its destination is the current location", () => {
    let element = document.createElement('basic-current-anchor');
    assert(!element.active);
    assert(!element.classList.contains('current'));
    element.href = window.location.href;
    assert(element.current);
    assert(element.classList.contains('current'));
  });

  it("makes an area link current if its destination is a prefix of the current location", () => {
    let element = document.createElement('basic-current-anchor');
    element.href = window.location.origin;
    assert(!element.current);
    assert(!element.classList.contains('current'));
    element.areaLink = true;
    assert(element.current);
    assert(element.classList.contains('current'));
  });

});
