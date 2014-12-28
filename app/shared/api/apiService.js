angular
    .module('aas.shared.api.service', [])
    .service('API', ['$http', '$q', '$timeout', function( $http, $q, $timeout ) {
        console.log( "API service loaded" );

        // the API object
        return {
            search: function( searchterm ) {
                console.log("API: search called");
                var searchPromise = $q.defer();

                searchPromise.notify('sending search request with searchterm: ' + searchterm + 'to the server');

                $http.get('/someUrl').
                    success(function(data, status, headers, config) {
                        searchPromise.resolve( data );
                    }).
                    error(function(data, status, headers, config) {
                        searchPromise.reject( data, status, headers, config );
                    });

                return searchPromise.promise;
            }
        
        };
    }]
);