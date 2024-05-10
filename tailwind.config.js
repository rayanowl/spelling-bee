module.exports = { 
    mode: 'jit', 
    purge: [ 
        './pages/**/*.{js,ts,jsx,tsx}', 
        './components/**/*.{js,ts,jsx,tsx}', 
    ], 
    theme: { 
          extend: {
            colors: {
                'oa' : '#111827',
            },
          }, 
    }, 
    variants: {}, 
    plugins: [], 
}