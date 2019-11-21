const functions = require('./functions');

// toBe
test('Adds 3 * 2 to equal 6', () => {
    expect(functions.add(3,2)).toBe(6);

});

// Not
test('Adds 3 * 2 NOT equal 5', () => {
    expect(functions.add(3,2)).not.toBe(7);

});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();

});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ 
     firstName: 'Rafael',
     lastName: 'Sabino'
    });
});


// Less than and great than

test('Should be under 1600', () =>{
    const load1 = 800;
    const load2 = 600;
    expect(load1+load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team',() => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('Admin should be in usernames',() => {
  usernames = ['rafa', 'goku', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

//Promise

test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
}); 


// Async Await
 test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});