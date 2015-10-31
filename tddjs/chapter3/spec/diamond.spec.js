describe("Print Diamond", function () {

    var diamond;

    beforeEach(function () {
        diamond = new Diamond('A');
    });

    describe("To String", function () {
        it("should return A, if A is provided", function () {
            expect(diamond.toString()).toEqual('A');
        });

        it("should return '  A\n B B\nC   C\n B B\n  A', if C is provided", function () {
            var diamond = new Diamond('C');
            var result = '  A\n B B\nC   C\n B B\n  A';
            expect(diamond.toString()).toEqual(result);
        });
    });

    describe("Line", function () {
        it("should return ' C   C' if C and D are provided", function () {
            expect(diamond.line('C', 'D')).toEqual(' C   C');
        });
        it("should return 'D     D' if D and D are provided", function () {
            expect(diamond.line('D', 'D')).toEqual('D     D');
        });
        it("should return 'D     D' if D and D are provided", function () {
            expect(diamond.line('A', 'B')).toEqual(' A');
        });
    });

    describe("Inner Space", function () {
        it("should return one space, if B is provided", function () {
            expect(diamond.innerSpace('B')).toEqual(' ');
        });
        it("should return three spaces, if C is provided", function () {
            expect(diamond.innerSpace('C')).toEqual('   ');
        });
        it("should return an empty string, if A is provided", function () {
            expect(diamond.innerSpace('A')).toEqual('');
        });
    });

    describe("Outer Space", function () {
        it("should return one space, if B is the current line and C is the widest point", function () {
            expect(diamond.outerSpace('B', 'C')).toEqual(' ');
        });
        it("should return two spaces, if C is the current line and E is the widest point", function () {
            expect(diamond.outerSpace('C', 'E')).toEqual('  ');
        });
        it("should throw an exception, if it is called with D and C", function () {
            var outerSpace = diamond.outerSpace.bind(diamond, 'D', 'C');

            expect(outerSpace).toThrow(new Error('Invalid combination of arguments'));
        });
    });

    describe("Get Index Of", function () {
        it("should return 1, if A is provided", function () {
            expect(diamond.getIndexOf('A')).toEqual(1);
        });
        it("should throw an exception, if 4 is provided", function () {
            var getIndexOf = diamond.getIndexOf.bind(diamond, 4);

            expect(getIndexOf).toThrow(new Error('Invalid Argument'));
        });
    });

    describe("Upper Half", function () {
        it("should return ' A\nB B', if B is the widest point", function () {
            var result = [' A', 'B B'];

            expect(diamond.upperHalf('B')).toEqual(result);
        });
    });

    describe("Lower Half", function () {
        it("should return ' B B\n  A', if C is the widest point", function () {
            var input = ['  A', ' B B', 'C   C'];

            expect(diamond.lowerHalf(input)).toEqual(' B B\n  A');
        });
    });
});
