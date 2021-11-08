import angular from 'angular'

const MyModule = angular.module('MyModule', [])
    /**
    * @ngdoc directive
    * @name trustHtml
    * @restrict E
    *
    * Render given html and compile JS
    */
    .directive('trustHtml', function ($compile) {
        return {
            restrict: 'E',
            link: function (scope, elem, attrs) {
                if (attrs.element) {
                    var compiledElement = $compile('<span>' + attrs.element + '</span>')(
                        scope
                    )
                    elem.append(compiledElement)
                }
            }
        }
    })

export default MyModule