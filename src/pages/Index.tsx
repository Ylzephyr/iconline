import React from 'react';
import { Box } from '@mui/material';
import '@/css/index.css'
import { useRecoilState } from 'recoil';
import { textState } from '@/states/textState';


export default function IndexPage() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'primary.dark',
            }}>
            <TextInput />
        </Box>
    )
}

function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo:{text}
        </div>
    )
}
