//define our function

function toUpperCase(text) {
    const result = text.toUpperCase();
    console.log(result);
    return result;
}
//Our test case
test('toUpperCase changes text to uppercase', () => {
    console.log = jest.fn();
//runs the function with 'hello' and expects 'HELLO' as output.
    expect(toUpperCase('hello')).toBe('HELLO');
//Checks in console.log has been called with 'HELLO'
    expect(console.log).toHaveBeenCalledWith('HELLO');
})