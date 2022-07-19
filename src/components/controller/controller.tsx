import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {
  changeProcessAmount,
  changeProcessStarted,
  changeRightIndex,
} from '../../store/process/slice'
import React, { ChangeEvent } from 'react'

export const Controller = (): JSX.Element => {
  const processAmount = useSelector((state: RootState) => state.process.processAmount)
  const dispatch = useDispatch()

  const clear = () => {
    dispatch(changeProcessStarted(false))
    dispatch(changeRightIndex(0))
  }

  const handleChangeProcess = (event: ChangeEvent<HTMLInputElement>) => {
    clear()
    dispatch(changeProcessAmount(Number(event.target.value)))
  }

  const handleChangeProcessStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    clear()
    dispatch(changeProcessStarted(true))
  }
  return (
    <div className={'w-full flex justify-center items-center'}>
      <div className={'w-72 bg-gray-100 border border-gray-500 my-4 rounded p-2 drop-shadow-md'}>
        <h6 className={'text-gray-700 font-black'}>Quantidade de Processos</h6>
        <input
          className={'w-full border border-gray-400 rounded p-2 mt-2 text-gray-500 outline-none'}
          onChange={handleChangeProcess}
          type={'number'}
          min={1}
          max={10}
          value={Number(processAmount)}
          autoComplete={'off'}
        />
        <button
          className={'w-full h-12 pd-2 bg-gray-700 text-white font-bold my-2 rounded'}
          onClick={handleChangeProcessStart}
        >
          Executar
        </button>
      </div>
    </div>
  )
}
