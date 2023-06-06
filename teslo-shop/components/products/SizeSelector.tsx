import { ISize } from '@/interfaces';
import { Box, Button } from '@mui/material';
import { FC } from 'react';

interface Props {
    selectedSize: ISize;
    size: ISize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, size }) => {
    return (
        <Box>
            {size.map((size) => (
                <Button
                    key={size}
                    size='medium'
                    color={selectedSize === size ? 'info' : 'primary'}
                >
                    {size}
                </Button>
            ))}
        </Box>
    );
};
