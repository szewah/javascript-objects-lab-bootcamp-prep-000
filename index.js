var recipes = {}
var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({},obj,{[key: value]})
       Object.assign({},obj,{[key]:value})

}

function destructivelyUpdateObjectWithKeyAndValue (object, key,
value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  
}