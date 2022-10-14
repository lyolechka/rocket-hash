export const generateKey = (index) => {
    return `${index}_${new Date().getTime()}`;
};
