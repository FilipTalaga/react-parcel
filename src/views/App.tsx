import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
    active: boolean;
}

const Root = styled.div<Props>`
    margin: ${({ active }) => (active ? '2rem' : '4rem')};
`;

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await res?.json();
            setData(json);
        })();
    }, [setData]);

    return (
        <Root active={false}>
            <p>This is a sample app</p>
            {data.map((item: any) => item.title)}
        </Root>
    );
};
export default App;
