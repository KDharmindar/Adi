let multipleValues: number | string | boolean;

type complexType = number | string | boolean;
type anotherComplexType = number & string & boolean;


let newValue: complexType;
let anotherVar:anotherComplexType;


newValue = "First String";
newValue = 3;
newValue = true;

multipleValues = 2;
multipleValues = "hello world";
multipleValues = false;