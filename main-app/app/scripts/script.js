(function(){
    'use strict';
    angular.module('Tombola.NoughtsandCrosses.Core', []);
    angular.module('Tombola.NoughtsandCrosses.PlayerSelection', []);
    angular.module('Tombola.NoughtsandCrosses.GameState', []);
    angular.module('Tombola.NoughtsandCrosses.Game', ['Tombola.NoughtsandCrosses.Core', 'Tombola.NoughtsandCrosses.PlayerSelection',
                    'Tombola.NoughtsandCrosses.GameState']);
    angular.module('Tombola.NoughtsandCrosses', ['Tombola.NoughtsandCrosses.PlayerSelection',
                   'Tombola.NoughtsandCrosses.Game', 'Tombola.NoughtsandCrosses.GameState', 'ui.router']);
})();
