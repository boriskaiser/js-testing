AdditionTest = TestCase("AdditionTest");

AdditionTest.prototype.setUp = function () {
    console.log('Ausführung vor jedem Test');
};

AdditionTest.prototype.tearDown = function () {
    console.log('Ausführung nach jedem Test');
};


AdditionTest.prototype.testAdd1 = function() {
    assertEquals(2, add(1, 1));
};

AdditionTest.prototype.testAdd2 = function() {
    assertEquals(2, add(1, 2));
};

SubtractionTest = TestCase('SubtractionTest');

SubtractionTest.prototype.testSub = function () {
    assertSame(1, 1);
};