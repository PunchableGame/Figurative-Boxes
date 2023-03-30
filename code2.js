gdjs.TitleCode = {};
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDTitle2Objects1= [];
gdjs.TitleCode.GDTitle2Objects2= [];
gdjs.TitleCode.GDFloorObjects1= [];
gdjs.TitleCode.GDFloorObjects2= [];
gdjs.TitleCode.GDPlayObjects1= [];
gdjs.TitleCode.GDPlayObjects2= [];
gdjs.TitleCode.GDGamemodeObjects1= [];
gdjs.TitleCode.GDGamemodeObjects2= [];
gdjs.TitleCode.GDHowToPlayObjects1= [];
gdjs.TitleCode.GDHowToPlayObjects2= [];
gdjs.TitleCode.GDHowToTxtObjects1= [];
gdjs.TitleCode.GDHowToTxtObjects2= [];
gdjs.TitleCode.GDPunchableObjects1= [];
gdjs.TitleCode.GDPunchableObjects2= [];
gdjs.TitleCode.GDDebugToolObjects1= [];
gdjs.TitleCode.GDDebugToolObjects2= [];
gdjs.TitleCode.GDDebugTool2Objects1= [];
gdjs.TitleCode.GDDebugTool2Objects2= [];
gdjs.TitleCode.GDGamemodeTxtObjects1= [];
gdjs.TitleCode.GDGamemodeTxtObjects2= [];
gdjs.TitleCode.GDClickObjects1= [];
gdjs.TitleCode.GDClickObjects2= [];
gdjs.TitleCode.GDPlayTxtObjects1= [];
gdjs.TitleCode.GDPlayTxtObjects2= [];
gdjs.TitleCode.GDCursorObjects1= [];
gdjs.TitleCode.GDCursorObjects2= [];
gdjs.TitleCode.GDNewTiledSpriteObjects1= [];
gdjs.TitleCode.GDNewTiledSpriteObjects2= [];
gdjs.TitleCode.GDBackObjects1= [];
gdjs.TitleCode.GDBackObjects2= [];
gdjs.TitleCode.GDForwardObjects1= [];
gdjs.TitleCode.GDForwardObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};
gdjs.TitleCode.condition3IsTrue_0 = {val:false};
gdjs.TitleCode.condition4IsTrue_0 = {val:false};
gdjs.TitleCode.conditionTrue_1 = {val:false};
gdjs.TitleCode.condition0IsTrue_1 = {val:false};
gdjs.TitleCode.condition1IsTrue_1 = {val:false};
gdjs.TitleCode.condition2IsTrue_1 = {val:false};
gdjs.TitleCode.condition3IsTrue_1 = {val:false};
gdjs.TitleCode.condition4IsTrue_1 = {val:false};


gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.TitleCode.GDPlayObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.TitleCode.GDBackObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDForwardObjects1Objects = Hashtable.newFrom({"Forward": gdjs.TitleCode.GDForwardObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDGamemodeObjects1Objects = Hashtable.newFrom({"Gamemode": gdjs.TitleCode.GDGamemodeObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects = Hashtable.newFrom({"Cursor": gdjs.TitleCode.GDCursorObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDHowToPlayObjects1Objects = Hashtable.newFrom({"HowToPlay": gdjs.TitleCode.GDHowToPlayObjects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 0;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(3);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 4;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCursorObjects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDCursorObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HowToTxt"), gdjs.TitleCode.GDHowToTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.TitleCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayTxt"), gdjs.TitleCode.GDPlayTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.TitleCode.GDTitleObjects1);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "394f94382356633bf462959740efacccc34d74592690fbf3344ac6809879f78a_Gotta Keep On Movin.aac", 1, true, 100, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(10, 5, 5, 0, 0, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDNewTiledSpriteObjects1[i].setColor("80;77;77");
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.TitleCode.GDPlayTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayTxtObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(10, 5, 5, 0, 0, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleCode.GDHowToTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDHowToTxtObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(10, 5, 5, 0, 0, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(15), false);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "394f94382356633bf462959740efacccc34d74592690fbf3344ac6809879f78a_Gotta Keep On Movin.aac", 1, true, 30, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.TitleCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDNewTiledSpriteObjects1[i].addPolarForce(195, 150, 0);
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Click"), gdjs.TitleCode.GDClickObjects1);
gdjs.copyArray(runtimeScene.getObjects("HowToPlay"), gdjs.TitleCode.GDHowToPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("HowToTxt"), gdjs.TitleCode.GDHowToTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.TitleCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayTxt"), gdjs.TitleCode.GDPlayTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Punchable"), gdjs.TitleCode.GDPunchableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.TitleCode.GDTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title2"), gdjs.TitleCode.GDTitle2Objects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.TitleCode.GDClickObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDClickObjects1[i].hide();
}
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 30, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 104, "easeFrom", 1000, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDTitle2Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitle2Objects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 114, "easeFrom", 1000, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 512, "easeFrom", 1500, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDPlayTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayTxtObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 613, "easeFrom", 1500, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDHowToPlayObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDHowToPlayObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 512, "easeFrom", 1800, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDHowToTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDHowToTxtObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 578, "easeFrom", 1800, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDPunchableObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPunchableObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 957, "swingFrom", 1000, false);
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
gdjs.TitleCode.condition3IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(15), false);
}if ( gdjs.TitleCode.condition2IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition3IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13445484);
}
}}
}
}
if (gdjs.TitleCode.condition3IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(15), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Tick.wav", false, 100, 1);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(15), false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DebugTool"), gdjs.TitleCode.GDDebugToolObjects1);
gdjs.copyArray(runtimeScene.getObjects("DebugTool2"), gdjs.TitleCode.GDDebugTool2Objects1);
{for(var i = 0, len = gdjs.TitleCode.GDDebugToolObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDDebugToolObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TitleCode.GDDebugTool2Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDDebugTool2Objects1[i].hide();
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(15), true);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DebugTool"), gdjs.TitleCode.GDDebugToolObjects1);
gdjs.copyArray(runtimeScene.getObjects("DebugTool2"), gdjs.TitleCode.GDDebugTool2Objects1);
{for(var i = 0, len = gdjs.TitleCode.GDDebugToolObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDDebugToolObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDDebugTool2Objects1.length ;i < len;++i) {
    gdjs.TitleCode.GDDebugTool2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.TitleCode.GDPlayObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDPlayObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TitleCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Forward"), gdjs.TitleCode.GDForwardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gamemode"), gdjs.TitleCode.GDGamemodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("GamemodeTxt"), gdjs.TitleCode.GDGamemodeTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("HowToPlay"), gdjs.TitleCode.GDHowToPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("HowToTxt"), gdjs.TitleCode.GDHowToTxtObjects1);
/* Reuse gdjs.TitleCode.GDPlayObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayTxt"), gdjs.TitleCode.GDPlayTxtObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_003.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayObjects1[i].getBehavior("Tween").addObjectPositionXTween("Clicked", -(1024), "easeFrom", 1000, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDPlayTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayTxtObjects1[i].getBehavior("Tween").addObjectPositionXTween("Clicked", -(1024), "easeFrom", 1000, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDHowToPlayObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDHowToPlayObjects1[i].getBehavior("Tween").addObjectPositionXTween("Clicked", 1664, "easeFrom", 1000, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDHowToTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDHowToTxtObjects1[i].getBehavior("Tween").addObjectPositionXTween("Clicked", 1664, "easeFrom", 1000, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBackObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 511, "easeFrom", 1500, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDForwardObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDForwardObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 511, "easeFrom", 1500, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDGamemodeObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 511, "easeFrom", 1500, false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDGamemodeTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeTxtObjects1[i].getBehavior("Tween").addObjectPositionYTween("Clicked", 550, "easeFrom", 1500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TitleCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDBackObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(14).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Forward"), gdjs.TitleCode.GDForwardObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDForwardObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 1;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GamemodeTxt"), gdjs.TitleCode.GDGamemodeTxtObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDGamemodeTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeTxtObjects1[i].setString("60 SECONDS");
}
}{for(var i = 0, len = gdjs.TitleCode.GDGamemodeTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeTxtObjects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 2;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GamemodeTxt"), gdjs.TitleCode.GDGamemodeTxtObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDGamemodeTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeTxtObjects1[i].setString("PANIC MODE");
}
}{for(var i = 0, len = gdjs.TitleCode.GDGamemodeTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeTxtObjects1[i].setColor("255;0;0");
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 3;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GamemodeTxt"), gdjs.TitleCode.GDGamemodeTxtObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDGamemodeTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeTxtObjects1[i].setString("ENDLESS MODE");
}
}{for(var i = 0, len = gdjs.TitleCode.GDGamemodeTxtObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamemodeTxtObjects1[i].setColor("0;68;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gamemode"), gdjs.TitleCode.GDGamemodeObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDGamemodeObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.TitleCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("HowToPlay"), gdjs.TitleCode.GDHowToPlayObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCursorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDHowToPlayObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Howto", false);
}}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDTitle2Objects1.length = 0;
gdjs.TitleCode.GDTitle2Objects2.length = 0;
gdjs.TitleCode.GDFloorObjects1.length = 0;
gdjs.TitleCode.GDFloorObjects2.length = 0;
gdjs.TitleCode.GDPlayObjects1.length = 0;
gdjs.TitleCode.GDPlayObjects2.length = 0;
gdjs.TitleCode.GDGamemodeObjects1.length = 0;
gdjs.TitleCode.GDGamemodeObjects2.length = 0;
gdjs.TitleCode.GDHowToPlayObjects1.length = 0;
gdjs.TitleCode.GDHowToPlayObjects2.length = 0;
gdjs.TitleCode.GDHowToTxtObjects1.length = 0;
gdjs.TitleCode.GDHowToTxtObjects2.length = 0;
gdjs.TitleCode.GDPunchableObjects1.length = 0;
gdjs.TitleCode.GDPunchableObjects2.length = 0;
gdjs.TitleCode.GDDebugToolObjects1.length = 0;
gdjs.TitleCode.GDDebugToolObjects2.length = 0;
gdjs.TitleCode.GDDebugTool2Objects1.length = 0;
gdjs.TitleCode.GDDebugTool2Objects2.length = 0;
gdjs.TitleCode.GDGamemodeTxtObjects1.length = 0;
gdjs.TitleCode.GDGamemodeTxtObjects2.length = 0;
gdjs.TitleCode.GDClickObjects1.length = 0;
gdjs.TitleCode.GDClickObjects2.length = 0;
gdjs.TitleCode.GDPlayTxtObjects1.length = 0;
gdjs.TitleCode.GDPlayTxtObjects2.length = 0;
gdjs.TitleCode.GDCursorObjects1.length = 0;
gdjs.TitleCode.GDCursorObjects2.length = 0;
gdjs.TitleCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.TitleCode.GDBackObjects1.length = 0;
gdjs.TitleCode.GDBackObjects2.length = 0;
gdjs.TitleCode.GDForwardObjects1.length = 0;
gdjs.TitleCode.GDForwardObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);

return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
