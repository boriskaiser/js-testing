module("test", {
    setup: function () {console.log('Setup');},
    teardown:function () {console.log('Teardown');}
});
test('Addition of 1 and 1', function () {
    equal(add(1, 1), 2, '1 and 1 equals 2');
});

test('Addition of 1 and 3', function () {
    equal(add(1, 3), 5, '1 and 3 equals 5');
});

module("test2");
test('Test if true is true', function () {
    ok(true);
});