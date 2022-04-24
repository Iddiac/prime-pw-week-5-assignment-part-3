console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title,artist,published){
     const record= {title:title,artist:artist,published:published};
        collection.push(record)
            return record;
}
addToCollection('struggle','ujjwal','2022');
    console.log(collection[0]);
addToCollection('monkey','tilo','2020');
    console.log(collection[1]);
addToCollection('elephant','hero','2019');
    console.log(collection[2]);
addToCollection('wow','starman','2018');
    console.log(collection[3]);
addToCollection('nice','pumpkinboi','2017');
    console.log(collection[4]);
addToCollection('tide','podgirl','2016');
    console.log(collection[5]);

    console.log(collection.length); // output 6



function showCollection(collection){
    console.log(collection.length);
    for (let i=0; i<collection.length; i++){
       console.log(collection[i].title,'by',collection[i].artist,'Published in',collection[i].published);  // lists them all correctly};
    } 
}
showCollection(collection);



function findByArtist(artist){
let song=[];
    for(i=0; i<collection.length; i++)
        if(collection[i].artist ===artist){
            song.push(collection[i]);
        }
        console.log(song.length)
    return song;
}
console.log(findByArtist('ujjwal'));// output 1
console.log(findByArtist('saurab'));// output 0

