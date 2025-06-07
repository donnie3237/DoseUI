export const masonryx = {
    '.d-masonryx' :{
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100vw',
        '.masonry-brick' : {
            flex: 'auto', // Improved flexibility for variable-height content
            height: '250px', // Ensure minimum height for visual consistency
            minWidth: '150px',
            margin: '8px', // Consistent margin for spacing (optional)
            overflow: 'hidden',
            position: 'relative',
        }
    },
}