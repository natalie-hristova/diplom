var express = require('express');
var router = express.Router();
const {ensureAuthenticated} = require('../config/auth') 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'nati' 
  });
});

router.get('/register', (req,res)=>{
    res.render('register');
})

router.get('/dashboard',ensureAuthenticated,(req,res)=>{
    res.render('dashboard',{
        user: req.user
    });
})

router.get('/blog', function(req, res, next) {
  res.render('blog', { 
      destinationTitle: "блог",
      title: '', 
      firstTitle: "",
      firstParagraph: "",
      firstImg: "",
      secondTitle: "",
      secondParagraph: "",
      secondImg: "",
      thirdTitle: "",
      thirdParagraph: "",
      thirdImg: ""
  });
});


router.get('/babavida', function(req, res, next) {
  res.render('blog', 
  	{ 
      destinationTitle: "Баба Вида",
  		title: 'Баба Вида', 
      firstTitle: "История",
      firstParagraph: "Крепостта се намира на северозападния бряг на големия завой на река Дунав при град Видин. Има форма на висок трапец, разположен в направление от североизток (моста с входа) към югозапад. Значително е разширена и укрепена по времето на цар Иван Срацимир. Голяма част от сградите, построени по онова време, са останали неразрушени. Тя е цитаделата – най-укрепената част от изградената по османско време Видинска градска крепост, наричана от османците Девствената крепост, тъй като никога не е била завземана със сила.",
      firstImg: "assets/img/destinations/babavida.jpeg",
      secondTitle: "Паметник",
      secondParagraph: "Баба Вида“ е крепост-музей, отворен за посещения от 1958 г., паметник на културата с национално значение от 1964 г., в списъка на Стоте национални туристически обекта на БТС (има печат на БТС). В музея се опазват и представят находки и сведения за историята на замъка. Възстановки в музея пресъздават някогашната обстановка в крепостта. В прохода между югоизточните външна и вътрешна стени откъм Дунав е изградена (1964) сцена за летен театър с 350 места, където се провежда фестивалът „Видински театрални дни“. Правят се художествени изложби, най-често в двора. Крепостта е главната туристическа забележителност на града. Всеки уикенд се посещава от 300 – 400 души",
      secondImg: "assets/img/destinations/babavidamap.png",
      thirdTitle: "География",
      thirdParagraph: "Крепостта се намира на северозападния бряг на големия завой на река Дунав при град Видин. Има форма на висок трапец, разположен в направление от североизток (моста с входа) към югозапад. Значително е разширена и укрепена по времето на цар Иван Срацимир. Голяма част от сградите, построени по онова време, са останали неразрушени. Тя е цитаделата – най-укрепената част от изградената по османско време Видинска градска крепост, наричана от османците Девствената крепост, тъй като никога не е била завземана със сила.",
      thirdImg: "assets/img/destinations/babavidainside.jpg"
  	},
  	);
});

router.get('/konaka', function(req, res, next) {
  res.render('blog', 
    { 
      destinationTitle: "Музей Конака",
      title: '', 
      firstTitle: "История на Регионалния музей",
      firstParagraph: "Създаден е като археологическо дружество през 1910 г. Според устава му неговата цел е „да се издирват, съхраняват и изучават паметниците на миналото, които ще се пазят в музей, който се устройва в град Видин“. Дружеството развива активна дейност, но войните от 1912 до 1918 г. нарушават ритъма на неговата работа.",
      firstImg: "assets/img/destinations/konaka1.jpeg",
      secondTitle: "Регионален музеен комплекс",
      secondParagraph: "Днес музейният комплекс включва административна сграда и 3 исторически обекта – средновековната крепост Баба Вида, Музей „Конака“ и Кръстатата казарма. В последните 2 сгради са поместени експозициите „Археология“, „История на България 15-19 век“ и „Етнография“, замъкът разполага със своя музейна сбирка. В Историческия музей във Видин работят общо 20 души, от които 13 специалиста – историци и филолози, обединени в следните отдели: „Праистория“, „Археология“, „Нумизматика“, „История на България, 15-19 век“, „Етнография“ и „Нова история“. В неговите фондове се съхраняват 58 583 експоната, а на територията на Община Видин са разположени 56 недвижими паметника на културата - археологически обекти от Античността и Средновековието, църкви и джамии от 15-19 век, както и сгради от периода 1880-1925 г.",
      secondImg: "assets/img/destinations/konaka.jpg",
      thirdTitle: "Музей конака",
      thirdParagraph: "Сградата е построена през втората половина на 18 в. По-късно е значително видоизменена. Вероятно първоначално е била едноетажна с приходи в двете посоки, пресичащи се под прав ъгъл в средата. В централната му част се издигало кулообразно помещение – наблюдателница на пожарната охрана. Турците използвали сградата за полицейско управление, а към 1870-те години в нея се настанила българската църковна община. След Освобождението е преустроена, като в нея са вмъкнати елементи от българската възрожденска архитектура. От 1956 г. сградата е преустроена за музей, чиито експозиции обхващат периода до 1878 г.",
      thirdImg: "assets/img/destinations/konaka1.jpeg"
    }
    );
});

router.get('/stambolkapia', function(req, res, next) {
  res.render('blog', 
    { 
      destinationTitle: "Стамбол Капия - Видин",
      title: '', 
      firstTitle: "Портата",
      firstParagraph: "Портата е строена през втората половина на XVII век, когато е била част от укрепената част на град Видин - Калето. Въпросната крепост е построена през периода 1690-1720 г. след австро-турските войни. Използвана е модерната за времето вобанова укрепителна система. Стамбол капия е най-известната порта на крепостта, може би защото през нея е минавал пътят към Цариград (Стамбол).",
      firstImg: "assets/img/destinations/stambolkapia1.jpeg",
      secondTitle: "Крепостта Калето",
      secondParagraph: "Крепостта Калето била построена във форма на полукръг с диаметър около 1.8 км, образуван от стена, която следва брега на р. Дунав. В частта откъм Дунав укреплението е било съставено от две успоредни каменни стени, а откъм сушата има бастионно очертание от седем фасове. Те са съединени помежду си и с крайбрежната стена посредством 8 бастиона. Прокопали са и външен крепостен ров, широк около 18 и дълбок 6 метра, който се е пълнел с вода от Дунав.",
      secondImg: "assets/img/destinations/stambolkapia3.jpg",
      thirdTitle: "крепостният ров",
      thirdParagraph: "При Стамбол капия крепостният ров е бил по-широк и по-дълбок, с формата на четвъртит басейн и е служил за стоянка и зимуване на турската дунавска флотилия. За защита на мостовете и крепостните врати пред всяка от тях е имало по един равелин, въоръжен с 6-8 оръдия, които са стреляли през амбразури. Портата представлява засводен проход, в чийто стени има каземати за караулни помещения. Затваряли са се с двукрили порти от дъбови греди, обковани с желязо. Над рова се е преминавало по дървени мостове, едната част от които е била подвижна. Към Дунав се е излизало през 5 врати: Аралък, Топ, Сарай, Телеграф и Сюргюн капии. В днешно време пред Стамбол капия има фонтан с фигурата на малко момченце във фонтана.",
      thirdImg: "assets/img/destinations/stambolkapia2.jpg"
    }
    );
});

router.get('/login', function(req, res, next) {
  res.render('login', 
    { 
      title: 'login' 
    }
    );
});




router.get('/author', function(req, res, next) {
  res.render('blog', 
  	{ 
  		title: 'babavida' 
  	}
  	);
});




module.exports = router;
