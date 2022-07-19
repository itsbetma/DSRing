import { Process } from '../process/process'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export const Ring = (): JSX.Element => {
  const processAmount = useSelector((state: RootState) => state.process.processAmount)
  return (
    <div className={'w-100 h-48 flex items-center justify-center'}>
      {[...Array(processAmount)].map((process, index) => {
        return (
          <div key={`process-emitter-${index}`}>
            <Process pid={index + 1} />
          </div>
        )
      })}
    </div>
  )
}
