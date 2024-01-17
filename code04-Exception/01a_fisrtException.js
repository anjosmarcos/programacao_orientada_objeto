try {
    throw new Error('My first exception');
}
catch (e) {
    console.log(e.message);
}