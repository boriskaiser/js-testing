/*globals define, describe, it, expect, beforeEach, jasmine*/

define(['numbers'], function (numbers) {
    'use strict';

    describe('The numbers module', function () {

        describe('The add method', function () {
            var output;

            beforeEach(function () {
                this.numberInput1 = 1;
                this.numberInput2 = 2;
                this.stringInput1 = '1';
                this.stringInput2 = 'oops';
            });

            it('should accept one or more numberical arguments and return sum of them', function () {
                // Arrange
                //var output,
                //    input1 = 1,
                //    input2 = 2;

                // Act
                output = numbers.add(this.numberInput1, this.numberInput2);

                // Assert
                expect(output).toEqual(3);
                expect(output).not.toEqual(4);
            });

            it('should try to parse an integer when a string is passed to the method', function () {
                output = numbers.add(this.numberInput1, this.stringInput1);

                expect(output).toEqual(2);
            });

            it('should ignore the argument if it is not a parseable string', function () {
                output = numbers.add(this.numberInput1, this.stringInput2);

                expect(output).toEqual(1);
            });
        });

    });

});