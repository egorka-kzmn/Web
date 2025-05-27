function showProgress(percent) {
    if (percent % 10 !== 0 || percent < 0 || percent > 100) {
        console.log("Invalid input. Must be 0, 10, 20, ..., 100.");
        return;
    }

    const blocks = percent / 10;
    const bar = "[" + "%".repeat(blocks) + ".".repeat(10 - blocks) + "]";
    const status = percent === 100 ? "Complete!" : "Still loading...";
    console.log(`${percent}% ${bar} ${status}`);
}

showProgress(30);
showProgress(100);