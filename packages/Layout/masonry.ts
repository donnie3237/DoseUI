export const masonry = {
    '.d-masonry' :{
        columnCount: '4',
        columnGap: '8px',
        '@media (max-width: 1200px)': {
            columnCount: '3',
        },
        '@media (max-width: 922px)': {
            columnCount: '2',
        },
        '@media (max-width: 768px)': {
            columnCount: '1',
        },
        '.gridss': {
            display: 'inline-block',
            marginBottom: '8px',
            position: 'relative',
            width: '100%',
            'img':{
                width: '100%'
            }
        },
    },
}