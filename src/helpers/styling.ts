// Uniform set of breakpoints
export interface Breakpoints {
    xxl: number
    xl: number
    lg: number
    md: number
    sm: number
    xs: number
    xxs: number
}

export const breakpoints: Breakpoints = {
    xxl: 1560,
    xl: 1440,
    lg: 1280,
    // Upper limit for tablet
    md: 1020,
    sm: 768,
    xs: 660,
    // Upper limit for mobile
    xxs: 480,
}


export const isMobile = () => {
    // Check to see if we are on the server
    if(typeof window !== 'undefined')
    {
        return window.innerWidth <= breakpoints['xxs']
    } 

    return false
}
