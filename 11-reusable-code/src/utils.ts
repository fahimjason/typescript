export const dateStringToDate = (dateSting: string): Date => {
    const dateParts = dateSting.split('/').map((value: string): number => {
        return parseInt(value);
    });

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
