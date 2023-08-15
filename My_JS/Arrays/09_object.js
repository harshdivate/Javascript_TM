const library=[
   {
        title:'Forst',
        author:'harsh divate',
        status:{
            own:true,
            reading:false,
            read:false,
        },
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
          own: true,
          reading: false,
          read: false,
        },
      },
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        status: {
          own: true,
          reading: false,
          read: true,
        },
      },
]
console.log(library);
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const {title:firstbook}=library[0];

const str=JSON.stringify(library);

console.log(firstbook);
console.log(str);