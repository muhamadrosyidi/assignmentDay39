function isWeekend() {
    let today = new Date ();
    let day = today.getDay()
    
    return ((day == 0) || (day == 6))
}

function isLeapYear() {
    let today = new Date ();
    let year = today.getFullYear()
    
    return (year % 4 == 0)
}

const checkisWeekend = async (req, res) => {
    const result = await isWeekend();
        res.json({
            data: result,
            error: null
        });

};

const checkisLeapYear = async (req, res) => {
    const result = await isLeapYear();
        res.json({
            data: result,
            error: null
        });
        
};

module.exports = {
    checkisWeekend,
    checkisLeapYear
};