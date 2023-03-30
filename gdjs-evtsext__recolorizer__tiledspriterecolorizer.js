
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer = gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer || {};

/**
 * Behavior generated from Tiled sprite recolorizer
 */
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer = class TiledSpriteRecolorizer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Tiled sprite recolorizer
 */
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.SharedData = class TiledSpriteRecolorizerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Recolorizer_TiledSpriteRecolorizerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Recolorizer_TiledSpriteRecolorizerSharedData = new gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.SharedData(
      initialData
    );
  }
  return instanceContainer._Recolorizer_TiledSpriteRecolorizerSharedData;
}

// Methods:
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext = {};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.userFunc0x9ffb70 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.TiledSpriteRuntimeObject} */
const tiledSprite = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = tiledSprite.getBehavior(behaviorName);

if (!runtimeScene.__recolorizerExtension) {
    runtimeScene.__recolorizerExtension = { managers: new Map()};
}
/** @type {Map} */
const managers = runtimeScene.__recolorizerExtension.managers || new Map();
let manager = managers.get(tiledSprite.getName());
if (!manager) {
    /** @type {PIXI.TilingSprite} */
    const tilingSprite = tiledSprite.getRendererObject();
    manager = new gdjs.__recolorizerExtension.RecolorizationManager([tilingSprite.texture]);
    managers.set(tiledSprite.getName(), manager);
}

behavior.recolorizer = new gdjs.__recolorizerExtension.Recolorizer(
    manager,
    [tiledSprite.getRendererObject()]
);

};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{gdjs.evtsExt__Recolorizer__DefineJavaScript.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.userFunc0x9ffb70(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext = {};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.GDObjectObjects1= [];

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.userFunc0x9ffb70 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

const originColor = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("OriginColor"));
const targetColor = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("TargetColor"));
const hueScope = gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("HueScope") / 360, 0, 180);
const saturationScope = gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("SaturationScope") / 100, 0, 50);
const lightnessScope = gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("LightnessScope") / 100, 0, 50);

behavior.recolorizer.recolorizeSprite(originColor, targetColor, hueScope, saturationScope, lightnessScope);
};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.GDObjectObjects1);
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.userFunc0x9ffb70(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.Recolorize = function(OriginColor, TargetColor, HueScope, SaturationScope, LightnessScope, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "OriginColor") return OriginColor;
if (argName === "TargetColor") return TargetColor;
if (argName === "HueScope") return HueScope;
if (argName === "SaturationScope") return SaturationScope;
if (argName === "LightnessScope") return LightnessScope;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.RecolorizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext = {};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.GDObjectObjects1= [];

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.userFunc0x9ffb70 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

behavior.recolorizer.resetSprite();
};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.GDObjectObjects1);
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.userFunc0x9ffb70(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColor = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.ResetColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.GDObjectObjects1= [];

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.userFunc0x9ffb70 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

const recolorized = behavior.recolorizer.updateSprite();
};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.userFunc0x9ffb70(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext = {};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.GDObjectObjects2= [];

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetColor((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Recolorizer::TiledSpriteRecolorizer", gdjs.evtsExt__Recolorizer__TiledSpriteRecolorizer.TiledSpriteRecolorizer);
