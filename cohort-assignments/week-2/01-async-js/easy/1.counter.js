function counter(num) {
    let i = num;
    const intervalId = setInterval(() => {
        if (i > 0) {
            console.log(i);
            i--;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

counter(10);
