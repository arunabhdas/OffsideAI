// This file was generated by RedwoodJS
import { Success } from './PropertyCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindPropertyQuery, FindPropertyQueryVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './PropertyCell'

type CellInputs = CellProps<SuccessType, FindPropertyQuery, FindPropertyQueryVariables>

export default function (props: CellInputs): ReturnType<SuccessType>