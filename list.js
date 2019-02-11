var m = require('mithril')

var List = {
    list: [],
    loadList: function(){
        return m.request({
            method:"GET",
            url:"http://127.0.0.1:5000/",
            withCredentials: false,
            dataType: "jsonp"
        })
        .then(function(result){
            List.list = result
            console.log(List.list)
        })
        
    }
}
module.exports = List