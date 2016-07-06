Young.controller('UEEditorController', ['$scope', function ($scope) {
	var ue = UE.getEditor('young-editor');
	this.submit = function(){
		// SyntaxHighlighter.highlight();
		console.log(ue.getContent());
	};
}]);