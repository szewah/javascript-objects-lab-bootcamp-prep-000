var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({},object, key, value)
}

var obj = { prop: 1 }
function destructivelyUpdateObjectWithKeyAndValue (object, key,
value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  
}