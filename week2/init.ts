type VoidFunc = () => void;
export const init = (callback: VoidFunc): void => {
    console.log('default initailization finished');
    callback();
    console.log('all initialization finished');
};