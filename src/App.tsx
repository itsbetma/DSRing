import React, { useEffect } from 'react'
import { Header } from './components/header'
import { Ring } from './components/fixed/ring'
import { Controller } from './components/controller/controller'
import { ArcherContainer } from 'react-archer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { changeRightIndex } from './store/process/slice'
import { CriticalRegion } from './components/controller/critical-region'

function App() {
  const processAmount = useSelector((state: RootState) => state.process.processAmount)
  const processStarted = useSelector((state: RootState) => state.process.processStarted)

  const dispatch = useDispatch()

  const emulateChanges = async () => {
    for (let i = 0; i <= processAmount; i++) {
      dispatch(changeRightIndex(i))
      await new Promise((res) => setTimeout(res, 2000))
    }
  }

  useEffect(() => {
    if (!processStarted) return
      emulateChanges()
  }, [processStarted])

  return (
    <div>
      <Header />
      <Controller />
      {processStarted ? (
        <div className={'w-100 h-100'}>
          <ArcherContainer strokeColor='gray'>
            <div className={'w-full h-full'}>
              <Ring />
              <CriticalRegion />
            </div>
          </ArcherContainer>
        </div>
      ) : (
        <div
          className={
            'h-48 w-2/4 bg-orange-500 rounded-md my-16 m-auto flex justify-center items-center text-white font-bold'
          }
        >
          Por favor clique no botão Executar!
        </div>
      )}
    </div>
  )
}

export default App
