let slideMenu = document.getElementById('slide_menu');

let imgBg1 = document.getElementById('image1');
let imgBg2 = document.getElementById('image2');
let imgBg3 = document.getElementById('image3');
let imgBg4 = document.getElementById('image4');

let continentH2 = document.getElementById('continent_h2');
let continentH3 = document.getElementById('continent_h3');
let continentFirstP = document.getElementById('continent_first_p');
let firstCountry = document.getElementById('first_country');
let continentSecondP = document.getElementById('continent_second_p');
let secondCountry = document.getElementById('second_country');
let continentThirdP = document.getElementById('continent_third_p');
let thirdCountry = document.getElementById('third_country');
let continentFourthP = document.getElementById('continent_fourth_p');

function openMenu(){
    slideMenu.style.width = '250px';
}

function closeMenu(){
    slideMenu.style.width = '0';
}

function europe(){
    imgBg1.style.backgroundImage = "url('img/Europe/europe1.jpg')";
    imgBg2.style.backgroundImage = "url('img/Europe/europe2.jpg')";
    imgBg3.style.backgroundImage = "url('img/Europe/europe3.jpg')";
    imgBg4.style.backgroundImage = "url('img/Europe/europe4.jpg')";

    continentH2.innerHTML = 'EUROPE';
    continentH3.innerHTML = 'Europe is densely populated';
    continentFirstP.innerHTML = 'It\'s the third continent in the world, with population of around 739 millions of people. And it\'s divided into 50 sovereign states and 6 more states with limited recognition.';
    firstCountry.innerHTML = 'FRANCE';
    continentSecondP.innerHTML = 'French cuisine is renowned for being one of the finest in the world. And the Eiffel Tower is one of its most popular tourist sites.';
    secondCountry.innerHTML = 'UNITED KINGDOM';
    continentThirdP.innerHTML = 'The United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland and many smaller islands. It is a monarchy, its queen being  Elizabeth II since 1952.';
    thirdCountry.innerHTML = 'GREECE';
    continentFourthP.innerHTML = 'Greece is the birthplace of democracy and Olympic Games. It has so many islands that its coastline is the 11th longest in the world.';
}

function asia(){
    imgBg1.style.backgroundImage = "url('img/Asia/asia1.jpg')";
    imgBg2.style.backgroundImage = "url('img/Asia/asia2.jpg')";
    imgBg3.style.backgroundImage = "url('img/Asia/asia3.jpg')";
    imgBg4.style.backgroundImage = "url('img/Asia/asia4.jpg')";

    continentH2.innerHTML = 'ASIA';
    continentH3.innerHTML = 'Asia is the largest continent';
    continentFirstP.innerHTML = 'It has the population of around 4.5 billions of people. And it\'s divided into 49 generally recognized sovereign states, 6 states with limited international recognition, and 6 dependent territories.';
    firstCountry.innerHTML = 'CHINA';
    continentSecondP.innerHTML = 'China is the world\'s most populous country, home of the invention of gunpowder and printing.';
    secondCountry.innerHTML = 'INDIA';
    continentThirdP.innerHTML = 'India is the world\'s second-most populous country, and Taj Mahal monument is one of the seven wonders of the world.';
    thirdCountry.innerHTML = 'JAPAN';
    continentFourthP.innerHTML = 'Japan is most famous for its animeand manga culture, samurai, electronics, cuisine and Nintendo. And also for the legendary japanese discipline.';
}

function africa(){
    imgBg1.style.backgroundImage = "url('img/Africa/africa1.jpg')";
    imgBg2.style.backgroundImage = "url('img/Africa/africa2.jpg')";
    imgBg3.style.backgroundImage = "url('img/Africa/africa3.jpg')";
    imgBg4.style.backgroundImage = "url('img/Africa/africa4.jpg')";

    continentH2.innerHTML = 'AFRICA';
    continentH3.innerHTML = 'Africa\'s average population is the youngest amongst all the continents';
    continentFirstP.innerHTML = 'Africa is the world\'s second largest and second most-populous continent. And it\'s divided into 54 sovereign states and 10 non-sovereign territories.';
    firstCountry.innerHTML = 'NATURE';
    continentSecondP.innerHTML = 'The Nile is the longest river in the world, and it covers 11 countries, Tanzania, Uganda, Rwanda, Burundi, the Democratic Republic of the Congo, Kenya, Ethiopia, Eritrea, South Sudan, Republic of the Sudan and Egypt';
    secondCountry.innerHTML = 'PYRAMIDS';
    continentThirdP.innerHTML = 'The earliest known Egyptian pyramids are found at Saqqara, northwest of Memphis. and the earliest among these is the Pyramid of Djoser, which was built during the third dynasty.';
    thirdCountry.innerHTML = 'ANIMALS';
    continentFourthP.innerHTML = 'The largest remaining populations of wild animals like lions, elephants, buffalos, rhinoceros, cheetah, hyena, leopard and hundreds of other species are found in Africa.';
}

function australia(){
    imgBg1.style.backgroundImage = "url('img/Australia/australia1.jpg')";
    imgBg2.style.backgroundImage = "url('img/Australia/australia2.jpg')";
    imgBg3.style.backgroundImage = "url('img/Australia/australia3.jpg')";
    imgBg4.style.backgroundImage = "url('img/Australia/australia4.jpg')";

    continentH2.innerHTML = 'AUSTRALIA';
    continentH3.innerHTML = 'Australia is the oldest, flattest and driest inhabited continent';
    continentFirstP.innerHTML = 'Its  population density, 2.8 inhabitants per square kilometre, is among the lowest in the world. Until the early 19th century, Australia was best known as "New Holland", a name first applied by the Dutch explorer Abel Tasman in 1644.';
    firstCountry.innerHTML = 'SIDNEY';
    continentSecondP.innerHTML = 'Sydney has the world’s most famous opera house, which was designed by Danish architect Jørn Utzon, and formally opened on 20 October 1973.';
    secondCountry.innerHTML = 'NATURE';
    continentThirdP.innerHTML = 'The Great Barrier Reef and Uluru are the most famous masterpieces of australian nature. The Great Barrier Reef is the only living thing on Earth visible from space, and Uluru is the sandstone monolith, 348 meters high, and a sacred site to the indigenous Anangu people.';
    thirdCountry.innerHTML = 'OCEAN';
    continentFourthP.innerHTML = 'Australia is an island continent, which means that every state is surrounded by Ocean waters.';
}

function northAmerica(){
    imgBg1.style.backgroundImage = "url('img/North America/namerica1.jpg')";
    imgBg2.style.backgroundImage = "url('img/North America/namerica2.jpg')";
    imgBg3.style.backgroundImage = "url('img/North America/namerica3.jpg')";
    imgBg4.style.backgroundImage = "url('img/North America/namerica4.jpg')";

    continentH2.innerHTML = 'NORTH AMERICA';
    continentH3.innerHTML = 'North America';
    continentFirstP.innerHTML = 'most North Americans speak English, Spanish or French';
    firstCountry.innerHTML = 'CANADA';
    continentSecondP.innerHTML = 'Canada is the world\'s second-largest country by total area. In 1931, Canada achieved near-total independence from the United Kingdom.';
    secondCountry.innerHTML = 'UNITED STATES';
    continentThirdP.innerHTML = 'The United States is the world\'s oldest surviving federation. It\'s the foremost military power in the world, making up a third of global military spending, and is a leading political, cultural, and scientific force internationally.';
    thirdCountry.innerHTML = 'TORONTO';
    continentFourthP.innerHTML = 'Some say that Toronto is the most multicultural city in the world, since there are more languages spoken in Toronto than any other city.';
}


function southAmerica(){
    imgBg1.style.backgroundImage = "url('img/South America/samerica1.jpg')";
    imgBg2.style.backgroundImage = "url('img/South America/samerica2.jpg')";
    imgBg3.style.backgroundImage = "url('img/South America/samerica3.jpg')";
    imgBg4.style.backgroundImage = "url('img/South America/samerica4.jpg')";

    continentH2.innerHTML = 'SOUTH AMERICA';
    continentH3.innerHTML = 'South America is the continent of Portuguese or Spanish speakers';
    continentFirstP.innerHTML = 'It\'s the fourth in area and fifth in population. And it\'s divided into 12 sovereign states and a non-sovereign area (the Falkland Islands).';
    firstCountry.innerHTML = 'BRASIL';
    continentSecondP.innerHTML = 'The Carnival in Rio de Janeiro is a festival held every year before Lent and considered the biggest carnival in the world with two million people per day on the streets. The first festivals of Rio date back to 1723., and it\'s celebrated in honour of the gods and to respect the great waters.';
    secondCountry.innerHTML = 'PERU';
    continentThirdP.innerHTML = 'Machu Picchu was constructed as an estate for the Inca emperor Pachacuti, and it is the most familiar icon of Inca civilization.';
    thirdCountry.innerHTML = 'ARGENTINA';
    continentFourthP.innerHTML = 'Argentina has an exceptional amount of climate diversity, ranging from subtropical in the north to polar in the far south. Modern Argentine culture has been largely influenced by Italian, Spanish and other European immigration from France, United Kingdom, and Germany.';
}