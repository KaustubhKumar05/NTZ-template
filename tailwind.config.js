module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#FF5733',
                    default: '#F97316',
                    light: '#FB923C',
                    lighter: '#FDE68A'
                },
                secondary: { default: '', light: '', dark: '' },
                background: {
                    default: '#0F172A',
                    light: '#1E293B'
                },
                bord: {
                    default: '#374151',
                    light: '#8595AD'
                }
            }
        }
    },
    plugins: []
};
