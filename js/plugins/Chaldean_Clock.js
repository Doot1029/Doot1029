/*:
 * @plugindesc v1.0 Implements a Chaldean Clock system with planetary hours
 * @author Your Name
 * 
 * @param Starting Hour
 * @type number
 * @min 1
 * @max 24
 * @desc The hour to start the game at (1-24)
 * @default 1
 * 
 * @param Starting Day
 * @type number
 * @min 1
 * @desc The day number to start at
 * @default 1
 * 
 * @param Hours Per Day
 * @type number
 * @desc Number of hours in a day
 * @default 24
 * 
 * @param Show Clock
 * @type boolean
 * @desc Display the clock on screen?
 * @default true
 * 
 * @param Clock X
 * @type number
 * @desc X position of the clock window
 * @default 0
 * 
 * @param Clock Y
 * @type number
 * @desc Y position of the clock window
 * @default 0
 * 
 * @param Seconds Per Hour
 * @type number
 * @desc Number of real seconds per in-game hour
 * @default 60
 * 
 * @help
 * ======================
 * Chaldean Clock System
 * ======================
 * 
 * This plugin implements a clock system based on the Chaldean Order 
 * of planetary hours.
 * 
 * Planetary Rulers:
 * ----------------
 * Saturn: Discipline, structure, responsibility
 * Jupiter: Abundance, expansion, wisdom
 * Mars: Action, energy, passion
 * Sun: Leadership, vitality, creativity
 * Venus: Love, beauty, harmony
 * Mercury: Communication, intellect
 * Moon: Emotions, intuition, reflection
 * 
 * Plugin Commands:
 * --------------- 
 * SetHour x        - Sets the current hour (1-24)
 * SetDay x         - Sets the current day
 * AdvanceHour x    - Advance clock by x hours
 * PauseTime        - Pause the clock
 * ResumeTime       - Resume the clock
 * HideClock        - Hide the clock window
 * ShowClock        - Show the clock window
 * 
 * Script Calls:
 * ------------- 
 * $gameSystem.currentHour()      - Get current hour (1-24)
 * $gameSystem.currentDay()       - Get current day
 * $gameSystem.planetaryRuler()   - Get current planetary ruler
 * $gameSystem.isDayHour()       - True if between hours 1-12
 * $gameSystem.isNightHour()     - True if between hours 13-24
 */

var Imported = Imported || {};
Imported.Chaldean_Clock = true;

var ChaldeanClock = ChaldeanClock || {};

(function() {
    
    // Parameters
    var parameters = PluginManager.parameters('Chaldean_Clock');
    ChaldeanClock.startingHour = Number(parameters['Starting Hour'] || 1);
    ChaldeanClock.startingDay = Number(parameters['Starting Day'] || 1);
    ChaldeanClock.hoursPerDay = Number(parameters['Hours Per Day'] || 24);
    ChaldeanClock.showClock = String(parameters['Show Clock']).toLowerCase() === 'true';
    ChaldeanClock.clockX = Number(parameters['Clock X'] || 0);
    ChaldeanClock.clockY = Number(parameters['Clock Y'] || 0);
    ChaldeanClock.secondsPerHour = Number(parameters['Seconds Per Hour'] || 60);
    ChaldeanClock.frameCount = 0;
    
    // Chaldean Order of Planets
    ChaldeanClock.planetaryOrder = [
        'Saturn', 'Jupiter', 'Mars', 'Sun', 
        'Venus', 'Mercury', 'Moon'
    ];

    // Planet meanings/influences
    ChaldeanClock.planetaryMeanings = {
        'Sun': 'Leadership, vitality, creativity',
        'Moon': 'Emotions, intuition, reflection',
        'Mercury': 'Communication, intellect, learning',
        'Venus': 'Love, beauty, harmony',
        'Mars': 'Action, energy, passion',
        'Jupiter': 'Abundance, expansion, wisdom',
        'Saturn': 'Discipline, structure, responsibility'
    };

    //=============================================================================
    // Game_System
    //=============================================================================
    
    var _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.call(this);
        this._hour = ChaldeanClock.startingHour;
        this._day = ChaldeanClock.startingDay;
        this._timePaused = false;
        this._planetaryEvents = {};
        this._timeCounter = 0;
    };

    Game_System.prototype.currentHour = function() {
        return this._hour;
    };

    Game_System.prototype.currentDay = function() {
        return this._day;
    };

    Game_System.prototype.advanceHour = function() {
        if(this._timePaused) return;
        
        this._hour++;
        if(this._hour > ChaldeanClock.hoursPerDay) {
            this._hour = 1;
            this._day++;
        }
        
        this.checkPlanetaryEvents();
    };

    Game_System.prototype.planetaryRuler = function() {
        // Calculate total hours elapsed since start
        const totalHours = ((this._day - 1) * 24) + this._hour;
        // Subtract 1 since hours start at 1, then mod 7 to get the planet index
        const planetIndex = (totalHours - 1) % 7;
        return ChaldeanClock.planetaryOrder[planetIndex];
    };

    Game_System.prototype.isDayHour = function() {
        return this._hour >= 1 && this._hour <= 12;
    };

    Game_System.prototype.isNightHour = function() {
        return this._hour >= 13 && this._hour <= 24;
    };

    Game_System.prototype.registerPlanetaryEvent = function(planet, commonEventId) {
        this._planetaryEvents[planet] = commonEventId;
    };

    Game_System.prototype.checkPlanetaryEvents = function() {
        const currentPlanet = this.planetaryRuler();
        if(this._planetaryEvents[currentPlanet]) {
            $gameTemp.reserveCommonEvent(this._planetaryEvents[currentPlanet]);
        }
    };

    Game_System.prototype.updateTime = function() {
        if(this._timePaused) return;
        
        this._timeCounter++;
        // 60 frames per second * seconds per hour
        const framesPerHour = 60 * ChaldeanClock.secondsPerHour;
        
        if(this._timeCounter >= framesPerHour) {
            this._timeCounter = 0;
            this.advanceHour();
        }
    };

    Game_System.prototype.hideChaldeanClock = function() {
        if(SceneManager._scene._clockWindow) {
            SceneManager._scene._clockWindow.hide();
        }
    };

    Game_System.prototype.showChaldeanClock = function() {
        if(SceneManager._scene._clockWindow) {
            SceneManager._scene._clockWindow.show();
        }
    };

    //=============================================================================
    // Window_ChaldeanClock
    //=============================================================================

    function Window_ChaldeanClock() {
        this.initialize.apply(this, arguments);
    }

    Window_ChaldeanClock.prototype = Object.create(Window_Base.prototype);
    Window_ChaldeanClock.prototype.constructor = Window_ChaldeanClock;

    Window_ChaldeanClock.prototype.initialize = function(x, y) {
        const width = 240;
        const height = this.fittingHeight(2);
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };

    Window_ChaldeanClock.prototype.refresh = function() {
        this.contents.clear();
        const hour = $gameSystem.currentHour();
        const day = $gameSystem.currentDay();
        const ruler = $gameSystem.planetaryRuler();
        
        this.drawText(`Day ${day} - Hour ${hour}`, 0, 0, this.contents.width);
        this.drawText(`Ruler: ${ruler}`, 0, this.lineHeight(), this.contents.width);
    };

    //=============================================================================
    // Scene_Map
    //=============================================================================

    var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        _Scene_Map_createAllWindows.call(this);
        if(ChaldeanClock.showClock) {
            this.createChaldeanClockWindow();
        }
    };

    Scene_Map.prototype.createChaldeanClockWindow = function() {
        this._clockWindow = new Window_ChaldeanClock(ChaldeanClock.clockX, ChaldeanClock.clockY);
        this.addWindow(this._clockWindow);
    };

    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        $gameSystem.updateTime();
        if(this._clockWindow) {
            this._clockWindow.refresh();
        }
    };

    //=============================================================================
    // Plugin Commands
    //=============================================================================

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        switch(command.toLowerCase()) {
            case 'sethour':
                $gameSystem._hour = Number(args[0]);
                break;
            case 'setday':
                $gameSystem._day = Number(args[0]);
                break;
            case 'advancehour':
                for(let i = 0; i < Number(args[0]); i++) {
                    $gameSystem.advanceHour();
                }
                break;
            case 'pausetime':
                $gameSystem._timePaused = true;
                break;
            case 'resumetime':
                $gameSystem._timePaused = false;
                break;
            case 'registerevent':
                $gameSystem.registerPlanetaryEvent(args[0], Number(args[1]));
                break;
            case 'hideclock':
                $gameSystem.hideChaldeanClock();
                break;
            case 'showclock':
                $gameSystem.showChaldeanClock();
                break;
        }
        
        if(SceneManager._scene._clockWindow) {
            SceneManager._scene._clockWindow.refresh();
        }
    };

})();
