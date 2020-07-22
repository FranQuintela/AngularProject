// Module dependencies
const   mongoose = require('mongoose'),
        Customer = require('../models/customer'),
        Post = require('../models/post'),
        State = require('../models/state'),
        dbConfig = require('./configLoader').databaseConfig,
        connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
        connection = null;

class DBSeeder {

    init() {
        mongoose.connection.db.listCollections({name: 'customers'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    }
                });
    }

    seed() {

        console.log('Seeding data....');

        //Posts

        var imgs =
        [
            "CCWR4dbhhuA",
            "CCEZ9g5BYQx",
            "CCG2UsBBisy",
            "CCjSPsOBuJq",
            "CCq1D_dhnJZ",
            "CCTkl8bBAD2",
            "CADiSllFOa",
            "B_LFujFBIRE",
            "B-FuA1GBLQg",
            "B-nTJgnhmDQ"

        ];

        var descriptions =
        [
            " Hay momentos en verano que echo de menos el frío y el poder taparme con una manta al dormir.",
            "Hoy es el último día en el #pridemonth2020 y quería hacer mi pequeña aportación en apoyo a un colectivo que esta desgraciadamente oprimido. ",
          " Me cuesta mucho trabajo conciliar el sueño por las noches, porque me encanta pasarme el día tumbada en la cama pensando mil y una cosas. ¿A vosotros os pasa algo parecido?",
          "He notado mucho la diferencia de trabajar con una fotografía mía a trabajar una externa. ¿A vosotros os pasa lo mismo?",
          "Que se agradece en verano una noche fresca",
          "Creo que igual voy un poco tarde, pero quería enseñar cómo me quedo el #voguechallenge y espero que os guste!!",
          "Esta semana he estado un poco triste y preocupada y la presión de la Universidad ni ayuda.",
          "Primavera es mi estación favorita todo se ve precioso, me anima ver como mis plantas crecen y les salen flores. Os gusta la primavera? ",
          "Este tiempo en #casa por el #coronavirus me ha servido pea dedicarme un poquito más a mi y a los tipos de dibujos que me gustan. Espero que lo esteis sobrellevando de la mejor manera posible!! .",
          "He pintado por primera vez un de mis peces he de decir que me ha encantado tanto hacerlo como el resultado, estoy pensando en continuar algunos mas!!! ."

        ];

        var dates =
        [
            "07/07/2020",
            "30/06/2020",
            "01/07/2020",
            "13/07/2020",
            "16/07/2020",
            "06/07/2020",
            "11/05/2020",
            "19/04/2020",
            "23/03/2020",
            "05/04/2020",
        ];

        var styles =
        [
            "collage",
            "collage",
            "collage",
            "collage",
            "collage",
            "collage",
            "drawing",
            "drawing",
            "drawing",
            "drawing",
        ];

        Post.remove({});

        var l = imgs.length,
            i;

        for (i = 0; i < l; i++) {

            var post = new Post({
                'image' : imgs[i],
                'date': dates[i],
                'description': descriptions[i],
                'style': styles[i]
            });

            //console.log('firstOrder: ' + firstOrder + ", lastOrder: " + lastOrder);

            post.save((err, post) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted post: ' + post.image + ' ' + post.date);
                }
            });
        }

    }
}

module.exports = new DBSeeder();




