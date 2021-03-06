import { assert } from 'chai';
import AttributeMarshalling from '../src/AttributeMarshalling';


/* Element with camelCase property name */
class ElementWithCamelCaseProperty extends AttributeMarshalling(HTMLElement) {
  get customProperty() {
    return this._customProperty;
  }
  set customProperty(value) {
    this._customProperty = value;
  }
}
document.registerElement('element-with-camel-case-property', ElementWithCamelCaseProperty);


describe("AttributeMarshalling mixin", () => {

  it("marshals hyphenated attribute to corresponding camelCase property", () => {
    let element = document.createElement('element-with-camel-case-property');
    assert.isUndefined(element.customProperty);
    element.setAttribute('custom-property', "Hello");
    assert.equal(element.customProperty, "Hello");
  });

});
