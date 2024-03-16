function counter(n) {
    console.log(n);
    if (n > 0) {
        setTimeout(function () {
            counter(n - 1);
        }, 1000);
    }
}

counter(10);
