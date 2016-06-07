/**
 * h5页面强求/提交服务
 */
Vince.service('H5Service', function($http) {
    this.getTimeLine = function() {
        return $http.get('src/api/h5-timeline').then(function(data) {
            if (data.status == 200) {
				return data.data;
            }
        });
    };
});
