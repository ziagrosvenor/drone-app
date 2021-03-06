import { assert } from 'chai';
import Composable from '../src/Composable';


/* Element created via ES5-compatible .compose() */
let Es5Class = Composable(HTMLElement).compose({
  get customProperty() {
    return 'property';
  },
  method: function() {
    return 'method';
  },
  value: 'value'
});
document.registerElement('es5-class', Es5Class);


describe("Composable mixin", () => {

  it("can create component class with ES5-compatible .compose()", () => {
    let element = document.createElement('es5-class');
    assert.equal(element.customProperty, 'property');
    assert.equal(element.method(), 'method');
    assert.equal(element.value, 'value');
  });

});
