/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('videos').del();
  await knex('videos').insert([
    {
    id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
    title: 'BMX Rampage: 2021 Highlights',
    channel: 'Red Cow',
    image: 'https://d-brainflix-api.herokuapp.com/images/bmx-rampage.webp',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    views: 1001023,
    likes: 110985,
    duration: '4:01',
    },
    {
      id: "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14",
      title: "Become A Travel Pro In One Easy Lesson",
      channel: "Todd Welch",
      image: "https://d-brainflix-api.herokuapp.com/images/todd-welch.webp",
      description: "Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. This video will focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves.",
      views: 2043765,
      likes: 400058,
      duration: "7:26",

    },
    {
      id: "25ce5d91-a262-4dcf-bb87-42b87546bcfa",
      title: "Les Houches The Hidden Gem Of The Chamonix",
      channel: "Cornelia Blair",
      image: "https://d-brainflix-api.herokuapp.com/images/cornelia-blair.webp",
      description: "Les Houches, located 6 kilometres from Chamonix, is a ski resort with a domain which extends from an altitude of 950 metres up to 1900 metres. Long descents through tree-lined slopes are combined with impressive views of the Mont Blanc massif and the Chamonix valley. Les Houches is twinned with the Russian villages of Sochi and Krasnaya-Polyana and was chosen by the International Olympic Committee to assist in the organization of the 2014 Winter Olympic Games. Watch for more fun facts!",
      views: 16950,
      likes: 3856,
      duration: "4:13",

    },
    {
      id: "b6f35f03-7936-409b-bd2a-446bcc5f30e7",
      title: "Travel Health Useful Medical Information For",
      channel: "Glen Harper",
      image: "https://d-brainflix-api.herokuapp.com/images/glen-harper.webp",
      description: "Concerned about your health while travelling? You should know that international travellers should always be extra concerned about their health and safety. This video provides essential information on travel health risks and preventive measures to keep you and your loved ones safe during your travels.",
      views: 739945,
      likes: 98352,
      duration: "8:34",

    },
    {
      id: "1b964601-a6dd-4fcc-b5f3-1000338c9557",
      title: "Cheap Airline Tickets Great Ways To Save",
      channel: "Emily Harper",
      image: "https://d-brainflix-api.herokuapp.com/images/emily-harper.webp",
      description: "Want to know how to get cheap flights? This video has great tips on how to book the cheapest flight possible to anywhere in the world. Remember, Keep your searches top secret. Use the best flight search engines. Identify the cheapest day to fly out. Fly for free with points. Befriend budget airlines. Search for airline error and sale fares. Book connecting flights yourself for less. ",
      views: 72342,
      likes: 8785,
      duration: "2:59",

    },
    {
      id: "9c268c0a-83dc-4b96-856a-bb5ded2772b1",
      title: "Take A Romantic Break In A Boutique Hotel",
      channel: "Ethan Owen",
      image: "https://d-brainflix-api.herokuapp.com/images/ethan-owen.webp",
      description: "Your loved one has been dreaming about a romantic getaway with you, if you want to bring the spark back into your relationship this is the place to go! Small and design-forward, boutique hotels promise a more intimate vacation stay, each one chock-full of character while offering plenty of inimitable features (from exposed brick to panoramic ocean views)",
      views: 345987,
      likes: 76588,
      duration: "12:26",

    },
    {
      id: "fc5261d1-58a0-47e4-9c19-2b7a1715fa1b",
      title: "Choose the Perfect Accommodations",
      channel: "Lydia Perez",
      image: "https://d-brainflix-api.herokuapp.com/images/lydia-perez.webp",
      description: "Worried about finding the perfect travel accommodations? There are many things to consider when booking an accommodation. Consider picking the right location. Location is an important consideration for an enjoyable stay. Check the rating and price. Consider apartment or condo rentals. Weigh the food options. Is it family-friendly? Watch for extra fees. Assess the on-site amenities.",
      views: 252796,
      likes: 4905,
      duration: "7:31",

    },
    {
      id: "99478bed-6428-49ed-8eaa-f245a5414336",
      title: "Cruising Destination Ideas",
      channel: "Timothy Austin",
      image: "https://d-brainflix-api.herokuapp.com/images/timothy-austin.webp",
      description: "Do you dream of sailing in to the sunset without a care in the world? Going on a cruise can be the perfect way to make this dream come true. If you’re considering taking your very first cruise, think about the various advantages. A cruise vacation offers great value as almost everything is included, from accommodation and food to entertainment and transfers.",
      views: 29984,
      likes: 2552,
      duration: "5:58",

    },
    {
      id: "76ca28c0-7dea-4553-887f-8e5129a80fc3",
      title: "Train Travel On Track For Safety",
      channel: "Scotty Cranmer",
      image: "https://d-brainflix-api.herokuapp.com/images/scotty-cranmer.webp",
      description: "Traveling by train can be convenient, enjoyable and economical. You can minimize your risk of injury, illness, and theft by taking a few simple precautions. Before you travel, you should pack only the necessities. This will make your luggage easy to carry and store during your travels. You should always assume that the tap water on the train is not potable. Whenever it is possible, stock up on bottles of water to reduce the risk of dehydration. Remember, never accept food or drinks from strangers!",
      views: 3092284,
      likes: 75985,
      duration: "4:20",
      
    },
  ]);
};