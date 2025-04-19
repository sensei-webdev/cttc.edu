/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                upDown: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-100px)' },
                    '100%': { transform: 'translateY(0)' },
                }
            },
            animation: {
                upDown: 'upDown 2s ease-in-out infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
}
