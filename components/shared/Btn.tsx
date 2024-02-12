
import { Button } from '../ui/button'

type textProps = {
    text: string,
}

const Btn = ({text}: textProps) => {
  return (
    <Button className='text-base  font-semibold tracking-widest rounded-lg bg-[#283891] hover:bg-[#344294] uppercase' size='lg'>{text}</Button>
  )
}

export default Btn