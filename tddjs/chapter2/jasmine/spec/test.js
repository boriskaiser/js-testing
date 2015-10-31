describe('Add', function () {
    beforeEach(function () {
        console.log('Setup');
    });
    afterEach(function () {
        console.log('Teardown');
    });

    it('Additional of 1 and 1', function () {
        expect(add(1, 1)).toEqual(2);
    });

    it('Additional of 1 and 3', function () {
        expect(add(1, 3)).toEqual(5);
    });

});