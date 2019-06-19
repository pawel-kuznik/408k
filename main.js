/**
 *  The entry file for the whole library.
 *  @author     Pawel Kuznik <pawel.kuznik@gmail.com>
 */

// export all public classes
module.exports = {
    Ability:                require('./lib/Ability.js'),
    Attributes:             require('./lib/Attributes.js'),
    Entity:                 require('./lib/Entity.js'),
    KeywordList:            require('./lib/KeywordList.js'),
    ModelTempalate:         require('./lib/ModelTemplate.js'),
    PowelLevelProfile:      require('./lib/PowerLevelProfile.js'),
    SquadTemplate:          require('./lib/SquadTemplate.js'),
    TemplateLibrary:        require('./lib/TemplateLibrary.js'),
    TemplaetStore:          require('./lib/TemplateStore.js'),
    WeaponsListTemplate:    require('./lib/WeaponListTemplate.js'),
    WeaponProfileTemplate:  require('./lib/WeaponProfileTemplate.js'),
    WeaponTemplate:         require('./lib/WeaponTemplate.js'),
};

