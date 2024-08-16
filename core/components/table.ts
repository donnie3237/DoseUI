export const alearts = {
    '.d-table': {
        '@apply rounded border-s-4 border-red-500 bg-red-50 p-4': {},
        'p': {
            '@apply mt-2 text-sm text-red-700': {},
        },
        'strong': {
            '@apply block font-medium text-red-800': {},
        },
    },
    '.d-alert-warning': {
        '@apply rounded border-s-4 border-yellow-500 bg-yellow-50 p-4': {},
        'p': {
            '@apply mt-2 text-sm text-yellow-700': {},
        },
        'strong': {
            '@apply block font-medium text-yellow-800': {},
        },
    },
    '.d-alert-success': {
        '@apply rounded border-s-4 border-green-500 bg-green-50 p-4': {},
        'p': {
            '@apply mt-2 text-sm text-green-700': {},
        },
        'strong': {
            '@apply block font-medium text-green-800': {},
        },
    },
};

export const dose = {
    'd-table': (value:any) => {
      return {
        borderRadius: '0.375rem', // Tailwind's 'rounded' class
        borderWidth: '4px',
        borderColor: '#f56565', // Tailwind's 'border-red-500'
        backgroundColor: '#fef2f2', // Tailwind's 'bg-red-50'
        padding: value, // Use the dynamic value
      };
    },
}
