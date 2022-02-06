
export const MappedElement = ({data, renderElement}) => {
    if (data && data.length) {
        return data.map((obj, index, array) => renderElement(obj, index, array));
    }
    return null;
};

export const getFormattedDate=(initialDate) =>{
    var date = new Date(initialDate);
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return str;
}