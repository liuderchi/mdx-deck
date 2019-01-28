import React from 'react'
import Mdx, { _meta } from './preface.mdx'

const Component = Mdx[0]
console.log(_meta.date)

export default () => <Component />
