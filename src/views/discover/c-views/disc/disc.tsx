import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const disc: FC<IProps> = () => {
  return <div>disc</div>
}

export default memo(disc)