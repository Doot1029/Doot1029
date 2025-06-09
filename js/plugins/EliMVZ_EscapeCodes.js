//============================================================================
// EliMVZ_EscapeCodes.js
//============================================================================

/*:
@target MZ

@plugindesc ♦3.2.0♦ Adds replacer's escape codes to be used on any window!
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-escape-codes-for-rpg-maker-mv/eli-face-window-for-rpg-maker-mz/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

============================================================================
Requirements
============================================================================

Need Eli Book.
Order After Eli Book.

============================================================================
Features
============================================================================

Add several new escape codes!

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/1H1IILhvG0AqHANmAvmj0Q0YsK_buaWsPyKHjWTrOBGQ/edit?usp=sharing

============================================================================

@param iconOrder
@text Icon after name
@type boolean
@desc True to drawn the icon after the name. False otherwise.
@default true

@param ifTags
@text Conditional(if) Tags
@type text
@desc The tags used to apply a conditional escape code. Separate the open and close by a comma. Spaces are not valid.
@default ?{, }?

@param evalTags
@text Formula(eval) Tags
@type text
@desc The tags used to apply a conditional escape code. Separate the open and close by a comma. Spaces are not valid.
@default =|, |=

@param actor
@text Actor
@type struct<actorSt>
@desc Actor escape codes
@default {"classes":"ACCL","nickname":"ACNK","level":"ACLV","cExp":"ACXP","nExp":"ACXPNEXT","profile":"ACPRO","skills":"ACSK","equip":"ACEQ","nParam":"ACPR","xParam":"ACPRX","sParam":"ACPRS","ncParam":"ACPRC","meta":"ACMT","obj":"ACOBJ"}

@param party
@text Party
@type struct<actorSt>
@desc Actor escape codes
@default {"classes":"MBCL","nickname":"MBNK","level":"MBLV","cExp":"MBXP","nExp":"MBXPNEXT","profile":"MBPRO","skills":"MBSK","equip":"MBEQ","nParam":"MBPR","xParam":"MBPRX","sParam":"MBPRS","ncParam":"MBPRC","meta":"MBMT","obj":"MBOBJ"}

@param classes
@text Class
@type struct<classSt>
@desc Class Escape codes
@default {"name":"CL","meta":"CLMT"}

@param skills
@text Skill
@type struct<skillSt>
@desc Skill Escape codes
@default {"name":"SK","nameIcon":"SKIC","description":"SKDCR","meta":"SKMT"}

@param items
@text Item
@type struct<itemSt>
@desc Items Escape codes
@default {"name":"IT","nameIcon":"ITIC","amount":"ITQT","description":"ITDCR","meta":"ITMT"}

@param weapons
@text Weapons
@type struct<weaponSt>
@desc Items Escape codes
@default {"name":"WE","nameIcon":"WEIC","amount":"WEQT","description":"WEDCR","meta":"WEMT"}

@param armors
@text Armors
@type struct<armorSt>
@desc Items Escape codes
@default {"name":"AR","nameIcon":"ARIC","amount":"ARQT","description":"ARDCR","meta":"ARMT"}

@param enemy
@text Enemy
@type struct<enemySt>
@desc Enemy Escape codes
@default {"name":"EN","nParam":"ENPR","meta":"ENMT"}

@param states
@text States
@type struct<statesSt>
@desc State Escape codes
@default {"name":"ST","nameIcon":"STIC","meta":"STMT"}

@param maps
@text Map
@type struct<mapSt>
@desc Map Escape codes
@default {"name":"MAP","displayName":"MAPDN","meta":"MAPMT"}

@param events
@text Event
@type struct<eventsSt>
@desc Event Escape codes
@default {"name":"EVNM","x":"EVX","y":"EVY","pos":"EVPOS","dir":"EVDIR"}

@param misc
@text Others
@type struct<miscSt>
@desc Other Escape codes
@default {"battleNumber":"BTNUM","battleWon":"BTWIN","battleEscape":"BTESC","gameTitle":"TLT","steps":"STEP","aliveMembers":"ALMB","partySize":"PRTSZ","playTime":"PLTM","varArray":"VAR","selfVar":"SV"}

@param customParam
@text Custom Parameters
@type struct<customParamSt>
@desc Other Escape codes
@default {"acParam":"ACCTPR","acCurrentParam":"ACCTPRC","mbParam":"MBCTPR","mbCurrentParam":"MBCTPRC"}

*/

/* -------------------------- ACTOR & PARTY MEMBER -------------------------- */
{
/*~struct~actorSt:

@param classes
@text Class Name
@type text
@desc
@default ACCL

@param nickname
@text Nickname
@type text
@desc
@default ACNK

@param level
@text Level
@type text
@desc
@default ACLV

@param cExp
@text Current Exp
@type text
@desc
@default ACXP

@param nExp
@text Next Exp
@type text
@desc
@default ACXPNEXT

@param profile
@text Profile
@type text
@desc
@default ACPRO

@param skills
@text Skills
@type text
@desc
@default ACSK

@param equip
@text Equip
@type text
@desc
@default ACEQ

@param nParam
@text Normal Parameters
@type text
@desc
@default ACPR

@param xParam
@text X Parameters
@type text
@desc
@default ACPRX

@param sParam
@text S Parameters
@type text
@desc
@default ACPRS

@param ncParam
@text Current Normal Parameters
@type text
@desc
@default ACPRC

@param meta
@text Meta
@type text
@desc
@default ACMT

@param obj
@text Object/Property
@type text
@desc
@default ACOBJ

*/
}

/* ---------------------------------- CLASS --------------------------------- */
{
/*~struct~classSt:

@param name
@text Class Name
@type text
@desc
@default CL

@param meta
@text Class Meta
@type text
@desc
@default CLMT

*/
}

/* ---------------------------------- SKILL --------------------------------- */
{
/*~struct~skillSt:

@param name
@text Name
@type text
@desc
@default SK

@param nameIcon
@text Name with Icon
@type text
@desc
@default SKIC

@param description
@text Description
@type text
@desc
@default SKDCR

@param meta
@text Meta
@type text
@desc
@default SKMT

*/
}

/* ---------------------------------- ITEM ---------------------------------- */
{
/*~struct~itemSt:

@param name
@text Name
@type text
@desc
@default ITNM

@param nameIcon
@text Name with Icon
@type text
@desc
@default ITIC

@param amount
@text Description
@type text
@desc
@default ITQT

@param description
@text Description
@type text
@desc
@default ITDCR

@param meta
@text Meta
@type text
@desc
@default ITMT

*/
}

/* --------------------------------- WEAPONS -------------------------------- */
{
/*~struct~weaponSt:

@param name
@text Name
@type text
@desc
@default WENM

@param nameIcon
@text Name with Icon
@type text
@desc
@default WEIC

@param amount
@text Description
@type text
@desc
@default WEQT

@param description
@text Description
@type text
@desc
@default WEDCR

@param meta
@text Meta
@type text
@desc
@default WEMT

*/
}

/* --------------------------------- ARMORS --------------------------------- */
{
/*~struct~armorSt:

@param name
@text Name
@type text
@desc
@default ARNM

@param nameIcon
@text Name with Icon
@type text
@desc
@default ARIC

@param amount
@text Description
@type text
@desc
@default ARQT

@param description
@text Description
@type text
@desc
@default ARDCR

@param meta
@text Meta
@type text
@desc
@default ARMT

*/
}

/* ---------------------------------- ENEMY --------------------------------- */
{
/*~struct~enemySt:

@param name
@text Name
@type text
@desc
@default EN

@param nParam
@text Param
@type text
@desc
@default ENPR

@param meta
@text Meta
@type text
@desc
@default ENMT

*/
}

/* ---------------------------------- STATE --------------------------------- */
{
/*~struct~statesSt:

@param name
@text Name
@type text
@desc
@default ST

@param nameIcon
@text Name with Icon
@type text
@desc
@default STIC

@param meta
@text Meta
@type text
@desc
@default STMT

*/
}

/* ----------------------------------- MAP ---------------------------------- */
{
/*~struct~mapSt:

@param name
@text Name
@type text
@desc
@default MAP

@param displayName
@text Name with Icon
@type text
@desc
@default MAPDN

@param meta
@text Meta
@type text
@desc
@default MAPMT

*/
}

/* ---------------------------------- EVENT --------------------------------- */
{
/*~struct~eventsSt:

@param name
@text Event Name
@type text
@desc
@default EVNM

@param x
@text Event x
@type text
@desc
@default EVX

@param y
@text Event y
@type text
@desc
@default EVY

@param pos
@text Event X & Y
@type text
@desc
@default EVPOS

@param dir
@text Event Direction
@type text
@desc
@default EVDIR

*/
}

/* ---------------------------------- MISC ---------------------------------- */
{
/*~struct~miscSt:

@param battleNumber
@text Battle Number
@type text
@desc
@default BTNUM

@param battleWon
@text Battle Won
@type text
@desc
@default BTWIN

@param battleEscape
@text Battle Escape
@type text
@desc
@default BTESC

@param gameTitle
@text Game Title
@type text
@desc
@default TLT

@param steps
@text Max Step Number
@type text
@desc
@default STEP

@param aliveMembers
@text Alive Members
@type text
@desc
@default ALMB

@param partySize
@text Party Size
@type text
@desc
@default PRTSZ

@param playTime
@text Play Time
@type text
@desc
@default PLTM

@param varArray
@text Variable Array
@type text
@desc
@default VAR

@param selfVar
@text Self Variable
@type text
@desc Requires Eli Self Variables.
@default SV

*/
}

/* ---------------------------- CUSTOM PARAMETERS --------------------------- */
{

/*~struct~customParamSt: 

@param acParam
@text Parameters(ACTOR)
@type text
@desc
@default ACCTPR

@param acCurrentParam
@text Current Parameters(HP TYPES)(ACTOR)
@type text
@desc
@default ACCTPRC

@param mbParam
@text Parameters(MEMBER)
@type text
@desc
@default MBCTPR

@param mbCurrentParam
@text Current Parameters(HP TYPES)(MEMBER)
@type text
@desc
@default MBCTPRC

*/

}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_EscapeCodes = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.EscapeCodes = {

    Parameters: class {
        constructor(parameters){
            const [openIf, closeIf] = (parameters.ifTags || "").replaceAll(" ", "").split(",")
            const [openEval, closeEval] = (parameters.evalTags || "").replaceAll(" ", "").split(",")

            this.iconOrder   = parameters.iconOrder === "true"
            this.actor       = JSON.parse(parameters.actor)
            this.party       = JSON.parse(parameters.party)
            this.classes     = JSON.parse(parameters.classes)
            this.skills      = JSON.parse(parameters.skills)
            this.items       = JSON.parse(parameters.items)
            this.weapons     = JSON.parse(parameters.weapons)
            this.armors      = JSON.parse(parameters.armors)
            this.enemy       = JSON.parse(parameters.enemy)
            this.states      = JSON.parse(parameters.states)
            this.maps        = JSON.parse(parameters.maps)
            this.events      = JSON.parse(parameters.events)
            this.misc        = JSON.parse(parameters.misc)
            this.customParam = JSON.parse(parameters.customParam)
            this.openIf = openIf || "?{"
            this.closeIf = closeIf || "}?"
            this.openEval = openEval || "=|"
            this.closeEval = closeEval || "|="
        }
    },

    currentParam: ['_hp', '_mp', '_tp'],
    currentCustomParams: [],
    list: [],
    iconCodes:[],

    initialize(){
        this.initParameters()

        if(Imported.Eli_CustomParameter){
            this.initializeCustomParameters()
        }
        
        this.initAllCodes()
    },

    initParameters(){
        const parameters = PluginManager.parameters(Eli.PluginManager.getPluginName())
        this.parameters = new this.Parameters(parameters) 
    },

    getParam(){
        return this.parameters
    },

    initializeCustomParameters(){    
        const CParamPlugin = Eli.CustomParameter
        for(let i = 0; i < CParamPlugin.cParamsLength(); i++){

            if(CParamPlugin.isHpType(i)){
                const _name = CParamPlugin.get_name(i)
                this.currentCustomParams.push(_name)

            }else{
                const name = CParamPlugin.getShortName(i)
                this.currentCustomParams.push(name)
            }
        }
        
    },

    initAllCodes(){
        this.actorCodes()
        this.classCodes()
        this.skillCodes()
        this.itemCodes()
        this.weaponCodes()
        this.armorCodes()
        this.enemyCodes()
        this.statesCodes()
        this.mapCodes()
        this.eventCodes()
        this.partyCodes()
        this.miscCodes()

        if(Imported.Eli_CustomParameter){
            this.customParameterCodes()
        }

        this.finalCodes()
        this.selfVarEscape = this.list.filter(item => item.functionName === "getSelfVar").shift()
    },

    actorCodes(){
        const {classes, nickname, level, cExp, nExp, profile, skills, equip, nParam, xParam, sParam, ncParam, meta, obj} = this.getParam().actor
        
        this.list.push(
            {functionName: 'getActorData',      reg: this.createRegex(classes, 1),  tag: 'class'},
            {functionName: 'getActorData',      reg: this.createRegex(nickname, 1), tag: 'nick'},
            {functionName: 'getActorData',      reg: this.createRegex(level, 1),    tag: 'level'},
            {functionName: 'getActorData',      reg: this.createRegex(cExp, 1),     tag: 'currentExp'},
            {functionName: 'getActorData',      reg: this.createRegex(nExp, 1),     tag: 'nextRequireExp'},
            {functionName: 'getActorData',      reg: this.createRegex(profile, 1),  tag: 'profile'},
            {functionName: 'getActorData',      reg: this.createRegex(skills, 1),   tag: 'skills'},
            {functionName: 'getActorData',      reg: this.createRegex(equip, 1),    tag: 'equips'},
            {functionName: 'getActorParams',    reg: this.createRegex(nParam, 1),   tag: 'params'},
            {functionName: 'getActorParams',    reg: this.createRegex(xParam, 1),   tag: 'xParams'},
            {functionName: 'getActorParams',    reg: this.createRegex(sParam, 1),   tag: 'sParams'},
            {functionName: 'getActorParams',    reg: this.createRegex(ncParam, 1),  tag: 'currentParamValue'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),     tag: 'actor'},
            {functionName: 'getActorObject',    reg: this.createRegex(obj, 1),      tag: 'none'},
        )
    },

    classCodes(){
        const {name, meta} = this.getParam().classes
        
        this.list.push(
            {functionName: 'getDataName',       reg: this.createRegex(name, 1),  tag: 'class'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),  tag: 'class'},
        )
    },

    skillCodes(){
        const {name, nameIcon, description, meta} = this.getParam().skills
        
        this.list.push(
            {functionName: 'getDataName',       reg: this.createRegex(name, 1),  tag: 'skill'},
            {functionName: 'getDataNameIcon',   reg: this.createRegex(nameIcon, 1),  tag: 'skill'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),  tag: 'skill'},
            {functionName: 'getDescription',    reg: this.createRegex(description, 1),  tag: 'skill'},
        )
    },

    itemCodes(){
        const {name, nameIcon, amount, description, meta} = this.getParam().items
        
        this.list.push(
            {functionName: 'getDataName',       reg: this.createRegex(name, 1),  tag: 'item'},
            {functionName: 'getDataNameIcon',   reg: this.createRegex(nameIcon, 1),  tag: 'item'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),  tag: 'item'},
            {functionName: 'getItemNumber',     reg: this.createRegex(amount, 1),  tag: 'item'},
            {functionName: 'getDescription',    reg: this.createRegex(description, 1),  tag: 'item'},
        )
    },

    weaponCodes(){
        const {name, nameIcon, amount, description, meta} = this.getParam().weapons
        
        this.list.push(
            {functionName: 'getDataName',       reg: this.createRegex(name, 1),  tag: 'weapon'},
            {functionName: 'getDataNameIcon',   reg: this.createRegex(nameIcon, 1),  tag: 'weapon'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),  tag: 'weapon'},
            {functionName: 'getItemNumber',     reg: this.createRegex(amount, 1),  tag: 'weapon'},
            {functionName: 'getDescription',    reg: this.createRegex(description, 1),  tag: 'weapon'},
        )
    },

    armorCodes(){
        const {name, nameIcon, amount, description, meta} = this.getParam().armors
        
        this.list.push(
            {functionName: 'getDataName',       reg: this.createRegex(name, 1),  tag: 'armor'},
            {functionName: 'getDataNameIcon',   reg: this.createRegex(nameIcon, 1),  tag: 'armor'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),  tag: 'armor'},
            {functionName: 'getItemNumber',     reg: this.createRegex(amount, 1),  tag: 'armor'},
            {functionName: 'getDescription',    reg: this.createRegex(description, 1),  tag: 'armor'},
        )
    },

    enemyCodes(){
        const {name, nParam, meta} = this.getParam().enemy
        
        this.list.push(
            {functionName: 'getDataName',       reg: this.createRegex(name, 1),  tag: 'enemy'},
            {functionName: 'getEnemyParams',    reg: this.createRegex(nParam, 1),  tag: 'none'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),  tag: 'enemy'},
        )
    },

    statesCodes(){
        const {name, nameIcon, meta} = this.getParam().states
        
        this.list.push(
            {functionName: 'getDataName',       reg: this.createRegex(name, 1),  tag: 'state'},
            {functionName: 'getDataNameIcon',   reg: this.createRegex(nameIcon, 1),  tag: 'state'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1),  tag: 'state'},
        )
    },

    mapCodes(){
        const {name, displayName, meta} = this.getParam().maps
        
        this.list.push(
            {functionName: 'getMapName',        reg: this.createRegex(name, 1),  tag: 'none'},
            {functionName: 'getMapDisplayName', reg: this.createRegex(displayName, 0),  tag: 'none'},
            {functionName: 'getMapMeta',        reg: this.createRegex(meta, 1),  tag: 'none'},
        );
    },

    eventCodes(){
        const {name, x, y, pos, dir} = this.getParam().events
        
        this.list.push(
            {functionName: 'getEventData',      reg: this.createRegex(name, 1),  tag: 'name'},
            {functionName: 'getEventData',      reg: this.createRegex(x, 1),  tag: 'x'},
            {functionName: 'getEventData',      reg: this.createRegex(y, 1),  tag: 'y'},
            {functionName: 'getEventData',      reg: this.createRegex(pos, 1),  tag: 'pos'},
            {functionName: 'getEventData',      reg: this.createRegex(dir, 1),  tag: 'dir'},
        );
    },

    partyCodes(){
        const {classes, nickname, level, cExp, nExp, profile, skills, equip, nParam, xParam, sParam, ncParam, meta, obj} = this.getParam().party
        
        this.list.push(
            {functionName: 'getMemberData',      reg: this.createRegex(classes, 1),  tag: 'class'},
            {functionName: 'getMemberData',      reg: this.createRegex(nickname, 1),  tag: 'nick'},
            {functionName: 'getMemberData',      reg: this.createRegex(level, 1),  tag: 'level'},
            {functionName: 'getMemberData',      reg: this.createRegex(cExp, 1),  tag: 'currentExp'},
            {functionName: 'getMemberData',      reg: this.createRegex(nExp, 1),  tag: 'nextRequireExp'},
            {functionName: 'getMemberData',      reg: this.createRegex(profile, 1),  tag: 'profile'},
            {functionName: 'getMemberData',      reg: this.createRegex(skills, 1),  tag: 'skills'},
            {functionName: 'getMemberData',      reg: this.createRegex(equip, 1),  tag: 'equips'},
            {functionName: 'getMemberParams',    reg: this.createRegex(nParam, 1),  tag: 'params'},
            {functionName: 'getMemberParams',    reg: this.createRegex(xParam, 1),  tag: 'xParams'},
            {functionName: 'getMemberParams',    reg: this.createRegex(sParam, 1), tag: 'sParams'},
            {functionName: 'getMemberParams',    reg: this.createRegex(ncParam, 1), tag: 'currentParamValue'},
            {functionName: 'getMetaFromData',   reg: this.createRegex(meta, 1), tag: 'actor'},
            {functionName: 'getMemberObject',    reg: this.createRegex(obj, 1), tag: 'none'},
        )
    },

    miscCodes(){
        const {battleNumber, battleWon, battleEscape, gameTitle, steps, aliveMembers, partySize, playTime, varArray, selfVar} = this.getParam().misc
        
        this.list.push(
            {functionName: 'getBattlesNumbers', reg: this.createRegex(battleNumber, 0),  tag: 'none'},
            {functionName: 'getBattlesWon',     reg: this.createRegex(battleWon, 0),  tag: 'none'},
            {functionName: 'getBattlesEscape',  reg: this.createRegex(battleEscape, 0),  tag: 'none'},
            {functionName: 'getGameTitle',      reg: this.createRegex(gameTitle, 0),  tag: 'none'},
            {functionName: 'getStepNumbers',    reg: this.createRegex(steps, 0),  tag: 'none'},
            {functionName: 'getAliveMembers',   reg: this.createRegex(aliveMembers, 0),  tag: 'none'},
            {functionName: 'getPartySize',      reg: this.createRegex(partySize, 0),  tag: 'none'},
            {functionName: 'getPlayTime',       reg: this.createRegex(playTime, 0),  tag: 'none'},
            {functionName: 'getVarArray',       reg: this.createRegex(varArray, 1),  tag: 'none'},
            {functionName: 'getSelfVar',        reg: this.createRegex(selfVar, 1),  tag: 'none'},
        )
    },

    customParameterCodes(){   
        const {acParam, acCurrentParam, mbParam, mbCurrentParam} = this.getParam().customParam

        this.list.push(
            {functionName: 'getActorCParams',   reg: this.createRegex(acParam, 1),  tag: 'params'},
            {functionName: 'getActorCParams',   reg: this.createRegex(acCurrentParam, 1),  tag: 'currentParamValue'},
            {functionName: 'getMemberCParams',  reg: this.createRegex(mbParam, 1),  tag: 'params'},
            {functionName: 'getMemberCParams',  reg: this.createRegex(mbCurrentParam, 1),  tag: 'currentParamValue'},
        )
        
    },

    finalCodes(){
        this.list.unshift(
            {functionName: 'getEval',   reg: this.createRegex('EVAL', 1),   tag: 'none'}
        )
    },

    createRegex(escapeChar, args){
        switch(args){
            case 0: return new RegExp(`\\x1b${escapeChar}`, 'gi')
            case 1: return new RegExp(`\\x1b${escapeChar}\\[([^\\[]*)\\]`, 'gi')
            case 2: return new RegExp(`\\x1b${escapeChar}\\[([^\\[]*)\\[([^\\[]*)\\]\\]`, 'gi')
        }
    },

    getGlobalDataObject(type){
        const dataList = {
            actor: "$dataActors",
            class: "$dataClasses",
            skill: "$dataSkills",
            item: "$dataItems",
            weapon: "$dataWeapons",
            armor: "$dataArmors",
            enemy: "$dataEnemies",
            state: "$dataStates"
        }
        const data = dataList[type]

        return window[data]
    },

    getDescription(id, type){
        const data = this.getGlobalDataObject(type)
        const currentData = data[Number(id)]

        return currentData.description
    },

    getActorData(rawData, obj){
        let [actorId, id2] = rawData.replaceAll(" ", "").split(",")
        id2 = Number(id2)
        const actor = $gameActors.actor(Number(actorId))
        const actorInfo = {
            class: () => actor.currentClass().name,
            nick: () => actor.nickname(),
            level: () => actor.level,
            currentExp: () => actor.currentExp(),
            nextRequireExp: () => actor.nextRequiredExp(),
            profile: () => actor.profile(),
            skills: () => actor.skills()[id2] ? actor.skills()[id2].name : 'Empty',
            equips: () => actor.equips()[id2] ? actor.equips()[id2].name : 'Empty'
        }

        return actorInfo[obj]()
    },

    getActorParams(rawData, obj){
        let [actorId, paramId] = rawData.replaceAll(" ", "").split(",")
        paramId = Number(paramId)
        const actor = $gameActors.actor(Number(actorId))
        const currentParam = this.currentParam
        const actorInfo = {
            params: () => actor.param(paramId),
            xParams: () => actor.xparam(paramId) * 100 + '%',
            sParams: () => actor.sparam(paramId) * 100 + '%',
            currentParamValue: () => actor[currentParam[paramId]],
        }

        return actorInfo[obj]()
    },

    getActorObject(rawData, tag){
        let [actorId, anyObject] = rawData.replaceAll(" ", "").split(",")
        const actor = $gameActors.actor(Number(actorId))
        const object = actor[anyObject]

        return typeof(object) === 'function' ? actor[anyObject]() : object
    },

    getMemberData(rawData, obj){
        let [memberIndex, id2] = rawData.replaceAll(" ", "").split(",")
        id2 = Number(id2)
        const member = $gameParty.members()[Number(memberIndex)]
        const memberInfo = {
            class: () => member.currentClass().name,
            nick: () => member.nickname(),
            level: () => member.level,
            currentExp: () => member.currentExp(),
            nextRequireExp: () => member.nextRequiredExp(),
            profile: () => member.profile(),
            skills: () => member.skills()[id2] ? member.skills()[id2].name : 'Empty',
            equips: () => member.equips()[id2] ? member.equips()[id2].name : 'Empty'
        }

        return memberInfo[obj]()
    },

    getMemberParams(rawData, paramType){
        let [memberIndex, paramId] = rawData.replaceAll(" ", "").split(",")
        paramId = Number(paramId)
        const member = $gameParty.members()[Number(memberIndex)]
        const currentParam = this.currentParam
        const memberInfo = {
            params: () => member.param(paramId),
            xParams: () => member.xparam(paramId) * 100 + '%',
            sParams: () => member.sparam(paramId) * 100 + '%',
            currentParamValue: () => member[currentParam[paramId]],
        }

        return memberInfo[paramType]()
    },

    getMemberObject(rawData, obj){
        let [memberIndex, anyObject] = rawData.replaceAll(" ", "").split(",")
        const member = $gameParty.members()[Number(memberIndex)]
        const property = member[anyObject]

        if(typeof(property) === 'function'){
            return member[anyObject]()
        }else{
            return property
        }
    },

    getMemberMetaFromData(rawData, type){
        const [id, metaName] = rawData.replaceAll(" ", "").split(",")
        const data = this.getGlobalDataObject(type)
        const actorId = $gameParty.members()[id]._actorId
        const member = data[actorId]

        if(member && member.meta[metaName]){
            return member.meta[metaName]
        }else{
            return `This data ${type} doens't exist`
        }
    },

    getMetaFromData(rawData, type){
        const [id, metaName] = rawData.replaceAll(" ", "").split(",")
        const data = this.getGlobalDataObject(type)
        const thisData = data[id]

        if(thisData && thisData.meta[metaName]){
            return thisData.meta[metaName]
        }else{
            return `This data ${type} doens't exist`
        }
    },

    getDataName(rawData, type){
        const id = Number(rawData)
        const data = this.getGlobalDataObject(type)

        return data[id].name
    },

    getDataNameIcon(rawData, type){
        const id = Number(rawData)
        const data = this.getGlobalDataObject(type)
        const currentData = data[id]
        const iconBefore = `\x1bi[${currentData.iconIndex}] ${currentData.name} `
        const iconAfter = `${currentData.name} \x1bi[${currentData.iconIndex}]`
        const text = Eli.EscapeCodes.parameters.iconOrder ? iconBefore : iconAfter

        return text
    },

    getItemNumber(rawData, type){
        const id = Number(rawData)
        const item = this.getGlobalDataObject(type)[id]

        return $gameParty.numItems(item)
    },

    getEnemyParams(rawData){
        const [enemyId, paramId] = rawData.replaceAll(" ", "").split(",")
        return $dataEnemies[enemyId].params[paramId]
    },

    getMapName(id){
        id = Number(id)
        const mapId = id || $gameMap.mapId()
        
        return $dataMapInfos[mapId].name
    },

    getMapDisplayName(){
        return $dataMap.displayName
    },

    getMapMeta(metaName){
        return $dataMap.meta[metaName] || `This meta doens't exist`
    },

    getEventData(id, tag){
        id = Number(id)
        const eventId = id || $gameMap._interpreter._eventId
        const event = $gameMap.events().find(item => item._eventId === eventId)

        if(event){
            const eventInfo = {
                name: () => event.event().name,
                x: () => event._x,
                y: () => event._y,
                pos: () => `${event._x},${event._y}`,
                dir: () => event._direction
            }

            return eventInfo[tag]()
        }

        return 'Not found'
    },

    getBattlesNumbers(){
        return $gameSystem.battleCount()
    },

    getBattlesWon(){
        return $gameSystem.winCount()
    },

    getBattlesEscape(){
        return $gameSystem.escapeCount()
    },

    getGameTitle(){
        return $dataSystem.gameTitle
    },

    getStepNumbers(){
        return $gameParty.steps()
    },

    getAliveMembers(){
        return $gameParty.aliveMembers().length
    },

    getPartySize(){
        return $gameParty.size()
    },

    getPlayTime(){
        return $gameSystem.playtimeText()
    },

    getVarArray(rawData){
        const [varId, index] = rawData.replaceAll(" ", "").split(",")
        const id = Number(varId)
        
        return $gameVariables.value(id)[Number(index)]
    },

    getSelfVar(selfVarKey){
        let [varId, eventId = 0, mapId = 0] = selfVarKey.replaceAll(" ", "").split(",")
        mapId = Number(mapId) || $gameMap._interpreter.getTargetMapIdSelfVariable() || $gameMap.mapId()
        eventId = this.getSelfEventId(eventId)
        const id = Number(varId)
        const key = [mapId, eventId, id]

        return $gameVariables.selfValue(key)
    },

    getSelfEventId(eventId){
        return  Number(eventId) || 
                $gameMap._interpreter.getTargetEventIdSelfVariable() || 
                $gameMessage.getEventId() || 
                $gameMessage.getCommonEventId()
    },

    evalTernary(text){ 
        const rawText = this.getIfRawText(text)
        const formula = this.getIfFormula(rawText)
        const condition = this.getCondition(formula)
        const result1 = this.getIfResult(formula)
        const result2 = this.getElseResult(formula)
        const final = this.executeEvaluation(condition) ? result1 : result2

        text = text.replace(rawText, final)

        return text
    },

    getIfRawText(text){
        const start = text.indexOf(this.getParam().openIf)
        const end = text.indexOf(this.getParam().closeIf) + 2

        return text.substring(start, end)
    },

    getIfFormula(text){
        const start = text.indexOf(this.getParam().openIf) + 2
        const end = text.indexOf(this.getParam().closeIf)
        
        return text.substring(start, end)
    },

    getCondition(formula){
        const end = formula.indexOf('?')

        return formula.substring(0, end)
    },

    getIfResult(formula){
        const start = formula.indexOf('?') + 1
        const end = formula.indexOf(':')
        const result = formula.substring(start, end)

        return this.executeEvaluation(result)
    },

    getElseResult(formula){
        const start = formula.indexOf(':') + 1
        const result = formula.substring(start)

        return this.executeEvaluation(result)
    },

    executeEvaluation(formula){
        try {
            const func = new Function(`return ${formula}`)
            return func()

        }catch(e){
            return formula
        }
    },

    getEval(formula){
        return this.executeEvaluation(formula)
    },

    getRawEvalText(text){
        const start = text.indexOf(this.getParam().openEval)
        const end = text.indexOf(this.getParam().closeEval) + 2
        const finalText = text.substring(start, end)

        return finalText
    },

    getEvalFormula(text){
        const start = text.indexOf(this.getParam().openEval) + 2
        const end = text.indexOf(this.getParam().closeEval)
        const finalText = text.substring(start, end)

        return finalText
    },

    getNewEval(text){
        const rawText = this.getRawEvalText(text)
        const formula = this.getEvalFormula(text)
        const result = this.executeEvaluation(formula)

        text = text.replace(rawText, result)

        return text
    },

    getActorCParams(rawData, obj){
        const [actorId, paramId] = rawData.replaceAll(" ", "").split(",")
        const actor = $gameActors.actor(Number(actorId))
        const currentParam = this.currentCustomParams
        const actorInfo = {
            params: () => actor.cparam(Number(paramId)),
            currentParamValue: () => actor[currentParam[paramId]],
        }

        return actorInfo[obj]()
    },

    getMemberCParams(rawData, paramType){
        const [memberIndex, paramId] = rawData.replaceAll(" ", "").split(",")
        const member = $gameParty.members()[Number(memberIndex)]
        const currentParam = this.currentCustomParams
        const memberInfo = {
            params: () => member.cparam(Number(paramId)),
            currentParamValue: () => member[currentParam[paramId]],
        }

        return memberInfo[paramType]()
    },
    
    convertEscapeCharacters(text){
        const escapeCodes = this.list

        if(text){

            let maxLoop = 0
            while(text.includes(this.getParam().openIf) && maxLoop < 5){
                text = this.evalTernary(text)
                maxLoop++
            }

            maxLoop = 0
            while(text.includes(this.getParam().openEval) && maxLoop < 5){
                text = this.getNewEval(text)
                maxLoop++
            }
        }

        for(const {reg, functionName, tag} of escapeCodes){
            text = text.replace(reg, function(){
                    return this[functionName](arguments[1], tag)
            }.bind(this))
        }

        return text
    },

    convertSvVarOnly(text){
        const {reg, functionName, tag} = this.selfVarEscape

        text = text.replace(reg, function(){
            return this[functionName](arguments[1], tag)
        }.bind(this))

        return text
    },

}

{

const Plugin = Eli.EscapeCodes
const Alias = {}

Plugin.initialize()

/* -------------------------------- ELI UTILS ------------------------------- */
if(Imported.Eli_SelfVariables){

Alias.Eli_Utils_convertEscapeVariablesOnly = Eli.Utils.convertEscapeVariablesOnly
Eli.Utils.convertEscapeVariablesOnly = function(text){
    text = Alias.Eli_Utils_convertEscapeVariablesOnly.call(this, text)
    text = Plugin.convertSvVarOnly(text)

    return text
}

}

/* ------------------------------- WINDOW BASE ------------------------------ */
Alias.Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = Alias.Window_Base_convertEscapeCharacters.call(this, text)
    text = Plugin.convertEscapeCharacters(text)
    
    return text
}

/* ------------------------------ COMPATIBILITY ----------------------------- */
if(!Imported.Eli_GlobalText){

    Alias.Game_Message_add = Game_Message.prototype.add
    Game_Message.prototype.add = function(text) {
        text = Eli.Utils.convertEscapeVariablesOnly(text)
        Alias.Game_Message_add.call(this, text)
    }

}

}