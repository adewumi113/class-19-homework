const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

 
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteenHundred = inventors.filter(function (a){
        if(a.year > 1499 && a.year < 1600){
            return true;
        }else{
            return false;
        }
    })
    console.table(fifteenHundred)
    //alternatively
    const fifteenHundreds = inventors.filter(x => x.year >= 1500 && x.year <= 1599)
    console.table(fifteenHundreds)

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const fullNames = inventors.map(a => a.first + ' ' + a.last)
    console.table(fullNames);

    // or use
    const fullName = inventors.map(a => `${a.first} ${a.last}`)
    console.table(fullName);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const birthdate = inventors.sort((a, b) => a.year - b.year)
    console.table(birthdate)

    //alternatively
    const birthdates = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
    console.table(birthdates)


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    let totalYearsLived = 0;
    for (let i = 0; i < inventors.length; i++){
        totalYearsLived += inventors[i].passed - inventors[i].year;
    }
    console.table(totalYearsLived)

    //alternatively
    const totalYearsOfInventors = inventors.reduce((sum, x) => {
        return sum += x.passed - x.year
    }, 0)
    console.table(totalYearsOfInventors)


    // 5. Sort the inventors by years lived
    
    const oldestInventor = inventors.sort((x, y) => (y.passed - y.year)-(x.passed - x.year))
    console.table(oldestInventor);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const category = document.querySelector('.mw-category-generated');
    //const links = category.querySelectorAll('a');
    // convert the links above to an array
    const links = Array.from(category.querySelectorAll('a'));
    //alternatively you can wrap it into array and spread it
    //const links = [...category.querySelectorAll('a')];
    //alternatively both above can be written in one line as const category = document.querySelector('.mw-category-generated a');
    const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'))
        console.log(de);


   const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const sortLastName = people.sort(function (a, b){
        const [aLast, aFirst] = a.split(', ');
        const [bLast, bFirst] = b.split(', ');
        return aLast > bLast ? 1 : -1;
    });
    console.log(sortLastName)

    //alternatively using arrow function
    const sortLastNames = people.sort((a, b) => {
        const [xLast, xFirst] = a.split(', ');
        const [yLast, yFirst] = b.split(', ');
        return xLast > yLast ? 1 : -1;
    });
    console.log(sortLastName)



    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const transportation = data.reduce(function(obj, item){
        if (!obj[item]){
            obj[item] = 0; 
        }
        obj[item]++;
        return obj;
    }, {});
    console.log(transportation);