(function () {
    'use strict';
    angular.module('Tombola.NoughtsandCrosses')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('html/playerselect.html', '<div ng-controller="PlayerSelectionController"><div ng-click="characterSelection.togglePlayer(1)" class="{{characterSelection.player1}}"></div><div ng-click="characterSelection.togglePlayer(2)" class="{{characterSelection.player2}}"></div> <br/><button class="button" ui-sref="gameplayInProgress" ng-click="newGameMaker()">New Game</button> <br/><button class="button" ui-sref="gamerules">Game Rules</button> <h3>Player 1 has selected {{characterSelection.player1}}</h3> <h3>Player 2 has selected {{characterSelection.player2}}</h3></div>');
            $templateCache.put('html/gameplay.html', '<div ng-controller="GameController"><div class="container"><div class="square" ng-click="humangameplay(0)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[0]}}"></div><div class="square colBorder" ng-click="humangameplay(1)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[1]}}"></div><div class="square" ng-click="humangameplay(2)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[2]}}"></div><div class="square rowBorder" ng-click="humangameplay(3)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[3]}}"></div><div class="square rowBorder colBorder" ng-click="humangameplay(4)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[4]}}"></div><div class="square rowBorder" ng-click="humangameplay(5)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[5]}}"></div><div class="square" ng-click="humangameplay(6)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[6]}}"></div><div class="square colBorder" ng-click="humangameplay(7)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[7]}}"></div><div class="square" ng-click="humangameplay(8)"><img src="images/blank.png" class="players{{game.gameModel.gameboard[8]}}"></div></div><button class="button" ui-sref="playerselection">Pick Players</button><button class="button" ng-click="newGameMaker()">New Game</button><br/><button class="button" ui-sref="gamerules">Game Rules</button><div ui-view></div></div>');
            $templateCache.put('html/winplayer.html', '<h1 class="blink_me">PLAYER {{main.gameModel.outcome}} WINS</h1>');
            $templateCache.put('html/draw.html', '<h1 class="blink_me">DRAW!</h1>');
            $templateCache.put('html/gamerules.html', '<div class="gamerules"><ul><li>Choose your player type. You have the options of:<ul><li>Human</li><li>CPU: Random</li><li>CPU: Pre-Trained</li></ul></li><li>Press the <b>New Game</b> button</li><li>Player 1 always goes first</li><li>Game play is nice and simple if you know how to play Noughts and Crosses</li><li>Game always ends with a win or a draw</li><li>Press <b>Pick Players</b> to go back to the character selection screen or <b>New Game</b> to restart</li><li>Always press <b>New Game</b> when you wish to play</li><li>Press the <b>Elephant Icon</b> if you fancy a change of scenery</li></ul></div><br/><button class="button" ui-sref="playerselection">Pick Players</button><button class="button" ui-sref="gameplayInProgress" ng-click="newGameMaker()">New Game</button><br><button class="button" ui-sref="gameplayInProgress">Back to Game</button>');
        }
        ]);
})();