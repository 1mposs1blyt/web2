class addsController{
    constructor(){
        this.add = [{
            title: 'Тест',
            description: 'Тест',
            text:'Тест',
            image: 'Тест.png'

        }]
    }
    async fname(req, res){
        res.render('index.html')
    }
    async adds(req, res){
        const add = new adds({
            title: 'Test',
            description: 'lorem ipsum Test Test Test Test Test Test Test',
            image: "image/path/imagename.png"
        })
        add.save(function(err) {
            if (err) {
                return console.log(err)
            }
            res.send("Записан тестовый пользователь")
        })
    }
    
}

new addsController();
module.exports = addsController;