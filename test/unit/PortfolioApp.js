describe("PortfolioApp", function () {

  var $scope, $rootScope;

  beforeEach(module("PortfolioApp"));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get("$rootScope");
    $scope = $rootScope.$new();
  }));

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });
  
});