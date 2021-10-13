import React, { CSSProperties, PropsWithChildren, } from 'react'


// 创建类型接口
export interface IProps {
}

// // 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<IProps> {
    public render() {
        return <p>Clicked:times</p>
    }
}
// export default function Counter(props: PropsWithChildren<IProps>) {
//     return <p>Clicked:times</p>
//   }