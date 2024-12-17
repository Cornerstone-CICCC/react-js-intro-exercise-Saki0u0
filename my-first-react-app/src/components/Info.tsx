
type Props = {
  firstname:string,
  lastname:string,
  age:number,
  isStudent:boolean
}


const Info = ({firstname,lastname,age,isStudent}: Props) => {
  return (
    <div>
      <span>Name: {firstname} {lastname}, Age: {age}, Is student: {isStudent ? 'Yes' : 'No'}</span>
    </div>
  )
}

export default Info