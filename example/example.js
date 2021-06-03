'use strict';
const MemoryConsumer = require('../main');

const consumer = new MemoryConsumer(true);

setTimeout(() => {
    console.log('filling memory');
    consumer.fillMemoryMb();
}, 10000);

setTimeout(() => {
    console.log('filling memory');
    consumer.fillMemoryMb(1024);
}, 15000);

setTimeout(() => {
    console.log('clean memory');
    consumer.cleanMemory();
}, 20000);
