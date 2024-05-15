const nayok = {
    name: 'sakib khan',
    id: 123,
    address: 'hatirpool',
    isSingle: true,
    friends: ['opo', 'razz', 'salman', 'amir'],
    movies:[{name: 'no-1', year: 2015}, {name:'king khan', year: 2020}],
    act: function(){
        console.log('acting like sakib khan')

    },
    car:{
        brand: 'tesla',
        price: 5000000,
        made: 2024,
        manufacture:{
            name: 'tesla',
            ceo: 'elon mask',
        }


}
}
// console.log(student);
// console.log(student.friends);
// console.log(student.car);

// after add function 
 console.log(nayok.act);
 nayok.act();