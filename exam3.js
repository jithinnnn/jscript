countryData=[
    {
      "name": "India",
      "topLevelDomain": [
        ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
        "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 1380004385,
      "latlng": [
        20.0,
        77.0
      ],
      "demonym": "Indian",
      "area": 3287590.0,
      "gini": 35.7,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "flags": {
        "svg": "https://flagcdn.com/in.svg",
        "png": "https://flagcdn.com/w320/in.png"
      },
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        }
      ],
      
      "flag": "https://flagcdn.com/in.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "IND",
      "independent": true
    }
  ]
// console.log(countryData.map(i=>i.borders).flat());
// borders=countryData.map(i=>i.borders).flat()
// var count=0
// for(i of borders){
//     count++
// }
// console.log(count);
//  console.log(countryData.map(i=>i['languages']).flat().map(i=>i['name']));
//  console.log(countryData.map(i=>i.currencies).flat().map(i=>i.code));












// names=["amal","vinu","ashok ram","amal","arun","anu","vonod "]

// function len(){
//  var shortest=names[0]
//  var longest=names[0]
//     for(i of names){
//         if(i.length<shortest.length){
//             shortest=i
//         }
//         else if(i.length>longest.length){
//             longest=i
//         }
//     }
//     console.log(shortest);
//     console.log(longest);
// }

// len()
                                                  
    // for(row=1;row<=4;row++){
    //     s=""
    //     for(col=1;col<=row;col++){
    //         if(row==3 && col==2 || row==4 && col==2 || row==4 && col==3){
    //         s=s+"  "
    //         }
    //         else{
    //             s=s+"1 "
    //         }
    //     }
    //     console.log(s);
    // }
    // for(row=1;row<=5;row++){
    //         s=""
    //         for(col=5;col>=row;col--){
    //             if(row==1 && col==2 || row==1 && col==3 || row==1 && col==4 || row==2 && col==3 || row==2 && col==4 || row==3 && col==4){
    //             s=s+"  "
    //         }
    //         else{
    //             s=s+"1 "
    //         }
    //         }
    //         console.log(s);
    //     }    

// space=5
// for (i=1;i<=4;i++) {
//   s=""
//   for (k=space; k>0; k--) {
//     s=s+" "
//   }
//   space--
// for(j=1;j<=i;j++){
//     s=s+"* "
// }
// console.log(s);
// }
// for(i=1;i<=4;i++){
//     s=''
//     for(k=space;k>0;k--){
//         s=s+""
//     }
//     space--
//     for(j=4;i>=i;j--){
//         s=s+"* "
//     }
//     console.log(s);
// }


a=[1,2,4,5,6,8,9,10]
for(i in a){
    console.log(i);
}

