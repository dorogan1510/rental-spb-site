import { Roboto, Cormorant, Roboto_Slab } from '@next/font/google'

export const bodyFont = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
export const titleFont = Cormorant({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
})
