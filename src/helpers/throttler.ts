export const throttler = (func: Function, timeout: number) => {
  let active = true;
    
    return (...args: any[]) => {
      if (active) {
        active = false;
        setTimeout(() => (active = true), timeout);
        func(...args);
      }
    };
};
