
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const data = [
  {
    "_id": 296,
    "firstName": "Selma Terry",
    "lastName": "Lenore Chase",
    "email": "lenorechase@futurize.com",
    "phone": "+1 (819) 406-3304"
  },
  {
    "_id": 379,
    "firstName": "Rhonda Steele",
    "lastName": "Edwina Patrick",
    "email": "edwinapatrick@futurize.com",
    "phone": "+1 (890) 499-2710"
  },
  {
    "_id": 163,
    "firstName": "Gordon Robinson",
    "lastName": "Jeanie Cross",
    "email": "jeaniecross@futurize.com",
    "phone": "+1 (914) 414-3868"
  },
  {
    "_id": 877,
    "firstName": "Mai Lambert",
    "lastName": "Chavez Mack",
    "email": "chavezmack@futurize.com",
    "phone": "+1 (991) 402-2044"
  },
  {
    "_id": 705,
    "firstName": "Deana Avery",
    "lastName": "Charlotte Nash",
    "email": "charlottenash@futurize.com",
    "phone": "+1 (815) 472-2886"
  },
  {
    "_id": 506,
    "firstName": "Daisy Matthews",
    "lastName": "Sweeney Farley",
    "email": "sweeneyfarley@futurize.com",
    "phone": "+1 (897) 484-2876"
  },
  {
    "_id": 360,
    "firstName": "Janie Blair",
    "lastName": "Ferguson Burton",
    "email": "fergusonburton@futurize.com",
    "phone": "+1 (904) 432-3612"
  },
  {
    "_id": 963,
    "firstName": "Hobbs Drake",
    "lastName": "Durham Lloyd",
    "email": "durhamlloyd@futurize.com",
    "phone": "+1 (839) 491-3470"
  },
  {
    "_id": 701,
    "firstName": "Holt Noel",
    "lastName": "Parsons Talley",
    "email": "parsonstalley@futurize.com",
    "phone": "+1 (946) 459-3051"
  },
  {
    "_id": 814,
    "firstName": "Shanna Wise",
    "lastName": "Ruiz Meyers",
    "email": "ruizmeyers@futurize.com",
    "phone": "+1 (889) 538-2955"
  },
  {
    "_id": 636,
    "firstName": "Webster Kirkland",
    "lastName": "Joni Christensen",
    "email": "jonichristensen@futurize.com",
    "phone": "+1 (926) 485-3412"
  },
  {
    "_id": 266,
    "firstName": "Williams Mcfarland",
    "lastName": "Hull Pratt",
    "email": "hullpratt@futurize.com",
    "phone": "+1 (886) 593-2445"
  },
  {
    "_id": 380,
    "firstName": "Hendricks Graves",
    "lastName": "Rosa Barton",
    "email": "rosabarton@futurize.com",
    "phone": "+1 (995) 471-3450"
  },
  {
    "_id": 936,
    "firstName": "Chambers Olsen",
    "lastName": "Fay Ayers",
    "email": "fayayers@futurize.com",
    "phone": "+1 (838) 584-3106"
  },
  {
    "_id": 886,
    "firstName": "Charmaine Pollard",
    "lastName": "Allie Small",
    "email": "alliesmall@futurize.com",
    "phone": "+1 (958) 530-2014"
  },
  {
    "_id": 837,
    "firstName": "Stokes Browning",
    "lastName": "Lorrie Craig",
    "email": "lorriecraig@futurize.com",
    "phone": "+1 (800) 505-2824"
  },
  {
    "_id": 59,
    "firstName": "Dena Sharp",
    "lastName": "Roberts Wilkins",
    "email": "robertswilkins@futurize.com",
    "phone": "+1 (939) 545-3615"
  },
  {
    "_id": 168,
    "firstName": "Heath Anthony",
    "lastName": "Millicent Roman",
    "email": "millicentroman@futurize.com",
    "phone": "+1 (904) 533-2600"
  },
  {
    "_id": 598,
    "firstName": "Craft Romero",
    "lastName": "Weber Blackburn",
    "email": "weberblackburn@futurize.com",
    "phone": "+1 (947) 447-2143"
  },
  {
    "_id": 293,
    "firstName": "Bettie England",
    "lastName": "Bennett Patterson",
    "email": "bennettpatterson@futurize.com",
    "phone": "+1 (833) 528-3865"
  },
  {
    "_id": 325,
    "firstName": "Herminia Campbell",
    "lastName": "Eloise Blackwell",
    "email": "eloiseblackwell@futurize.com",
    "phone": "+1 (849) 448-2585"
  },
  {
    "_id": 511,
    "firstName": "Lindsey Mcclain",
    "lastName": "Eddie Sutton",
    "email": "eddiesutton@futurize.com",
    "phone": "+1 (950) 481-3335"
  },
  {
    "_id": 989,
    "firstName": "Jan Larson",
    "lastName": "Angelita Love",
    "email": "angelitalove@futurize.com",
    "phone": "+1 (992) 432-2791"
  },
  {
    "_id": 182,
    "firstName": "Tyler Sexton",
    "lastName": "Mara Pierce",
    "email": "marapierce@futurize.com",
    "phone": "+1 (989) 525-2277"
  },
  {
    "_id": 13,
    "firstName": "Elise Dixon",
    "lastName": "William Marks",
    "email": "williammarks@futurize.com",
    "phone": "+1 (854) 453-3266"
  },
  {
    "_id": 289,
    "firstName": "Blanche Woodard",
    "lastName": "Hines Bentley",
    "email": "hinesbentley@futurize.com",
    "phone": "+1 (911) 478-3171"
  },
  {
    "_id": 38,
    "firstName": "Francis Richards",
    "lastName": "Bryant Lopez",
    "email": "bryantlopez@futurize.com",
    "phone": "+1 (984) 407-3619"
  },
  {
    "_id": 444,
    "firstName": "Olivia Scott",
    "lastName": "Bethany Leon",
    "email": "bethanyleon@futurize.com",
    "phone": "+1 (864) 568-3231"
  },
  {
    "_id": 830,
    "firstName": "Maria Newton",
    "lastName": "Gallagher Solis",
    "email": "gallaghersolis@futurize.com",
    "phone": "+1 (969) 433-3461"
  },
  {
    "_id": 829,
    "firstName": "Daphne Glenn",
    "lastName": "Lilly Rosa",
    "email": "lillyrosa@futurize.com",
    "phone": "+1 (846) 592-3819"
  },
  {
    "_id": 88,
    "firstName": "Valentine Petersen",
    "lastName": "Mandy Bowman",
    "email": "mandybowman@futurize.com",
    "phone": "+1 (888) 565-3179"
  },
  {
    "_id": 392,
    "firstName": "Whitaker Myers",
    "lastName": "Williamson May",
    "email": "williamsonmay@futurize.com",
    "phone": "+1 (950) 432-3439"
  },
  {
    "_id": 263,
    "firstName": "Mcclain Downs",
    "lastName": "Chrystal Ruiz",
    "email": "chrystalruiz@futurize.com",
    "phone": "+1 (916) 508-2000"
  },
  {
    "_id": 426,
    "firstName": "Waters Rocha",
    "lastName": "John Estrada",
    "email": "johnestrada@futurize.com",
    "phone": "+1 (930) 457-2094"
  },
  {
    "_id": 964,
    "firstName": "Rasmussen Harvey",
    "lastName": "Karin Franco",
    "email": "karinfranco@futurize.com",
    "phone": "+1 (923) 463-2008"
  },
  {
    "_id": 119,
    "firstName": "Chapman Cole",
    "lastName": "Bean Owens",
    "email": "beanowens@futurize.com",
    "phone": "+1 (983) 488-3646"
  },
  {
    "_id": 382,
    "firstName": "Harmon Rosario",
    "lastName": "Emerson Jordan",
    "email": "emersonjordan@futurize.com",
    "phone": "+1 (840) 401-3882"
  },
  {
    "_id": 547,
    "firstName": "Ware Sherman",
    "lastName": "Earline Waller",
    "email": "earlinewaller@futurize.com",
    "phone": "+1 (836) 579-3258"
  },
  {
    "_id": 424,
    "firstName": "Joseph Walters",
    "lastName": "Denise Emerson",
    "email": "deniseemerson@futurize.com",
    "phone": "+1 (905) 415-2202"
  },
  {
    "_id": 197,
    "firstName": "House Mitchell",
    "lastName": "Kennedy Henderson",
    "email": "kennedyhenderson@futurize.com",
    "phone": "+1 (843) 526-2211"
  },
  {
    "_id": 998,
    "firstName": "Emily Bauer",
    "lastName": "Sara Whitfield",
    "email": "sarawhitfield@futurize.com",
    "phone": "+1 (929) 492-2683"
  },
  {
    "_id": 893,
    "firstName": "Parks Bartlett",
    "lastName": "Sylvia Moody",
    "email": "sylviamoody@futurize.com",
    "phone": "+1 (947) 531-3124"
  },
  {
    "_id": 791,
    "firstName": "Barrett Norris",
    "lastName": "Letha Stout",
    "email": "lethastout@futurize.com",
    "phone": "+1 (959) 471-2498"
  },
  {
    "_id": 475,
    "firstName": "Aguilar Sims",
    "lastName": "Viola Bradley",
    "email": "violabradley@futurize.com",
    "phone": "+1 (939) 435-3608"
  },
  {
    "_id": 5,
    "firstName": "Katrina Morrow",
    "lastName": "Maura Guthrie",
    "email": "mauraguthrie@futurize.com",
    "phone": "+1 (978) 525-3694"
  },
  {
    "_id": 203,
    "firstName": "Lilian Foley",
    "lastName": "Darlene Obrien",
    "email": "darleneobrien@futurize.com",
    "phone": "+1 (904) 575-3856"
  },
  {
    "_id": 817,
    "firstName": "Russo Heath",
    "lastName": "Fannie Morales",
    "email": "fanniemorales@futurize.com",
    "phone": "+1 (926) 449-2036"
  },
  {
    "_id": 945,
    "firstName": "Cannon Nunez",
    "lastName": "Kenya Clark",
    "email": "kenyaclark@futurize.com",
    "phone": "+1 (925) 412-3716"
  },
  {
    "_id": 281,
    "firstName": "Stephenson Koch",
    "lastName": "Winifred Newman",
    "email": "winifrednewman@futurize.com",
    "phone": "+1 (856) 450-3516"
  },
  {
    "_id": 971,
    "firstName": "Berger Russell",
    "lastName": "Gilda Chambers",
    "email": "gildachambers@futurize.com",
    "phone": "+1 (810) 539-2297"
  },
  {
    "_id": 979,
    "firstName": "Mollie Chan",
    "lastName": "Marilyn Bell",
    "email": "marilynbell@futurize.com",
    "phone": "+1 (888) 512-2020"
  },
  {
    "_id": 22,
    "firstName": "Katie Bennett",
    "lastName": "Cecelia Oneal",
    "email": "ceceliaoneal@futurize.com",
    "phone": "+1 (889) 476-3068"
  },
  {
    "_id": 361,
    "firstName": "Jean Leach",
    "lastName": "Mona Mclean",
    "email": "monamclean@futurize.com",
    "phone": "+1 (960) 558-2995"
  },
  {
    "_id": 222,
    "firstName": "Bonnie Buck",
    "lastName": "Albert Brennan",
    "email": "albertbrennan@futurize.com",
    "phone": "+1 (801) 565-3141"
  },
  {
    "_id": 185,
    "firstName": "Ramos Berg",
    "lastName": "Sheri Pena",
    "email": "sheripena@futurize.com",
    "phone": "+1 (814) 511-2535"
  },
  {
    "_id": 926,
    "firstName": "Page Lott",
    "lastName": "Ward Gibbs",
    "email": "wardgibbs@futurize.com",
    "phone": "+1 (999) 569-2883"
  },
  {
    "_id": 148,
    "firstName": "Bernard Mayo",
    "lastName": "Melody Grimes",
    "email": "melodygrimes@futurize.com",
    "phone": "+1 (933) 596-2982"
  },
  {
    "_id": 542,
    "firstName": "Schroeder Nichols",
    "lastName": "Whitney Kent",
    "email": "whitneykent@futurize.com",
    "phone": "+1 (840) 424-2261"
  },
  {
    "_id": 573,
    "firstName": "Mcintosh Mccray",
    "lastName": "Jewel Burch",
    "email": "jewelburch@futurize.com",
    "phone": "+1 (923) 437-2873"
  },
  {
    "_id": 849,
    "firstName": "Ola Booth",
    "lastName": "Millie Aguirre",
    "email": "millieaguirre@futurize.com",
    "phone": "+1 (828) 437-2301"
  },
  {
    "_id": 732,
    "firstName": "Lyons Hicks",
    "lastName": "Katheryn Barron",
    "email": "katherynbarron@futurize.com",
    "phone": "+1 (935) 519-3986"
  },
  {
    "_id": 859,
    "firstName": "Moran Stephens",
    "lastName": "Myrna Dunn",
    "email": "myrnadunn@futurize.com",
    "phone": "+1 (872) 505-3675"
  },
  {
    "_id": 381,
    "firstName": "Gabrielle Garrison",
    "lastName": "Bauer Mcclure",
    "email": "bauermcclure@futurize.com",
    "phone": "+1 (981) 415-2879"
  },
  {
    "_id": 25,
    "firstName": "Henson Mccarthy",
    "lastName": "Robyn Mendez",
    "email": "robynmendez@futurize.com",
    "phone": "+1 (932) 569-2545"
  },
  {
    "_id": 976,
    "firstName": "Minerva Butler",
    "lastName": "Greer Mcgowan",
    "email": "greermcgowan@futurize.com",
    "phone": "+1 (913) 590-2989"
  },
  {
    "_id": 682,
    "firstName": "Mckenzie Chapman",
    "lastName": "Buckley Soto",
    "email": "buckleysoto@futurize.com",
    "phone": "+1 (939) 483-2458"
  },
  {
    "_id": 998,
    "firstName": "Crane Stevens",
    "lastName": "Aurora Gregory",
    "email": "auroragregory@futurize.com",
    "phone": "+1 (940) 600-2860"
  },
  {
    "_id": 907,
    "firstName": "Sykes Huber",
    "lastName": "Foley Rodriquez",
    "email": "foleyrodriquez@futurize.com",
    "phone": "+1 (894) 417-3604"
  },
  {
    "_id": 360,
    "firstName": "Teresa Tyler",
    "lastName": "Louisa Hendrix",
    "email": "louisahendrix@futurize.com",
    "phone": "+1 (935) 431-3742"
  },
  {
    "_id": 533,
    "firstName": "Ryan Riggs",
    "lastName": "David Waters",
    "email": "davidwaters@futurize.com",
    "phone": "+1 (805) 563-2486"
  },
  {
    "_id": 701,
    "firstName": "Watkins Mcdonald",
    "lastName": "Farley Gordon",
    "email": "farleygordon@futurize.com",
    "phone": "+1 (946) 476-3518"
  },
  {
    "_id": 16,
    "firstName": "Sondra Fisher",
    "lastName": "Ericka Armstrong",
    "email": "erickaarmstrong@futurize.com",
    "phone": "+1 (958) 594-3879"
  },
  {
    "_id": 735,
    "firstName": "Magdalena Kidd",
    "lastName": "Stevenson Cardenas",
    "email": "stevensoncardenas@futurize.com",
    "phone": "+1 (929) 511-3516"
  },
  {
    "_id": 453,
    "firstName": "Tania Lowery",
    "lastName": "Warner Hyde",
    "email": "warnerhyde@futurize.com",
    "phone": "+1 (946) 469-3899"
  },
  {
    "_id": 761,
    "firstName": "Blackwell Cain",
    "lastName": "Amber Joyner",
    "email": "amberjoyner@futurize.com",
    "phone": "+1 (943) 595-2142"
  },
  {
    "_id": 943,
    "firstName": "Avery Montoya",
    "lastName": "Burch Hays",
    "email": "burchhays@futurize.com",
    "phone": "+1 (920) 419-2670"
  },
  {
    "_id": 231,
    "firstName": "Lavonne Patton",
    "lastName": "Tammie Baker",
    "email": "tammiebaker@futurize.com",
    "phone": "+1 (971) 552-2361"
  },
  {
    "_id": 375,
    "firstName": "Roman Cruz",
    "lastName": "Cochran Dominguez",
    "email": "cochrandominguez@futurize.com",
    "phone": "+1 (820) 508-2587"
  },
  {
    "_id": 168,
    "firstName": "Navarro Williamson",
    "lastName": "Rosalind Wong",
    "email": "rosalindwong@futurize.com",
    "phone": "+1 (834) 539-2274"
  },
  {
    "_id": 592,
    "firstName": "Amanda Crawford",
    "lastName": "Myra Norton",
    "email": "myranorton@futurize.com",
    "phone": "+1 (970) 533-2375"
  }
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  