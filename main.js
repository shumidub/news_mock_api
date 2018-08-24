
var category = require('./category.js') 
var news = require('./news.js') 


/////////////////////////////     GET CATEGORIES      ///////////////////////////////////

Sandbox.define('/news/categories', 'GET', function(req, res){
    // if (!req.is('application/json')) { return res.send(400, 'Invalid content type, expected application/json'); }
    res.type('application/json');
    res.status(200);
    return res.json({code: 0, list: category.all})
})




/////////////////////////////     GET NEWS LIST    ////////////////////////////////////////
Sandbox.define('/news/categories/{id}/news','GET', function(req, res) {
     // if (!req.is('application/json')) { return res.send(400, 'Invalid content type, expected application/json'); }
    res.type('application/json');
    res.status(200);
    var list = [];
    var pageSize = 10;
    var max = 0;
    var min = 0;
    
    //TODO add id logic
    var id = req.params.id;
    

    var newsList = [];
    if(id == 0){ for(var i = 0; i <= 14; i++){ if (news.news[i]!=null) newsList.push(news.news[i]);  } }
    else if (id == 1){ for(var i = 15; i <= 15; i++){ if (news.news[i]!=null) newsList.push(news.news[i]);  } }  
    else {  newsList = news.newsEmpty; }
    if (req.query.page) { 
        max = (req.query.page + 1) * pageSize
        min = (req.query.page) * pageSize
        for(var i = min; i <= max; i++){ if (newsList[i]!=null) list.push(newsList[i]);  }
    } else {
        for (i in newsList) {  list.push(newsList[i])  }
    }
    return res.json({code: 0, list: list })
})
    
   


/////////////////////////////       GET DETAIL LIST        ////////////////////////////////////////////
Sandbox.define('/news/details', 'GET', function(req, res){
    // if (!req.is('application/json')) { return res.send(400, 'Invalid content type, expected application/json'); }
    res.type('application/json');
    res.status(200);
    
    if (req.query.id) { 
        var id = req.query.id
        var list = []
        for (i in news.news) {
            if (news.news[i].id == id){
               var preDeatailNews = news.news[i]
               var detailNews = {
                   id: preDeatailNews.id,
                   title: preDeatailNews.title,
                   date: preDeatailNews.date,
                   shortDescription: preDeatailNews.shortDescription,
                   fullDescription:" <p>Полный текст новости <b>с жирным текстом</b>, <i>курсивом</i> и <a href=\"https://www.github.com/shumidub/news\">одной ссылкой</a></p><p>Кроме того, в тексте два параграфа</p>"
               }    
               list.push(detailNews)
            }  
        }
        return res.json({code: 0, news:detailNews})
    }
    else { return res.json({code: 0, news:detailNews})  }
})


