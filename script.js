let myName = 'Sana Udoekong';
let height = '5.9inches';
let country = 'Nigeria';

function printInfo(n, h, c) {
    console.log("Name: " + n);
    document.write("Name: " + n + "\n|\n");

    console.log("Height: " + h);
    document.write("\nHeight: " + h  + "\n|\n");

    console.log("Country: " + c);
    document.write("\nCountry: " + c  + "\n|\n");
}

printInfo(myName, height, country);