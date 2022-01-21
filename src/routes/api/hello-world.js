export async function get() {
    let a = 5;
    let b = 10;

    return {
        body: {result: a + b}
    };
}


