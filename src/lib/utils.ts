export const getWindowSize = () => {
    if(typeof window !== 'undefined')
    {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    return undefined;
}
