Young.controller('UEEditorController', ['$scope', function ($scope) {
	this.submit = function(){
		// SyntaxHighlighter.highlight();
		console.log(ue.getContent());
	};
}]);