import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy-assets'

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm'
    },
    plugins: [
      typescript({ include: ['./src/**/*.ts'] }),
      copy({
        assets: [
          // You can include directories
          'src/list.json'
        ]
      })
    ]
  }
]
