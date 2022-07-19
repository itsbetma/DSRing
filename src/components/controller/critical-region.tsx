import { ArcherElement } from 'react-archer'

export const CriticalRegion = () => {
  return (
    <div className={'w-full h-48 flex justify-center items-end'}>
      <ArcherElement id={'critical-region'}>
        <div
          className={
            'w-16 h-16 bg-orange-500 rounded flex justify-center items-center font-bold text-white'
          }
        >
          R
        </div>
      </ArcherElement>
    </div>
  )
}
