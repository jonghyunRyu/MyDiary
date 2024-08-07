export const getDayOfWeek = (date) => {
    const week = ["일", "월", "화", "수", "목", "금", "토"];

    return week[date.getDay()];
};

export const getStringDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return year + "-" + month + "-" + day;
};

export const getTotalDays = (date) => {
    const newDate = date;
    newDate.setMonth(newDate.getMonth() + 1, 0);

    return newDate.getDate();
};

export const getStartDate = (date) => {
    const newDate = date;
    newDate.setDate(1);

    return newDate.getDay();
}