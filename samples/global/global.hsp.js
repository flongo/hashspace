var $set=require("hsp/$set"); 
// ################################################################ 
//  This file has been generated by the hashspace compiler          
//  Direct MODIFICATIONS WILL BE LOST when the file is recompiled!  
// ################################################################ 
var hsp=require("hsp/rt");


var item = require("hsp/rt").template(["text","value"], function(n){
  return [n.$if({e1:[1,1,"value"]},1,[n.elt("div",0,0,0,[n.elt("div",0,{"class":"label"},0,[n.$text({e1:[1,1,"text"]},["",1])]),n.elt("div",0,{"class":"value"},0,[n.$text({e1:[1,1,"value"]},["",1])])])])];
});


$set(hsp.global, "label", item);
$set(hsp.global, "ln", {personDetails:"Person details"});


var test = require("hsp/rt").template(["person"], function(n){
  var _ln,_label;try {_ln=ln} catch(e) {_ln=n.g('ln')};try {_label=label} catch(e) {_label=n.g('label')};
  return [n.elt("div",{e1:[2,2,_ln,"personDetails"]},{"class":"global","title":["",1]},0,[n.cpt([_label,"label"],{e1:[1,2,"person","firstName"]},{"text":"First Name: ","value":["",1]},0),n.cpt([_label,"label"],{e1:[1,2,"person","lastName"]},{"text":"Last Name: ","value":["",1]},0)])];
});


// Needed by the playground application.
// Update it, but do not remove it!
$set(module, "exports", {
    template: test,
    data: [{
        firstName:"Homer",
        lastName:"Simpson"
    }]
});