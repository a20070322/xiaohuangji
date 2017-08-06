function mytime(date){
   return new Date(parseInt(date) * 1000).toLocaleString().substr(0,17)
}
function zhuan (str){
  let rex = /\s/g
  str=str.toString().replace(rex,"\n")
  return str
}
module.exports = {
  mytime:mytime,
  zhuan:zhuan
}
