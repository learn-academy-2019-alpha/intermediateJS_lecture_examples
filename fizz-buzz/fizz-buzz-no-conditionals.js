class ToEleven{
  constructor(){
    this.values = {
      'fizzBuzz':'',
      'fizz': '',
      'buzz': '',
    }
  }
  setMatches(numbers, key){
    this.values[key] = numbers
  }
}
const numbers = [1,2,3,5,6,7,15, 45, 60, 90, 101]


const buzzer = new ToEleven();

const fifteen = numbers.filter((n)=>{
  return n % 15 === 0
})
buzzer.setMatches(fifteen, 'fizzBuzz')


const five = numbers.filter((n)=>{
  return n % 5 === 0 && n % 15 != 0
})
buzzer.setMatches(five, 'buzz')

const three = numbers.filter((n)=>{
  return n % 3 === 0 && n % 15 != 0
})
buzzer.setMatches(three, 'fizz')

console.log(buzzer.values)
