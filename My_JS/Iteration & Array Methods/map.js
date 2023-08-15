// const Numbers=[1,2,3,4,5];

// const doubledNumbers=Numbers.map(function (num){
//     return num*2;
// })

// console.log(doubledNumbers);

// doubledNumbersarr=[];

// Numbers.forEach(function (num){
//     doubledNumbersarr.push(num*2);
// })

// console.log(doubledNumbers);




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

// Let's create an array of company names:


const CompanyNames=companies.map(function (Number){
    return (Number.name);
})

// console.log(CompanyNames);


// Let's create an array of new objects with just the name and category properties:

const newarr1=[];

const companyInfo=companies.map((company)=>{
    return{
        name:company.name,
        category:company.category,
    }
    
})

// console.log(companyInfo);


const companyYears=companies.map(company=>{
    return{
        name:company.name,
        length:company.end-company.start,
    }
})

console.log(companyYears);

const Numbers=[1,2,3,4,5,6,7,8,9];

const newarr=Numbers.filter((item)=>item%2===0).map((evenitem)=> evenitem*2);
console.log(newarr);