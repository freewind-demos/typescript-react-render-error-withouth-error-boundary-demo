import React, { FC } from 'react';
import { Hello } from './Hello';

type Props = {};

export const App: FC<Props> = ({ }) => {
    return <div>
        <h1>Hello React</h1>
        <Hello />
        <Hello />
    </div>;
}
