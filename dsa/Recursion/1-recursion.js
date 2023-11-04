function countDown(num) {
    // Base case
    if(num <= 0) {
        console.log('All Done!');
        return;
    }

    // Recursive case
    console.log(num)
    num--;
    countDown(num);
}
countDown(10);