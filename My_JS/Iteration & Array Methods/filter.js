const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];



// Get only the companies that are in the **Retail** category:

// console.log(companies[0].category);
// const retail=companies.filter(function (no){
//   return no.category==='Retail';
// })
// console.log(retail);

// const retailone=companies.filter(no=>no.category==='Retail');
// console.log(retailone);

// // Get companies that started in or after 1980 and ended in or before 2005


// const startfilter=companies.filter(no=> no.start>=1980 && no.end<=2005);
// console.log(startfilter);

// const tenyear=companies.filter(no=> no.end-no.start>=10);
// console.log(tenyear);

const Numbers=[1,2,3,4,5,6,7];
evenNo=[];
Numbers.forEach(function (num){
  if(num%2===0){
    evenNo.push(num);
  }
}
)

console.log(evenNo);