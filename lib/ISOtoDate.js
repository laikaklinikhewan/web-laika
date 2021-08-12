const ISOtoDate = (ISOdateString) => {
    let date = new Date(ISOdateString);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        if (day < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        if (hour < 10){
            hour = '0' + hour
        }

        if (minutes < 10) {
            minutes = '0' + minutes
        }

        return `${day}/${month}/${year} - ${hour}:${minutes}`;
}

export default ISOtoDate