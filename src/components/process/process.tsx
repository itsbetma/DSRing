import { ArcherElement } from 'react-archer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { shouldAccessCriticalArea } from '../utils/random'

type OwnProps = {
  pid: number
}

type Props = OwnProps

export const Process = ({ pid }: Props): JSX.Element => {
  const rightIndex = useSelector((state: RootState) => state.process.rightIndex)

  const id = `process-${pid}`
  const hasVisualFeedback = pid === rightIndex
  const hasAccess = hasVisualFeedback ? shouldAccessCriticalArea() : false

  const child = (
    <div className={' flex flex-col justify-end items-end'}>
      <div className={'w-full flex justify-end'}>
        {hasVisualFeedback ? (
          <div className={'h-9 w-3 bg-red-500 rounded'}></div>
        ) : (
          <div className={'h-9 w-3 bg-transparent rounded'}></div>
        )}
      </div>
      <div
        className={`m-2 h-16 w-16 rounded-full bg-emerald-500 ${
          hasVisualFeedback && 'animate-pulse border-2 border-red-500'
        } flex justify-center items-center`}
      >
        <p className={'text-white font-black'}>P{pid}</p>
      </div>
    </div>
  )
  return hasAccess ? (
    <ArcherElement
      id={id}
      relations={[
        {
          targetId: 'critical-region',
          targetAnchor: 'top',
          sourceAnchor: 'bottom',
          style: {
            strokeDasharray: '5,5',
            endShape: {
              arrow: {
                arrowLength: 0,
                arrowThickness: 0,
              },
            },
          },
        },
      ]}
    >
      {child}
    </ArcherElement>
  ) : (
    child
  )
}
