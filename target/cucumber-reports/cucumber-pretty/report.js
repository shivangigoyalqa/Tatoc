$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestScenarios.feature");
formatter.feature({
  "line": 2,
  "name": "Access tatoc webpage.",
  "description": "",
  "id": "access-tatoc-webpage.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tatoc"
    }
  ]
});
formatter.before({
  "duration": 789810652,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "wesite should have Tatoc heading",
  "description": "",
  "id": "access-tatoc-webpage.;wesite-should-have-tatoc-heading",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on tatoc homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "It should have Tatoc heading on it",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyHomePage()"
});
formatter.result({
  "duration": 314194177,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.verifyHeading()"
});
formatter.result({
  "duration": 29457074,
  "status": "passed"
});
formatter.before({
  "duration": 237200394,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "when we click on basic course it redirect page to grid gate",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-basic-course-it-redirect-page-to-grid-gate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is on tatoc homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "we click on basic course",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "it redirect us grid gate page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyHomePage()"
});
formatter.result({
  "duration": 10863768,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.verifyclick()"
});
formatter.result({
  "duration": 202534724,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.verifygridPage()"
});
formatter.result({
  "duration": 123379935,
  "status": "passed"
});
formatter.before({
  "duration": 206959458,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "when we click on advance course it redirect page to hover menu",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-advance-course-it-redirect-page-to-hover-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is on tatoc homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "we click on advance course",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "it redirect us hover menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyHomePage()"
});
formatter.result({
  "duration": 9453591,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.verifyclickadvance()"
});
formatter.result({
  "duration": 209878357,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.verifyHoverMenuPage()"
});
formatter.result({
  "duration": 121446309,
  "status": "passed"
});
formatter.before({
  "duration": 217792069,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "website should have a footer",
  "description": "",
  "id": "access-tatoc-webpage.;website-should-have-a-footer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user is on tatoc homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "it should have a footer",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyHomePage()"
});
formatter.result({
  "duration": 15808486,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.verifyFooter()"
});
formatter.result({
  "duration": 29177086,
  "status": "passed"
});
formatter.before({
  "duration": 246677570,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Grid page should have a heading Grid Gate",
  "description": "",
  "id": "access-tatoc-webpage.;grid-page-should-have-a-heading-grid-gate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "we are on grid page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Grid Gate heading should be there",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyGridPage()"
});
formatter.result({
  "duration": 202411340,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.gridHeading()"
});
formatter.result({
  "duration": 50532810,
  "status": "passed"
});
formatter.before({
  "duration": 203141702,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "when we click on green box frame dungeon page will open",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-green-box-frame-dungeon-page-will-open",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "we are on grid page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "we click on green box",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "frame dungeon page will open",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyGridPage()"
});
formatter.result({
  "duration": 134182741,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.Greenclick()"
});
formatter.result({
  "duration": 489630040,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.FrameDungeon()"
});
formatter.result({
  "duration": 118757878,
  "status": "passed"
});
formatter.before({
  "duration": 211460353,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "when we click on red box frame error page will open",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-red-box-frame-error-page-will-open",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "we are on grid page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "we click on red box",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "error page will open",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyGridPage()"
});
formatter.result({
  "duration": 107728308,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.Redclick()"
});
formatter.result({
  "duration": 186046931,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.ErrorPage()"
});
formatter.result({
  "duration": 85780824,
  "status": "passed"
});
formatter.before({
  "duration": 172846585,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Instructions should be there on grid gate page",
  "description": "",
  "id": "access-tatoc-webpage.;instructions-should-be-there-on-grid-gate-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "we are on grid page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Instructions should be there",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyGridPage()"
});
formatter.result({
  "duration": 88407885,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.verifyInstructions()"
});
formatter.result({
  "duration": 63934938,
  "status": "passed"
});
formatter.before({
  "duration": 175076475,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "when we are frame dungeon page box should be enabled",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-are-frame-dungeon-page-box-should-be-enabled",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "we are on frame dungeon page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "boxes should be enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyFrameDungeonPage()"
});
formatter.result({
  "duration": 198448257,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.BoxCheck()"
});
formatter.result({
  "duration": 40269831123,
  "status": "passed"
});
formatter.before({
  "duration": 201964369,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "when colors of both boxes are not same and we click on proceed than it will redirect to error page",
  "description": "",
  "id": "access-tatoc-webpage.;when-colors-of-both-boxes-are-not-same-and-we-click-on-proceed-than-it-will-redirect-to-error-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "we are on frame dungeon page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "we click on proceed link without changing color",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "it will redirect to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyFrameDungeonPage()"
});
formatter.result({
  "duration": 193694033,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.ErrorCheckClick()"
});
formatter.result({
  "duration": 40456106829,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.ErrorCheck()"
});
formatter.result({
  "duration": 173751082,
  "status": "passed"
});
formatter.before({
  "duration": 216152174,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "when colors of both boxes are same and we click on proceed than it will redirect to drag page",
  "description": "",
  "id": "access-tatoc-webpage.;when-colors-of-both-boxes-are-same-and-we-click-on-proceed-than-it-will-redirect-to-drag-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "we are on frame dungeon page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "we click on proceed link after changing color",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "it will redirect to drag page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyFrameDungeonPage()"
});
formatter.result({
  "duration": 212846770,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.FrameColor()"
});
formatter.result({
  "duration": 40505216694,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.Checkdrag()"
});
formatter.result({
  "duration": 105416,
  "status": "passed"
});
formatter.before({
  "duration": 196941131,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Drag me button should enabled on drag page",
  "description": "",
  "id": "access-tatoc-webpage.;drag-me-button-should-enabled-on-drag-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "we are on drag around page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "drag me button should be enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyDragPage()"
});
formatter.result({
  "duration": 83822391,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.DragButton()"
});
formatter.result({
  "duration": 40957680,
  "status": "passed"
});
formatter.before({
  "duration": 196319795,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "when we click on proceed button without draging then it will redirect to error page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-proceed-button-without-draging-then-it-will-redirect-to-error-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "we are on drag around page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "we click on proceed button without draging",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "it will redirect page to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyDragPage()"
});
formatter.result({
  "duration": 158255295,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.DragErrorTestClick()"
});
formatter.result({
  "duration": 281717018,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.DragErrorTest()"
});
formatter.result({
  "duration": 132391970,
  "status": "passed"
});
formatter.before({
  "duration": 201102768,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "when we click on proceed button after draging then it will redirect to popup window page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-proceed-button-after-draging-then-it-will-redirect-to-popup-window-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "we are on drag around page",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "we click on proceed button after draging",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "it will redirect to popup window page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyDragPage()"
});
formatter.result({
  "duration": 118492986,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.DragTestClick()"
});
formatter.result({
  "duration": 429064808,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.DragTest()"
});
formatter.result({
  "duration": 16512826,
  "status": "passed"
});
formatter.before({
  "duration": 164677382,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "when we are on popup window page then launch window link should be valid",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-are-on-popup-window-page-then-launch-window-link-should-be-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "we are on popup window page",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "launch window link should be valid",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyPopUpPage()"
});
formatter.result({
  "duration": 82231277,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowLinks()"
});
formatter.result({
  "duration": 75871296,
  "status": "passed"
});
formatter.before({
  "duration": 186885905,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "when we click on launch window link input box and submit button should be enabled",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-launch-window-link-input-box-and-submit-button-should-be-enabled",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "we are on popup window page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "we click on launch window link",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "input box and submit button should be enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyPopUpPage()"
});
formatter.result({
  "duration": 80064067,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowButtonClick()"
});
formatter.result({
  "duration": 203684882,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowButton()"
});
formatter.result({
  "duration": 162059064,
  "status": "passed"
});
formatter.before({
  "duration": 165314045,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "when we click on proceed button without launching other window then it will redirect to error page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-proceed-button-without-launching-other-window-then-it-will-redirect-to-error-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "we are on popup window page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "we click on proceed button",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "it will redirect window page to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyPopUpPage()"
});
formatter.result({
  "duration": 75804408,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowErrorClick()"
});
formatter.result({
  "duration": 219596903,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowErrorTest()"
});
formatter.result({
  "duration": 77069073,
  "status": "passed"
});
formatter.before({
  "duration": 168364823,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "when we submit form empty and then we click on proceed button then it will redirect to error page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-submit-form-empty-and-then-we-click-on-proceed-button-then-it-will-redirect-to-error-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "we are on popup window page",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "we submit form empty and click on proceed button",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "it will redirect again to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyPopUpPage()"
});
formatter.result({
  "duration": 78040424,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowNameTestClick()"
});
formatter.result({
  "duration": 483938518,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowNameTest()"
});
formatter.result({
  "duration": 104763623,
  "status": "passed"
});
formatter.before({
  "duration": 171751497,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "when we submit form after entering name and then we click on proceed button then it will redirect to cookie handling page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-submit-form-after-entering-name-and-then-we-click-on-proceed-button-then-it-will-redirect-to-cookie-handling-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "we are on popup window page",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "we submit form after entering name and click on proceed button",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "it will redirect again to cookie handling page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.verifyPopUpPage()"
});
formatter.result({
  "duration": 82408600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowTestClick()"
});
formatter.result({
  "duration": 431785426,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.WindowTest()"
});
formatter.result({
  "duration": 20666979,
  "status": "passed"
});
formatter.before({
  "duration": 162937164,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "when we click on proceed button without generating token then it will redirect to error page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-click-on-proceed-button-without-generating-token-then-it-will-redirect-to-error-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "we are on cookie page",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "we click on proceed button on cookie page",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "it will give error page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.CookieErrorPage()"
});
formatter.result({
  "duration": 84321809,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.ClickProceed()"
});
formatter.result({
  "duration": 195043870,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.CookieErrorTest()"
});
formatter.result({
  "duration": 96483613,
  "status": "passed"
});
formatter.before({
  "duration": 168298375,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "when we generate token but without setting the cookie we click proceed button then it will redirect to error page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-generate-token-but-without-setting-the-cookie-we-click-proceed-button-then-it-will-redirect-to-error-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "we are on cookie page",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "we generate token and click on proceed button",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "it should redirect to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.CookieErrorPage()"
});
formatter.result({
  "duration": 97805227,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.cookieGenerateTokenAndProceed()"
});
formatter.result({
  "duration": 293931506,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.errorTest()"
});
formatter.result({
  "duration": 106486112,
  "status": "passed"
});
formatter.before({
  "duration": 160421308,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "when we set cookie properly and then click on proceed then it will redirct to end page",
  "description": "",
  "id": "access-tatoc-webpage.;when-we-set-cookie-properly-and-then-click-on-proceed-then-it-will-redirct-to-end-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 104,
  "name": "we are on cookie page",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "we set cookie and then click on proceed",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "it will redirect to end page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.CookieErrorPage()"
});
formatter.result({
  "duration": 92718575,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.cookieSetProperly()"
});
formatter.result({
  "duration": 336154467,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.TestEndPage()"
});
formatter.result({
  "duration": 6725080,
  "status": "passed"
});
});